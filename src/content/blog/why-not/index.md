---
title: "Why not?"
pubDate: 2014-09-26 13:47:18
---
[caption id="attachment\_1533" align="aligncenter" width="128"][![Virtual radar](./logo.png)](./logo.png) Virtual radar[/caption]
I am week 1 of my final slog in my Engineering Masters and will need a distraction as a study break over the next 24 weeks of my Dissertation.
So, how about an ADS-B receiver setup?
I sort of have already started:

* [ODROID-W](http://hardkernel.com/main/products/prdt_info.php?g_code=G140610189490 "Check") masquerading as a Raspberry Pi - check.
* [DVT-B Dongle](http://www.aliexpress.com/item/Hongkong-Post-Free-DVB-T-USB-Dongle-Beeing-Lee-PAL-Connector-RTL2832U-R820T-Tuner-Support-SDR/876549594.html "Check") to receive ADS-B Aircraft Navigation signals over FM 1090MHz - [check](http://linuxtv.org/wiki/index.php/DVB-T_USB_Devices "Phew! in fact")
* Software (being [VirtualRadar](http://www.virtualradarserver.co.uk/ "Check")) - check
* [Mono for Rasbian](http://hardkernel.com/main/products/prdt_info.php?g_code=G140610189490 "Check") - check
* Throw it together - TBD

I am interested as a side project to some of my UAV experiments.  It seams to me I can inject ADS-B flight paths into my UAV ATC experiments.  I would eventually want a headerless version that only pumps aircraft locations into my mission display so alerts can be raised if there are any impending volume intersections.  Problem might likely be CPU clock speed et al but why not try for the fun of it.
That is, as well as continuing my series of FPGA experiments (apart from continuing porting the Altera training onto our [Master 21 board](http://www.aliexpress.com/item/Free-shipping-ALTERA-FPGA-EP2C5T144C8N-fpga-board-fpga-development-board-fpga-altera-board/1758618627.html "Look it is CHEAPER!!"), maybe getting a blinking light on the [FORTH in FPGA experiment](http://organicmonkeymotion.wordpress.com/2014/09/17/heres-the-thing/ "Here’s the thing")).
