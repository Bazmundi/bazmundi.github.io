---
title: "More of the same ..."
pubDate: 2012-07-29 04:14:41
categories:
  - the-downside-of-software-development
---
The saga of getting over the newbie hump with the Synapse SNAP goes on.
 
The issue with the RF255PC1, not being detected by Portal software, while it sat in the DFRobot USB dongle is now likely because the RF266PC1 is precanned with AT modem mode and not MESH per se.  Apparently if you run "Erase SNAPpy Image" on the RF266PC1 it will fall back into MESH mode and might have been used as the PC node.  Well that was one thought someone offered, someone else suggested it was that there were a list of XBEE USB dongle that would work with Portal and the DFRobot XBEE USB dongle wasn't one of them.  That mystery can stay as a mystery.
The problem I had next was using the RF200PD1, sitting on the SN132 SNAPstick USB module, as the PC node.  I downloaded code to talk P2P with an RF266PC1 sitting on an Arduino but fell foul of the fact that Portal does not recognize the USB port, it has to be a COM port, for use when erasing the SNAPpy Image.
Turns out you should download VCP (virtual comm port) drivers from Silicon Labs for the USB chip on the SN132 before you start using Portal.  Not really written down in one place (hidden in user groups or on loose internet pages).
Next problem, the erase hangs, waiting for you to restart the module.  Go figure, the SN132 SNAPstick USB module has no RESET button.  Luckily the RESET (pin 23) is sitting next to the GND (pin 24).  I took the chance and shorted it.  Most likely if it didn't work, and I fried the module, it would be cheaper to by another module as most of the supporting board options were expensive.
In any event, I am but up in MESH mode but will look at soldering a small reset button onto the SN132 so I can recover the PC node if I ever load another script that breaks it out of MESH mode.
