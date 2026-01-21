---
title: "Snappy!"
pubDate: 2018-09-01 21:11:41
categories:
  - mqtt
  - node-red
  - thingbox
---
So, yes.  I have been playing with Snap while doing the Docker course.
I did install Ubuntu Core on the OPi and managed to get Mosquitto snap running.  But the node-red snap keeps failing to connect or install (with time-outs reported).   It is 6 am on Saturday, so is that indicative of northern hemisphere loading on the Net?  Who knows, wife, sister in law and two of there friends just finished their party.  I was woken when the retrobates left.  So, I am dabbling.
The same old story though.
Help is out of date.  I installed Docker version of snapcraft on my linux laptop.  You were supposed to use that if you weren't using Ubuntu - I prefer Debian.
There wasn't enough data to get something running on that Dockerized snapcraft.
I then found another help site that pointed out that the Docker version of snapcraft was deprecated.
You can now snap snapcraft into place.
Then found an interesting snap that I subsequently deleted.  It, however, reported an error on start up.  No help on the snap so dumped its arse.
I will perceiver with snapping MQTT and Node-Red onto the OPi.  If that holds its water I might still use the OPi as the house server.
There is, however,  [thinger](https://thinger.io/downloads/).  There is a RaspingdoodleburryPie image.   I have loaded the snap of the server onto my linux laptop to do a trade-off against Node-Red.
Wait ... wait ... wait ... finally, Node-Red snapped into place on OPi.
So, with Mosquitto running, Node-Red MQTT nodes talking, I have a 5 minute timer to leave the system running to see if it keeps going.
The thing I will need sort, however, is that the snap system will push updates (I could one happening the other day).  So, I will need look into holding off the pushed updates to avoid the updates confounding the testing.  As you'll recall the initial suspicion was flaky hardware.
