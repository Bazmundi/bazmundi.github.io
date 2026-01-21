---
title: "Toying with ..."
pubDate: 2013-09-04 12:28:04
categories:
  - agent
  - android
  - python-rules
---
The tail end code fragment in the (POSH) launch.py file gave me an idea ... well it came to me in the car on the way to work, you all know how those problems simmer in the darkest deepest reaches before peculating up.
`loops_running = 1
while loops_running > 0:`

time.sleep(0.1)
loops\_running = 0
for agent in agents:

if agent.loopStatus()[0]:
loops\_running += 1

This is the main (simple) loop that runs until all agent plans are spent.
What occurred to me was that I was looking at how to eventually meld the POSH plan engine into SPADE (some old how).  Currently the POSH agents appear to want to work in the same scope so either a SPADE behaviour (Cyclic and Periodic)  for performing repetitive tasks might be the shot.  Could also be a One Shot in place of the while loop and the SPADE agent sends message to itself to recall the One Shot behaviour if agent.loopStatus()[0]==TRUE.
The thing is, of course, there is some likely confusion in using SPADE AGENTS+BEHAVIOUR as well as POSH AGENTS+BEHAVIOUR.  I am not thinking, for example, there needs be a one-to-one mapping - though it might a side effect of only creating one POSH agent per SPADE agent.  Still, the POSH agent approach seems a neat way to build vehicular components (thus running on on machine) and the SPADE agents can be the communal aspect of a multi agent team.
In any event  the simplest thing might end up multiple inheritance and ...
