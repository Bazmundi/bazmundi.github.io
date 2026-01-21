---
title: "Ahhhhhhhhhhhhh ... no."
pubDate: 2018-09-02 02:14:35
---
So. I put Ubuntu Core onto OPi Zero.
I snapped in Mosquitto and Node-Red.
Mosquitto is installed as a service, Node-Red is not.
I started Node-Red, set a graph up to send a timestamp every 5 minutes to debug via MQTT.
Left it all night.
In the morning the server was disconnected.  I did expect this if there was a snap update pushed through.
I did discover you cannot turn off updates ... which many people are having concerns about.  Since the system could updated and reboot in the middle of something crucial.
The problem, I was expecting to log back in and simply restart Node-Red by TerraTerm console.
Not a sausage.
The serial port was still responding and putting out the IP address of the board.
I could ping the IP address but I could not log in.
I ended up having to pull the power to force a full reboot.
Not very useful.
Not even sure where to start.  Is this a problem with Ubuntu Core and Snap, a problem with the installed snaps, or are we back to the suspicions about the OPi Zero hardware?
