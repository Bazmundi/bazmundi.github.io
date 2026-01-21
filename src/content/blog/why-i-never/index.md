---
title: "Why I never"
pubDate: 2025-12-20 22:42:33
categories:
  - ai
tags:
  - artificial-intelligence
  - chatgpt
  - codex
  - copilot
  - llm
  - ollama
---
I did really. I've been playing with AI coding tools to see what is what.



I have opencode (openspec), backed by ollama, codex (via my ChatGPT account) and of course CoPilot cause you get that sucker for free.



I am liking also (the idea at least) of [`spec-workflow-mcp`](https://github.com/Pimzino/spec-workflow-mcp) as it counter balances openspec, since openspec seems good at hacking at current code bases ("brownfield") and spec-workflow promises to be great for starting from scratch ("greenfield"). Can't vouch for spec-workflow as yet, still to get to that.



I did this morning, though, find YACGR (yet another code graph rag) to be disappointed at, since it seems there's a flood of daggy rag things out there as likely vibed coded into existance.



What I did this morning was ask CoPilot, Codex and via opencode qwen3-coder (cloud) at ollama the same question. Now understand I had read the help files for this new daggy rag thing and didn't find ollama as a provider option, so why not vibe code it in yeah? It turned out 1) the help files (as usual) probably couldov use a llm generated output, since the hooman (probably with too much familiarity) left a few winks and nudges out. That is ollama was already a service.



The prompt I used was:



```
make no changes. Just analyse. Understand how the code integrates llm providers. Assess the means to modify to introduce ollama as the llm provider.
```



## CoPilot result



(base) asterion@MonstaPC:~$ npx -y @pimzino/spec-workflow-mcp@latest --dashboard
⠙
I’ll analyze how the project integrates LLM providers and what would be required to introduce Ollama as a provider. I examined the key modules and tests to trace provider selection and usage. Below is a concise, actionable analysis, findings, and a recommended plan (no edits made).

## Quick findings (high level)

* Provider selection is configuration-driven via environment variables read in `repo_graphrag/config/settings.py`. Two variables control providers:
  + `GRAPH_CREATE_PROVIDER`
  + `GRAPH_ANALYSIS_PROVIDER`
    Valid values include: “anthropic”, “azure\_openai”, “openai”, “gemini”, “ollama” (settings and code already list “ollama” as an option).
* The provider selection logic is implemented in `repo_graphrag/llm/llm_client.py` by importing specific provider modules conditionally and exposing wrapper functions:
  + `complete_graph_create(...)` delegates to the provider-specific function assigned to `graph_create_complete`.
  + `complete_graph_plan(...)` delegates to the provider-specific function assigned to `graph_analysis_complete`.
* The repo already includes `repo_graphrag/llm/ollama_client.py` with implementations:
  + `_call_ollama_api(...)` which uses `aiohttp` to POST to Ollama’s `/api/chat` endpoint and parse JSON.
  + `ollama_complete_graph_create(...)` and `ollama_complete_graph_plan(...)` that build message lists, respect system prompt and history, use `get_rate_limiter()` context manager, and call `_call_ollama_api`.
* `repo_graphrag/config/settings.py` includes Ollama settings:
  + `OLLAMA_BASE_URL` (default “http://localhost:11434”)
  + `OLLAMA_REQUEST_TIMEOUT`
  + Validation: Ollama is allowed without API key; note says “validation happens at runtime when connecting to the API”.
* `repo_graphrag/initialization/initializer.py` wires the LLM by passing `complete_graph_create` (from `repo_graphrag/llm/llm_client.py`) into `LightRAG` as `llm_model_func`. So higher-level code calls through `complete_graph_create` and `complete_graph_plan`.
* A unit test `tests/test_ollama_client.py` already exists checking that the Ollama client imports and functions exist.
* `pyproject.toml` includes `aiohttp` in dependencies (needed to call Ollama). No additional dependency is required specifically for Ollama beyond `aiohttp`, which is present.

Conclusion: Ollama support is already implemented in code and config and is selectable through environment variables. The main remaining tasks (if you want Ollama to be a working provider in runtime) are configuration/verification and potentially small robustness improvements and tests.

## Detailed trace of integration points

1. Settings:

   * `repo_graphrag/config/settings.py` reads `GRAPH_CREATE_PROVIDER` and `GRAPH_ANALYSIS_PROVIDER`.
   * It defines model names and caps: `GRAPH_CREATE_MODEL_NAME`, `GRAPH_ANALYSIS_MODEL_NAME`, `GRAPH_CREATE_MAX_TOKEN_SIZE`, etc.
   * It defines `OLLAMA_BASE_URL` and `OLLAMA_REQUEST_TIMEOUT`.
   * It enforces that if a provider is used, required API key must exist — Ollama is exempted.
2. Provider selection:

   * `repo_grapprag/llm/llm_client.py` does conditional imports at module import time:
     + For example:
       - if `graph_create_provider == "ollama"`, it imports `ollama_complete_graph_create` from `ollama_client` and assigns it to `graph_create_complete`.
     + Similar mapping exists for analysis provider `graph_analysis_provider`.
3. Provider modules:

   * Each provider module implements two functions (names consistent across modules):
     + `_complete_graph_create(...)`
     + `_complete_graph_plan(...)`
   * They also manage any client initialization or API calling logic needed.
   * Ollama client uses `aiohttp` to call the local or remote Ollama server.
4. Runtime usage:

   * `repo_graphrag/initialization/initializer.py` passes `complete_graph_create` as `llm_model_func` to `LightRAG`. When the system performs create/plan tasks, it calls through `complete_graph_create` / `complete_graph_plan`, which dispatch to the configured provider’s functions.
5. Tests:

   * `tests/test_ollama_client.py` includes basic import/callable checks for the ollama client functions.

## What’s already present for Ollama support

* `repo_graphrag/llm/ollama_client.py`: a ready-to-use client including:
  + `_call_ollama_api` with `aiohttp` POST to `/api/chat` with payload: model, messages, stream, options.num\_predict set to max\_tokens.
  + `ollama_complete_graph_create` and `ollama_complete_graph_plan`: build messages (system prompt, history, user), rate-limited call, basic error handling, and return `response` extracted from response JSON.
* `settings.py` includes Ollama configuration and defaults.
* Conditional provider import in `llm_client.py` includes `"ollama"` branches.
* Dependency: `aiohttp` is present in `pyproject.toml`.

Given the above, Ollama is already integrated at code level. The main remaining tasks (if you want Ollama to be a working provider in runtime) are configuration/verification and potentially small robustness improvements and tests.

## Gaps, caveats and recommended changes to be safe/robust

Even though code exists, I recommend the following before deploying or relying on Ollama in production. Each item lists why and the minimal action.

1. Runtime validation / startup check for Ollama:

   * Why: Unlike providers that require API keys, Ollama relies on a reachable service. Currently settings accept Ollama but validation is deferred until a real call.
   * Action: Add a lightweight startup health check that calls `_OLLAMA_API_TAGS_PATH` or `/api/tags`/`/api/models` (if available) to confirm connectivity and model availability and raise a friendly error or log a warning on failure.
   * File: `repo_graphrag/llm/ollama_client.py` (add function `check_ollama_available()` and call it during initialization or in `llm_client.py` when provider uses “ollama”).
2. Response parsing robustness:

   * Why: `_call_ollama_api` expects response JSON shape `{"message": {"content": }}`. Ollama’s API can vary across versions; streaming responses are different.
   * Action: Make parsing resilient (check for keys, fallback to other fields, support streaming if desired).
   * File: `repo_graphrag/llm/ollama_client.py`.
3. Streaming support (optional):

   * Why: Ollama supports streaming. Current implementation sets `stream=False` and collects whole JSON.
   * Action: Add optional streaming path or document that streaming isn’t supported.
   * File: `repo_graphrag/llm/ollama_client.py`.
4. Error classification / retry:

   * Why: Current code raises on non-200 with generic Exception. For robustness, classify HTTP 429 or network errors and retry with backoff.
   * Action: Add specific handling of 429 (rate limit) and retry/backoff (maybe reusing `rate_limit_error_wait_time`).
   * File: `repo_graphrag/llm/ollama_client.py`.
5. Logging and telemetry:

   * Why: Better logs help debugging.
   * Action: Log request/response metadata (status codes, truncated responses).
6. Unit/integration tests:

   * Why: `tests/test_ollama_client.py` only tests imports. Add a mock-based test for `_call_ollama_api` using `aiohttp` test utilities or monkeypatching to validate request formation and parsing.
   * Files: `tests/test_ollama_client.py` expand with an async test or use `pytest` + `aresponses`/`aiohttp` test server.
7. Consistent message shaping with other providers:

   * Why: Different provider clients have slightly different message construction (e.g., some include system prompt, some set roles differently). Ensure LightRAG expectations match what providers return.
   * Action: Verify that returned text is directly consumable by the upstream code (it already expects a string). Add docstring or small adapter if necessary.
8. Model name semantics:

   * Why: Ollama uses model names of local models. Ensure `GRAPH_CREATE_MODEL_NAME` and `GRAPH_ANALYSIS_MODEL_NAME` env vars are set to model tags available in Ollama.
   * Action: Document expected values (e.g., “llama2” or “mymodel:latest”).

## Minimal configuration steps to enable Ollama at runtime

If you want to use Ollama now, ensure:

* Set environment variables (example .env):
  + GRAPH\_CREATE\_PROVIDER=ollama
  + GRAPH\_ANALYSIS\_PROVIDER=ollama
  + GRAPH\_CREATE\_MODEL\_NAME=
  + GRAPH\_ANALYSIS\_MODEL\_NAME=
  + OLLAMA\_BASE\_URL=http://:11434 # optional if running on localhost with default port
  + OLLAMA\_REQUEST\_TIMEOUT=300
* No API key needed.
* Start an Ollama server (the remote/hosted Ollama or local server) with the model(s) you plan to use.

## Exact places to modify if you want to harden or improve Ollama support

* repo\_graphrag/llm/ollama\_client.py
  + Add `check_ollama_available()` to probe base URL and model, or `/api/tags`.
  + Improve `_call_ollama_api`:
    - Better response parsing and fallback.
    - Distinguish status codes and retry on 429 with backoff.
    - Optionally support streaming responses if required.
* repo\_graphrag/llm/llm\_client.py (optional)
  + Optionally call `ollama_client.check_ollama_available()` when provider is selected (or at initializer time).
* repo\_graphrag/initialization/initializer.py
  + Optionally perform provider health checks at `initialize_rag()` time.
* tests/test\_ollama\_client.py
  + Add tests for request payload and response parsing using mocks/fake server.
* README / docs
  + Add a short section on using Ollama: env vars, example model names, and that no API key is required.

## Edge cases to consider

* Ollama server down / unreachable → calls raise; add retries and informative errors.
* Model name not found → server may return 4xx; surface helpful message.
* Streaming vs non-streaming mismatch → code expects full text; if Ollama returns streaming only, adapt.
* Different message role names or response shape across Ollama versions → robust parsing required.
* Rate limiting from local/hosted Ollama or network errors → classify and retry.

## Tests and verification to add

* Unit tests:
  + Mock `_call_ollama_api` responses (200 with expected JSON, 200 with alternative JSON, non-200, timeout) and confirm `ollama_complete_graph_create`/`plan` handle correctly.
* Integration test (optional):
  + Start a local test server that mimics Ollama API (or use `aresponses`/`aiohttp` test server) and make an end-to-end call.
* CI:
  + Ensure `aiohttp` is installed (it is) and tests for Ollama run in CI with mocked endpoints.

## Quality gate checklist (what I checked)

* Build / deps: `pyproject.toml` includes `aiohttp` and provider SDKs (`anthropic`, `openai`, `google-genai`). PASS (no build run done, but deps declared).
* Lint / Syntax: I read the code; it appears syntactically correct for the snippets inspected. PASS (no automated lint run).
* Tests: `tests/test_ollama_client.py` exists and checks imports and callability. PASS for presence; expand coverage recommended.

## Short summary and next steps

* Summary: Ollama is already integrated: configuration (settings), client code (`ollama_client.py`), selection wiring (`llm_client.py`), initialization path (`initializer.py`), and a basic unit test exist. To actually use Ollama, set the `GRAPH_CREATE_PROVIDER` and/or `GRAPH_ANALYSIS_PROVIDER` env vars to “ollama” and provide `GRAPH_*_MODEL_NAME` values and ensure an Ollama server is reachable at `OLLAMA_BASE_URL`.
* Next steps I can do for you (pick any or all; I won’t change code unless you ask):
  + (A) Add a startup health check for Ollama and a small retry/backoff strategy.
  + (B) Harden `_call_ollama_api` response parsing and add 429 handling.
  + © Expand `tests/test_ollama_client.py` to include mocked HTTP tests.
  + (D) Add documentation to README explaining how to configure/run Ollama with examples.
  + (E) Do nothing — the code appears ready; configure env vars and run a local Ollama instance to test.

Tell me which next step you’d like me to take (A–D above), or say “no changes — just this analysis” and I’ll finish by marking tasks complete.



## Codex Result



## LLM integration overview

* Provider selection is env-driven via `GRAPH_CREATE_PROVIDER` / `GRAPH_ANALYSIS_PROVIDER` and model/token vars in `repo_graphrag/config/settings.py`.
* `repo_graphrag/llm/llm_client.py` imports provider-specific clients at import time and exposes `complete_graph_create` / `complete_graph_plan` that delegate to the selected provider.
* `repo_graphrag/initialization/initializer.py` passes `complete_graph_create` into LightRAG (`llm_model_func`) so all create/plan calls flow through the dispatch layer.
* Rate limiting/concurrency is centralized in `repo_graphrag/utils/rate_limiter.py` and used by provider clients.

## Current Ollama support (already present)

* Provider id `ollama` is handled in `llm_client.py` for both create/analysis.
* `repo_graphrag/llm/ollama_client.py` implements `_call_ollama_api` (POST `/api/chat` via `aiohttp`) plus `ollama_complete_graph_create/plan` that build system/history/user messages, respect max\_tokens, and use the rate limiter.
* Config in `settings.py`: `OLLAMA_BASE_URL` (default `http://localhost:11434`), `OLLAMA_REQUEST_TIMEOUT`; no API key required. Validation defers to runtime.
* README documents Ollama in the provider matrix; `tests/test_ollama_client.py` smoke-tests imports/callables.

## What remains to harden (if desired)

* Add a startup health check (e.g., call `/api/tags`) when provider is `ollama`; surface friendly error if unreachable or model missing.
* Make `_call_ollama_api` parsing resilient to shape changes and classify errors (429/4xx/5xx) with retry/backoff using `rate_limit_error_wait_time`.
* Optional: streaming support toggle; logging of request/response metadata (status, truncated body).
* Testing: extend `tests/test_ollama_client.py` with mocked HTTP responses to verify payload/parse/error paths.

## Minimal runtime setup for Ollama

* Env vars: set `GRAPH_CREATE_PROVIDER=ollama`, `GRAPH_ANALYSIS_PROVIDER=ollama`, and model names (`GRAPH_CREATE_MODEL_NAME` / `GRAPH_ANALYSIS_MODEL_NAME`) to existing Ollama tags. Optionally set `OLLAMA_BASE_URL`, `OLLAMA_REQUEST_TIMEOUT`.
* Ensure Ollama service is running and models are pulled (`ollama pull` ). No API key required.



## qwen3-coder result



## Ollama Integration Analysis Findings

### Current State of Implementation

The Ollama integration is already partially implemented in the repo-graphrag-mcp project:

1. **Ollama Client Implementation**:

   * Complete `ollama_client.py` file exists with implementation
   * Uses HTTP requests to communicate with the Ollama API at `/api/chat`
   * Supports configurable base URL (defaults to `http://localhost:11434`)
   * Uses `aiohttp` for asynchronous requests
   * Implements rate limiting like other providers
   * Has separate model configurations for graph creation vs analysis
2. **Provider Integration**:

   * The `llm_client.py` already includes Ollama in the provider routing
   * Providers are selected via environment variables (`GRAPH_CREATE_PROVIDER` and `GRAPH_ANALYSIS_PROVIDER`)
   * Each provider has its own client file (e.g., `openai_client.py`, `anthropic_client.py`, `ollama_client.py`)
   * Each client implements two functions: `*_complete_graph_create` and `*_complete_graph_plan`
3. **Configuration**:

   * The `settings.py` already has Ollama configuration options
   * The `.env.example` already includes Ollama configuration options
   * Supports configurable base URL, request timeout, and model names
4. **Testing**:

   * Unit tests exist for the Ollama client in `test_ollama_client.py`

### How LLM Providers are Integrated

1. **Provider Selection**: Via environment variables (`GRAPH_CREATE_PROVIDER` and `GRAPH_ANALYSIS_PROVIDER`)
2. **Dynamic Import**: The `llm_client.py` dynamically imports the appropriate client based on provider setting
3. **Consistent Interface**: Each provider implements the same interface with `*_complete_graph_create` and `*_complete_graph_plan` functions
4. **Configuration Validation**: Settings module validates required configuration for each provider

### Remaining Tasks

Based on the tasks.md file, the remaining items are:

1. Update README.md documentation for Ollama setup
2. Test with various Ollama models

The core implementation appears to be complete, with only documentation and testing remaining.



## Observations



Speed wise, the order was (fastest at top):



* qwen3-coder (by far)
* CoPilot
* Codex



Comprehensiveness (most comprehensive at top):



* CoPilot
* Codex
* qwen3-coder



Discovery (most useful at top)



* CoPilot & Codex (both found means to "harden" the ollama provided code)
* qwen3-coder (literally just answered the question - no need to change codebase as ollama integration was just obfuscated by poor documentation)



# Conclusion



The propensity of Codex and CoPilot to go above and beyond but need not have, is apparent. Cool to note both found same problem with "hardening" so probably is not a random hallucenation. But you sortof get the impression qwen3-coder got the gist was the quest was raised in error - nothing to do here, cept really update the help file.



Still, the thing missing was I actually wanted a containerise version. So I've set all three llm against one another on that task. That'll be the more interesting test.



Prompt for that was:



```
if I wanted to set this up in a docker container, and therefore had to use a http style mcp interface (instead of stdio) how would I do that. Analyse the code to suggest a detailed set of tasks to convert this mcp app into a dockerised mcp app. If there is a means to dockerise this app and still use the stdio then give that a priority. do not change any code. Just save the analysis in a [copilot_dockerise|codex_dockerise|qwen3-coder_dockerise].md.

```



Lemme know if you want the results. I think I'll actually copy the repo 3 times and let all three llm have a go at building that dockerised version.
