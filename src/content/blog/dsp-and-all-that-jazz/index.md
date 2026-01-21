---
title: "DSP and all that jazz"
pubDate: 2014-05-18 14:13:07
---
[Further to ...](http://organicmonkeymotion.wordpress.com/2014/05/10/call-me-sentimental/ "Call me sentimental")
It turns out Analog Devices buried their 21xx DSP mcu into motor controller version in a SOIC-28 package.
I trawled the internet and found an archive of the software tools to program and load  software onto these toys.
The chip ([admc32x and admcf32x](http://pdf.datasheetcatalog.com/datasheet/analogdevices/ADMC328TR.pdf "21xx buried inside")) are still available for a couple of dollars a pop, though they are no longer produced.
Moreover, there are more modern turnkey chips out there (see [Allegro Microsystems A4960](http://www.allegromicro.com/en/Products/Motor-Driver-And-Interface-ICs/Brushless-DC-Motor-Drivers/A4960.aspx "Only the good die young, and every chip ever evented") itself obsolete ;) so why bother.
Pure arse sentimental value.
I coded on these 21xx and 21xxx chips yonks ago.
Fairchild has a [motor control chip](http://www.fairchildsemi.com/ds/FS/FSB52006S.pdf) that can drive the [Isense](http://www.analog.com/static/imported-files/tech_docs/IsenseF328.pdf) line.  Just needs work on algorithms ;)
Turns out there are about 20 application notes you can grab off the web for these chips that talks about the nuances of motor control.
 
