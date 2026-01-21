---
title: "Goddammmit!"
pubDate: 2017-05-31 12:11:28
---
So, go figure.  One is told One should either ssh into the OPiZ via ethernet OR the other option is the three pin serial connection on the board.  Examples included wiring instructions and the use of a 3.3v USB to serial board (like the Sparkfun one I have in my comms box).
So when you startup Teraterm, for example, you can select a COM po ... hang on, there is two COM ports sho ... DOH!
I had to laugh, I was wondering why, if you have your OPiZ powered by the USB you couldn't talk down that line - given all the instructions to either ssh in via ethernet or knock up jumpers to use a USB2Serial board.
Seems none of that is necessary.
Just power up the board with your USB hub and you have a COM port as well.
I am still not happy with the dropout on the ethernet line but I can sort that once the pounce administrating from the OPI forum gets off his arse and validates my membership.
Otherwise, you don't need telneting over ethernet or jumper leads to the three pins that should have been, IMHO, 0.100" (2.54 mm) Female Header: 1x3-Pin, Straight.
In any event, it means I can sort the erlang build that kept clapping out as the terminal connection over the LAN kept dropping out.
