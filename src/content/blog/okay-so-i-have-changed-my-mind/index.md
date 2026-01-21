---
title: "Okay, so I have changed my mind ..."
pubDate: 2017-06-17 02:03:03
---
... it was fun for a while but ...
So, dabbling in Lua on the ESP8266 was interesting.
The event driven stuff is clever.
However, the whole thing stinks because you cannot use the REPL cycle to take advantage of the scripting environment and the superior debugging opportunity that affords.
Especially around the niggly aspects of event processing and state problems inherent therein.
So, now the Arduino has the ESP8266, but especially since it now has a mqtt library, and mostly because we are only reading GPIO ports or setting bits on/off, I relent.
If you want to knock up a simple IoT gadget quickly, then Arduino plus ESP8266 are gold.
