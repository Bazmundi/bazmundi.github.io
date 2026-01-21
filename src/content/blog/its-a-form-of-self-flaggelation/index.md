---
title: "It's a form of self flaggelation ..."
pubDate: 2018-09-06 04:49:07
categories:
  - mqtt
  - node-red
  - orange-pi
  - the-downside-of-opensource
  - thingbox
  - ubuntu-core-16
---
... this snap stuff.
What I have worked out so far with orangepi zero, Ubuntu Core 16 and Snap.
Ubuntu Core, because they force updates, is failing to come back after scheduled reboot. Or so it seems.
The serial port responds but the device is not on lan.
All attempts to attach at the IP address reported in the message displayed on the serial port fail.
Hard reset (power off, power on) brings board back up with new IP address but then the cycle repeats. Schedule reboot does not come back up.
Weird but if I use a sudo reboot the device comes back up with IP intact.
So, something about the core auto reboot.
I tried a debian server but snapd would not install. Rasbian apparently is a no go, so maybe they meant arm generally?
Otherwise, moquitto snaps and runs fine. The node-red snap installs but no service starts. No config comes with snap and snap start node-red returns no service available message. The node-red snap will otherwise run in foreground.
