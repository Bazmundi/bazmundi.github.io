---
title: "Dam Open Source!"
pubDate: 2015-12-01 18:33:53
categories:
  - esp8266
  - lua
  - the-downside-of-opensource
---
Go figure, trying to get [luagravity](https://github.com/fsantanna/luagravity) working on the ESP8266.  This is to have a little reactive programming going on!
Not to happen so far.
First luagravity won't compile on ESP8266 as the full distro does not have enough memory.  Although the file is not that large.
I went to nodemcu forum to get help.
Told to "nick off" (nicely) as nodemcu is no longer in active development.
Got directed to an auto build tool.
Auto built a minimum size distro to see if that would allow me to squeeze luagravity on.
Got a binary and so simply had to flash it.
Flashed it.
ESPlorer IDE would not connect to chip on any baudrate.
Hmmm.
Tried reflashing the original distro.
Same deal!
No longer can connect on any baud rate.
In fact a strange defect appears to occur in the hardware.
I found that I either get the power led on when I power up the board OR I don't.  When I don't I found my bluetooth mouse was not behaving.  Turned out the ESP8266 is jamming my bluetooth (at least) when the power led doesn't come on (but not because the power led doesn't come on of course, there is something deeper happening).
Might have to pull another chip from the drawer to see what is what.
So much for reactive programming on the ESP8266.
