---
title: "Part V of Lab 2"
pubDate: 2016-06-13 03:49:16
---
So a few things need sorting before I could program my Cyclone II board again.  The problem it appears was actually that the USB ports on the back of my PC had died.
So, what about the Quartus v OS story.
Same, same.
Quartus does not yet support Windoze 10.
So, what I had discovered still holds, that you cannot install the drivers as Windoze 10 disallows it.  Might be a way around it on a new install (I think you can turn driver signatures off in the BIOS).  In fact, on the Altera site, people are saying they are staying with Windoze 7 until their machines die.  The chap who designs the boards that I am using also is running a Windoze 7 box.  Seems unrealistic on Altera's part to cause such a problem by not keeping up, at least with drivers.  A lot of this is likely "grey" market anyway.  Many manufacturers treat customers who have "grey" goods unfairly or even unethically - especially when you consider that the original manufacturer would have made their profits on the goods when they were moved into the "grey" market.
However, the quirk was as I had already installed the USB Blaster on the PC under Windoze 7 it has gotten around the block Windoze 10 places on unsigned drivers.  So, after a bit of swearing at myself for not catching the dead USB ports in the first place, all seems well.  I simply moved the blaster to the front USB ports on my PC.
I will still need look at setting up a Linux based version for my FPGA design as my PC is old and could go kaput at any time.
Even so, certainly was an interesting couple of days as I had to re-learn a few things.
So, without further adieu then, [DL-L2](https://organicmonkeymotion.wordpress.com/wp-content/uploads/2016/06/dl-l2.pdf).
So, for the Part VI of LAB 2 we need to read into "[Double Dabble](https://en.wikipedia.org/wiki/Double_dabble)".  The Part VI story doesn't give the hint as to how but its a safe bet Double-Dabble will do.  Again we are missing buttons on our board.  We'll take a 8 bit example and recode for 6 bit.
Perhaps, something like [this first cut from wikipedia VHDL example](https://organicmonkeymotion.wordpress.com/wp-content/uploads/2016/06/vi1.pdf).
