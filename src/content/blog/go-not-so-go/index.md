---
title: "Go not so Go"
pubDate: 2014-09-14 11:05:19
---
Well, I tried the flashing led example at Gobot for bbb.
It seems they left out a little bit of information, you actually have to add an LED (it doesn't use one of the four USER LED provided on the board).
By the time I poured over the driver source I worked out that it does in fact leave out the USER LED.  There is no mapping function of the pin numbers to the ball grid on the bbb SOC chip described in the source so I am waiting on feedback as I think the driver needs a little mod to allow the four USER LED to be accessed.
Otherwise, code cross-compiled on my windoze 7 box and seemed to happily run on bbb (it printed debug info to the terraterm console).
So, looking forward to playing a little more in that space in between doing my Master's Dissertation.
POSTSCRIPT
The chaps at Gobot have heard my suggestion and produced a [dev stream to talk to the USER LED](https://github.com/hybridgroup/gobot/tree/dev "Well done guys!").  Thanks guys!
