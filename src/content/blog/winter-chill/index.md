---
title: "Winter chill."
pubDate: 2017-07-30 23:24:40
categories:
  - linux
  - odroid-c1
  - orange-pi
---
So far so good.
OPiZ has run for 12 odd hours with temp reporting, node-red and emqttd up status running on OPiZ, emqttd up status running on PC and PC pinging OPiZ.
I note that, because this is winter, and we snuggle under a couple of doonas during the night, heating in the house is off.
That meant the temp of the OPiZ dropped to 59degreeC from the 62degreeC it peaked at yesterday.
I note also that the memory watch I ran on the OPiZ via TeraTerm was fine.  The free memory was oscillating around the same value that it was around 12 hours ago.
So, who knows, is it a temperature related thing that causes the ethernet to drop its connection?
Odd that there are complaints on the net about heat problems with the OPiZ, the OPi series in fact, but they don't bother to 1) provide heatsink with the devices 2) tune the device to run slower out of box since that will drive the operating temperature down and because there is no heatsink provided.
Mind you, I have also found [6x6mm Peltier coolers](http://au.rs-online.com/web/p/peltier-modules/4901193/) so who know how silly this could get.
Or, I guess, play with a jar of mineral (baby) oil.
The server needs to provide Mission Critical level functions for running the house.  So it stands to reason that either I get this sorted or drop the OPiZ and go back to ODROID-C1.
