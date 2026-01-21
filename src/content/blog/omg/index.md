---
title: "OMG!"
pubDate: 2015-08-23 13:56:01
categories:
  - processing
  - prototyping
---
I have IntelliJ IDEA on my desktop, I sort of flick between it, Eclipse JDT etc.  I had actually pulled it up to use it for my Elixir and Erlang programming.
Turns out BoofCV has a Gradle build and is IDEA friendly so I thought I would poke around and make a few changes.
One thing I wanted to do was to look at integrating sarxos webcam-capture in with BoofCV and I was poking around trying to workout how to do that.  Well, turns out there is a folder in the BoofCV project in IDEA that actually already does this so I was able to run a couple of feature and object tracking examples off my Bloggie.
I did note they were using 0.3.10 versions of webcam-capture so the "get camera by name" method was missing, so I had a look at how to add it in the IntelliJ IDEA.  I will have to get a Gradle book but it looks like an xml file pulls jar base libraries into a cache.  I did the change the dirty sneaky way and I copied 0.3.11 over 0.3.10 in the cache to see if that would let be play.  It did and I modified a BoofCV class to allow for named webcams.
I will still need to read up on Gradle to work out WTFO on the URL and the URI that seems embedded in it.  Might not be straight forward as 0.3.11 does not appear in the main or tagged branches yet (you can download a jar with that version from the sarxos site however).
So, will now look at prototyping the omnivision collision detection and fuzzy steering on my PC before porting to the Processing for Android.
I am feeling it is all doable.
