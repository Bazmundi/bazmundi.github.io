---
title: "Why?"
pubDate: 2014-10-19 08:02:03
categories:
  - agile-smagile
  - the-downside-of-opensource
---
Caught a glimpse of a module for Fitnesse that mimics Cucumber - the so-called BDD environment for Ruby.
Why?
Is Cucumber really BDD?
Is Fitnesse not BDD?
Is BDD Agile?  Lets start there. No it isn't.
If you go back and look at the software engineering standards that have been around for a while, the one's Agile droogs don't ever read, then you will know the idea of driving your program with V&V is a best practice.
The problem is Agile droogs never read the work that came out of the "software crisis" that was produced to 1) account for why software was so poorly produced and to 2) not go there again.  So, we all go there again and again.
TDD and BDD on same page!  DOH!
TDD is an abject failure.  The idea was to write tests once and then code until the tests passed - and then stop.  Great but you need a design for that - to know what tests to write.  So the thing fell apart because it never worked as advertised - don't do design, don't know what to test and why, write tests many times, falling back writing code, without requirements or design, then writing tests to match code ... wretched.
It was actually interesting to watch the evolution of BDD.  It sort of came out of the TDD as a mutant six toed, three eyed, swamp thing.  BDD also came out because TDD was a failure. Why? Agile.  Meets project manager WISCY itch - Why Isn't Someone Coding Yet.  So yes, write behavioral tests, don't write unit tests, costs less right - except for the distance between the behavioral specification and the units ... not to mention that pesky obfuscation of the behavioral aspects because you are working is the structural idiom of object orientedwatzit.
So we start coding earlier because we are convinced we can test at the unit level and somehow get a design that meets requirements we haven't written with a design we haven't documented.
Primary reason was TDD also tended to focus on unit testing. So, writing tests, without design, for units of what? So now we want to write tests first for behaviors because we don't want to call them requirements because of the bad press requirements get because we don't learn from our mistakes.
No design meant there was never really any chance of writing tests once - since you never really knew why you were writing the tests.  Except, of course, that your units (aka classes) where beautiful.  Why were they beautiful?  Why they passed the tests that weren't supported by a design.
Some goof actually wanted to argue once, long lost on interweb, that TDD was the design!  Except is wasn't written once and run many times. It was written over and over again because there was no design.
So the swamp child thing of BDD.  Fancy no design caused TDD to flop.  So now we are starting to jump somehow from behavior to code without design in between?  And how does one reach into the obfuscated object orientedwhatzit from the behavioral space without design and functional allocation?  You remember functional allocation?
And then when you look, Cucumber looks to talk at the obfuscated object orientedwhatzit unit level in any event.  They are getting there TDD and BDD confuse me thinks.
