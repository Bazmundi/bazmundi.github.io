---
title: "Niggly"
pubDate: 2017-08-16 09:20:51
---
I may have some more design work for the opensprinklette node-red implementation.
The nuance is that the google calendar node will happily trigger on event edges but the triggered response seems to be a dump of the calendar event parameters but not the edge that triggered the node.
It might be as simple as another parameter on the configurator to tell it whether it is for sprinklers on or off
The other might be using the before event.
Have two outputs then to act as start and stop.  Feed the stop into a timed node.
Either lapsed or absolute is another question.
Much of this is trying to think in a dataflow rather than an imperative idiom.
I want to think also about ACK from the WeMOS sectors. That might want a watchdog timer.
The lwt from the WeMOS sector will need a response. Although any sector/zone on, while WeMOS is down, falls on deaf ears.  Stil, it needs to be logged and reported.
