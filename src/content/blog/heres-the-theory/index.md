---
title: "Here's the theory ..."
pubDate: 2017-04-29 03:12:33
categories:
  - arduino
  - beaglebone-black
  - c-h-i-p
  - general-niff-naff-and-trivia
---
... straight forward really.
[MOOS-IVP](http://oceanai.mit.edu/moos-ivp/pmwiki/pmwiki.php) happily compiles and runs on on of my [Beaglebone Black](https://beagleboard.org/black)s.
![beagleboneblack-topweb](./beagleboneblack-topweb.png)
Sooooo, no stretch (pardon the pun) for MOOS-IVP to fit onto a [C.H.I.P.](https://getchip.com/pages/chip)!
 
Both are 1GHz processors with 512M of memory.
The standard approach, in any event, is run MOOS-IVP on the linux board and have an arduino interfacing with the hardware.
Of course, I am running against the AIO:
[![](./31138.jpg)](./31138.jpg)
You could just as easily run against a raft of other boards, such as:
![](./1-340x3402.jpg)
[![](./42250.jpg)](./42250.jpg)
Or even a Parallax Propeller board!
![](./phubar3shrinkwrap.jpg)
That would all depend on what you are offloading to the hardware layer.
