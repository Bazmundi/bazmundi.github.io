---
title: "Erlang on Raspberry Pirate ODROID-W"
pubDate: 2014-10-02 14:58:33
categories:
  - odroid-w
  - raspberry-pirate
---
There is a port of [Erlang for Raspbian](https://www.erlang-solutions.com/downloads/download-erlang-otp#tabs-raspbian "Heavon, I am in heavon") that should run on the ODRIOD-W and some guy has ported [Erlang onto AR-Drone 2](https://github.com/tonyrog/edrone "Doubly in heavon") to run as its flight management system.  So installing a port of that to Erlang running on ODROID-W seems a worthwhile endeavour.  I have a spare 10DOF with a mpu9150 and a air pressure sensor ready.  The problem will be the Broadcom chip only has two PWM channels so I will have to sort that with either a AVR chip or ...
**POSTSCRIPT**
The irony, or is it incongruity, of Erlang on Raspberry Pi is the inclusion of the hardcore csp programming on the nooby platform. Observation though is that the Maker community targeting schools is maybe not going to fuel the imagination as intended.  My nephew is a good example.  Wanted an Arduino for school so I got him one.  By the time it turned up he need a Raspberry Pi.  I got his Raspberry Pi working from his Mac, his Arduino from his Mac, his Arduino from his Raspberry Pi from his Mac.
He ran through a few Arduino experiments but preferred downloading and running a game ([Minecraft](https://minecraft.net/ "Soft LEGO?")) on his Pi, until the inconvenience of working on the Pi turned him off it.  He has now jumped from a short stint in Java, through ObjectiveC to Swift (probably for a week).  Never once staying long enough on anything to bed things down and get any good at it.  This is the downside of the so-called Maker world.  It is consumerism and mostly about feeding the short attention spans we've developed.
Curiously, he has asked me to help him with a school project now in Python.  Setting up a web-based application for some school process.  Just like that, a multi-tier MVC application.  Should be doable using the right frameworks - python has a few - but I am working off 30+ years engineering experience and will be interested in exactly how this will happen when the lad flips over things so superficially.
Regardless, it takes up back to his Pi, for a while - but for how long?  How many other people are seeing this?  Lots of short spanned, stalled interest?  Marketing gurus dream I think.
