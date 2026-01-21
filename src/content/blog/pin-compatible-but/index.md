---
title: "Pin compatible but ..."
pubDate: 2012-07-14 06:23:06
categories:
  - the-downside-of-software-development
---
Well, went to try out the Synapse XBEE replacements (SNAP).  Unfortunately I had assumed that I could plug the base node into my PC via the DFRobot XBee USB V2 I had in my drawer.  It was the first time I had dusted it off so first sign of a problem was that the driver installation failed with an Error 10 (driver didn't start).  When the USB dongle is connected to the computer, Windoze assigns it a COM port but obviously assigns the wrong drivers.  I have posted on the DFRobot user group to see if someone else had solve the problem.
In any event, decided (begrudgingly) to order a Synapse USB dongle board for the base node - just to be on safe side.
 
POST SCRIPT
The USB dongle is not an XBEE format.  The Synapse site says it fits "all" their modules - it should have said "all but the XBEE format" modules.  I ended up having to order a RF200PD1 module which is the Synapse propriety format.  The RF200PD1 will talk to the RF266Pc1 XBEE foot-print format modules so this isn't an issue.  The confusion on the site on what mates with what is.
 
POST SCRIPT
Synapse have updated their site to clarify that there is a difference in form factor between the two models so you aren't misled by the use of "all".
