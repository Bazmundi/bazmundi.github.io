---
title: "JeeezzzzARRRGGGG!"
pubDate: 2017-06-04 07:46:55
categories:
  - linux
  - orange-pi
  - the-downside-of-opensource
---
\*cough\*
Excuse the outburst BUT ...
So, I got some screws.  Decided to put the OPiZ and its expansion board together in the nifty little box it came with.
Went to the rebuild the OZiP from scratch again, since doodling with emqttd and RabbitMQ might have broken things.
Seems, however, booting new re burnt SD image from Orange Pi resource page won't start with the expansion board in.   A fresh SD image of Armbian (from armbian.org) boots but something breaks in the boot up.  The device still falls into the console but with error reports.  The odd thing is I add the new user as part of the inaugural startup.  I logout, and back in again it asks me again to add the new user so I CTRL-C out as it is an option.  This hangs the box and I need to pull power and restart.
Too much kooky stuff going on that wasn't going on while the expansion board was sitting to the side uninstalled.
So, I have had to pull the box apart again to start fresh again without the expansion board.
So, still no boot up on distro from OPi resources.  Boots fine on distro from armbian???
However, now when I try to setup static IP with nmtui the HMI comes up but no response to keypresses??!!!
I pulled the power and it rebooted.   I tried nano and it was fine, that is, the editor responded to key presses.  So, despite having used nmtui previously (before inserting then removing the extender board) the same distro now has this weird behaviour.
Weirder.  I log in as root.  When I start nmtui without sudo (why use sudo if you're in root right) I get no connections in list.   If I start nmtui with sudo it shows the wired connection (default for the distro so eth0).  Frack though, even using "sudo nmtui" the thing hangs when I go into connections menu.
Now, weirder still is that nmtui lets me get into the change host and update the hostname - that is, nmtui reacts to keyboard during hostname setting.
 
 
