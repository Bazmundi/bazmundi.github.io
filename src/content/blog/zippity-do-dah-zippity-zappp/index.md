---
title: "Zippity do dah, zippity ZAPPP!"
pubDate: 2016-12-25 21:53:58
categories:
  - hardware
  - sensing
  - the-after-market
---
Looking at OpenSprinkler circuit, the use of SCR to control the solenoids appears to require the addition of TVS diodes a plenty.
That would be a design decision.
As OpenSprinklette is using relays to drive the 24VAC solenoids we need not apply protection there.
Nuisance factor though is that trying to source non-SMD bidirectional channeled TVS, for the rain gauge input, not so much fun.
For the prototype at least, without any SMD pads on the prototype shield, we are happier with DO-15 or similar package types for the protoboard's pad spacings.
Luckily though AliExpress came to the rescue.   I have ordered a packet 100 x 36V 1500W bidirectional TVS for US$11.   Now the original design calls for 48V but the markings on the devices suggested unidirectional and the text supporting them did not mention bidirectional.  So, just in case I have ordered 10 x 39V 1500W for US2.80.  That's the problem with AliExpress and working with penny market vendors therein.  You take what you can get.
So rain gauge and TVS on the way.  I finally decided the shield I am designing will have an input for a rain gauge for those you want a minimal four sector.  The idea of a rain gauge with an ESP8266 has not gone away though.  Where we are using the mqtt and node-red we can build up as we please - over time.
 
