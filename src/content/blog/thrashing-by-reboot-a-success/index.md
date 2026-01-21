---
title: "Thrashing by reboot a success"
pubDate: 2017-07-29 21:53:57
---
So, I have left the OPiZ running for 24 hours, node-red and emqttd running, and rebooting every 5 minutes.
All is running.
So why the dropout of the system previously?
Now the experiment will be to remove the 5 minute reboot, just leave it running and either ping from my PC via a python app or set up a pass-through topic on emqttd to test for the OPiZ server being up.
The dropping of ethernet may be related to how long the system has been running.
It could end up a design problem, the OPiZ 2 has dropped ethernet.  I might yet have to relent and go to wifi - though this would be 1) against principle and 2) against the design I have set for my set up.
I do note one mention on internet of heat related problems with OPiZ and the ethernet.  So, in the meantime I am going to order me a gaggle of heatsinks.
