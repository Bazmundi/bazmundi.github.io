---
title: "Step 2: the filter"
pubDate: 2024-11-27 02:42:18
categories:
  - animatronics-for-the-fun-of-it
tags:
  - animatronics
---
[![](./sd5a98fd4838a47469e6cb37a75e10458h.jpg)](./sd5a98fd4838a47469e6cb37a75e10458h.jpg)

Figure 1: The "filter"




The "filter", in Figure 1, comes with the varifocal lens. The descructions are below. I am not sure it'll be needed for an animatronics application, but I think it'll be a challenge to get it working, what with a 100mm 4V pulse to open and then, apparently, the voltage inverted to close.



Might as well have a hack.


[![](./the-filter-thingy.png)](./the-filter-thingy.png)



Turns out the trick might be to use one of the ESP8226 boards and motor shield I grabbed, Figure 2, and simply wire up the 4V across the two motor inputs (back to front on one of them) and simply wire up the two outputs together. The pulses (inverted or otherwise) then driven by the presence of an enable for one or the other half of the L293D.


[![](./l233d-board.jpg)](./l233d-board.jpg)

Figure 2: The "motor" board with the L293D conveniently sitting on it.
