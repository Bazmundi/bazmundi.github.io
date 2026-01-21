---
title: "Cyclone II-Exp.1 - followup"
pubDate: 2014-03-29 09:08:54
categories:
  - cyclone-ii-experiments
---
Coming back to the board I half expected when it started that it would simply light up the LED from the previous experiment.
However, it jumped back up into counting up seconds on the 7-Segment displays.
*!a light bulb moment!*
In fact, I now recall from the training is that the FPGA can be booted from from EEPROM and, voila! looking a the schematic there is an [AT24C04](http://www.atmel.com/Images/doc0180.pdf "atmel eeprom thingy") on the board.
But wait, there is more!  Serial configuration via [EPCS4](http://www.altera.com/literature/hb/cyc/cyc_c51014.pdf "Special Altera serial configuration chip").  So, a little more to the board than the manual alludes.  So, the FPGA will always boot up to counting up seconds as the CMOS SRAM elements of the FPGA will be needing instruction.  Subsequent programming via JTAG by the USB Blaster will obviously clear that sucker out with the new code.
The purpose of the EEPROM needs some investigation but I suspect it might be programmable and itself to provide a cold boot other than the counting up in seconds.
In any event, fiddling with the pin layout to light different LED is straight forward - but requires re-compile each time.
 
