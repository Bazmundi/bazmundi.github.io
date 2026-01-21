---
title: "DOH!"
pubDate: 2016-11-27 05:08:19
categories:
  - the-downside-of-opensource
---
So, apart from TheThingBox install woes on the RaspingBreathBurry (now I just have lotsa cupsa tea while waiting for booting) I find trying to connect to Google Calendar ain't happening without pain.
Apart from the failures to connect to the Calendar on my gmail account - until the fourth attempt at rebooting the sluggish RaspingBreathBurry.
I find xxx:443 errors popping up on the display/debug panel.
Most notably on occasion I get the dreaded "lost connection with server" from the node-red HMI (meaning yes I have to reboot the RaspingBreathBurry).
There was a scratching on the google node-red guide about enabling a Directions API (which was funny because I was wanting to use Calendar, there is a Calendar API but no direction to enable the Calendar API).  Moreover, that guide wasn't obviously for TheThingBox setup.  I set the enable on the Directions API in any event.  Didn't help.  I didn't think it was intuitive it would help and I have to note it wasn't apparent how to set up the connection between TheThingBox and the enabled API (unless it goes through your google account??) .  No matter, it didn't, as  I mentioned, help.
There is some scuttlebutt about firewall settings, nothing clear cut.
I have now deleted my "project" at google to disable the API to try to get back to the original set of problems (as usual the problem shifted as I fiddled).
Fun fact, I tried installing the Google nodes on my PC to get around the RaspingBreathBurry (and assuming there was some problem with the RaspingBreathBurry) but when I added node-red-node-google using npm onto my PC it didn't work.  It installed fine but when I dragged a google node onto the canvas it was glued in that sport, would not open the property editor on double click, and I couldn't delete it.  So the node-red-node-google running on PC was not a means to work through the problems with connecting to the Calendar.
