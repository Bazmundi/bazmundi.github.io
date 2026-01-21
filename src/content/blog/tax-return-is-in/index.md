---
title: "Tax return is in"
pubDate: 2017-04-30 13:05:45
---
Well late really, last two years after tax department started writing letters.
Serve them right as I got a quite hefty lump sum out of it.
So, after agonising over what to do about GPU based system, I decided I am only dabbling so I opted to simply get an ODROID-XU4 so that I can at least run OpenCL under Python.
Mind you, after toying with Chapel on my quad-core Odriod C1, I will be interested in the Octa-Core Xu4.  I did splurge and get an 32GB eMMC 5.0 with Linux.
I went this way as even now the Jetson TK1 is available (as its now obsolete) in Australia, I am rather more interested now in Chapel.   [Not to mention that Chapel appears to be a better approach than Cuda](https://ai2-s2-pdfs.s3.amazonaws.com/28e3/2f4ec3395476a6885149c1d73ff3d0edbb46.pdf).  That is the appeal, you can take your Chapel code and just change the underlying engine.
So, my cluster will be one ODROID-XU4 and four ODROID-C1.  So, 24 cores all up (not taking the general purpose GPU on the XU4 into account).
Oh, and the 18 cores the Parallella adds.  You do know there is an [Erlang for the Parralella don't you](https://www.parallella.org/2015/03/20/erlang-otp-and-the-parallella-board/)?
I am in parallel programming heaven.
The thing that makes it all possible is the 9 port POE switch and a gaggle of active POE splitters (48V down to 5V) - you don't need n-power packs on your wall.
Don't forget TTY+ (MPutty) or some other multiple session tool.
Built into the guts of an old game PC case my mate gave me, so the wife will never know.
If I need more grunt a NVDIA card maybe later, in an 8-core PC, maybe.
However, PhD submission draft this weekend so dabbling is all that I will have time for.
