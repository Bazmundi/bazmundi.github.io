---
title: "Smacked Down by TTB!"
pubDate: 2016-12-01 21:07:09
categories:
  - rant
  - raspingbreathburrydoodlepi
  - the-downside-of-opensource
---
So, no way no how can I get the ttb version of the google calendar going on node-red.
Certainly I cannot get it to connect to my calendar, it just pings me with api errors of type 433.
The success with the PC version of node-red encouraged me to remove the ttb version of google calendar, off the ttb, to add the node-red version to the palette.
The problem that arose is that since the RaspingBreathBurryDOodlePi is "named" the local host callback on the google api account does not work.  Snipping in "thebox:xxxx" story does work either as the hmi widget prompts with an error that the url needs to be .com or .org before it is acceptable.
I am still vague as why the local:xxx callback does not work for the RaspingBreathBurryDOodlePi setup as local:xxxx should mean univer-silly  the \*cough\* machine the call was made from?  So, something about the named machine perhaps is blocking use of the callback.   Some other url trick is required but that is out of my scope of expertise at the mo.  Might have to do with the DHCP service running on the Pi?
That last story is likely why there is a ttb version of the google calendar ttb, but as usual they just assume it works for everyone and how no problem solving tips for what looks like is common problem.
Certainly I have google api setup properly as the PC gets the calendar events, and as the api is agnostic as to whether it is my PC or my inherited RBDPi.  There is no other guidance from ttb on common problems, especially where setting up the RBDPi running ttb and ttb google calendar.
I did rather find a job for my RBDPi that it should be able to cope with.  I have my 5 ODROID C1 cluster.  I am thinking the the RBDPi should serve the cluster as the DHCP/DNS server.  That is about all I think it can cope with as it is only an earlier version.
