---
title: "Not idea-L"
pubDate: 2019-07-21 07:56:26
---
So.



I have been doing some kotlin courses, to get over the hump.



I have been running Jetbrain's IDEA on my PC and that has been smooth.



I thought I would set it up on my Debian 10 laptop, as I need feign being social with the wife as I can tinker while we sit in the vicinity of one another.



Tribulations then.



* IDEA installed.
* No SDK reported when creating a kotlin project!
* Option to add SDK via JB SDK bin addin.
* JB SDK bin adding installed fine.
* When running JB SDK bin addin, it kept failing with not enough memory.
* Bumped up memory.
* Kept failing.
* Went searching for JDK via SDK widget.
* Found opensdk V8.
* Restart saw IDEA fail to start with error that class path could not be found.
* Found info on NET that config and system directories need to be deleted to recover and got back up and running.
* There was a link provided to Oracle's JDK under the pesky SDK setup box.
* Downloaded and installed Oracle JDK (V12).
* Oracle JDK V12 came up in SDK box next restart - so did error that class path was kaput.
* Ran SDK installer again. No errors this time. Without having fidgeted with memory. Great mystery - wooooooooooooooooo (using ghostly warbling voice).
* Pulled down V11. SDK widget prompts me to choose between V12 and V11. Chose V11.
* Now setup!



However, no clear cut reason SDK installer did not work first pass.



No real point pointing to Oracle JDK if, when installed, it breaks. Certainly reported same message that openjdk did raise.



No real clarity why, if openjdk V8 was already installed, it didn't turn up in SDK selection. It would have sat outside the JB SDK install mechanism in the same way the Oracle JDK V12 did.



No curiosity in me to "solve" any left over mysteries. Don't feel I have learnt any lessons then.



Kotlin compiles - through very slowly on this clunky old laptop.
