---
title: "A bit of fiddling and voila!"
pubDate: 2021-11-08 05:47:45
categories:
  - 3d-printing
  - design-musings
  - pnp
  - pnp-trays
---
[![](./nopins.png)](./nopins.png)

No Pins (just a package)



[![](./dip.png)](./dip.png)

Dual Inline Packages




[![](./quad.png)](./quad.png)

QUAD (pins all the way around)



The way I do this is set the length to 80mm (of the 2080 variety), divide by pocket Y dimension and use the ceiling to get the actual row count (so the width may be slightly wider than 80mm but by a proportion of a single pocket). I then centre the bisector of the screw holes so they are always centred on whatever the length becomes and they are also always 60mm apart to mount in the outer slots of the 2080 extrusion on the bed of the manual PnP.



Scheisser!



I need also define a bucket! Give me a moment ... okay. So, I made buckets Shallow or Deep and I also added an option to add a mount at the other end.


[![](./bucket-1.png)](./bucket-1.png)

BUCKET




What? The atmega328p has a 6.9mm package? Say what? You want WHAT? Embossed labelling?! You are one HARD audience!



[![](./atmega3282-1.png)](./atmega3282-1.png)

Mitt embossed label



[![](./bucket2.png)](./bucket2.png)

And before you ask



Blah, blah, blah, blah, blah, ... so I also then added a test piece build.



[![](./test-piece.png)](./test-piece.png)

Test piece generation to do quick print checks of bucket sizes



[![](./atmega3283.png.jpg)](./atmega3283.png.jpg)

Happy little vegemite, snug as a bug!
