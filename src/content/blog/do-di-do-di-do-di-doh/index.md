---
title: "Do di do di do di DOH~!"
pubDate: 2017-07-29 08:11:48
categories:
  - linux
  - orange-pi
---
So, yep, sure enough, I came back to the OPiZ and could not connect.
As I have the 3-pin serial connected I snuck a look and yep ... route naught.
I rebooted, setup emqttd as a service, re-started the cyclic reboot task in node-red.
I will let that run a few days then I will have to try something else to work out when and why the lan connection is dying.
This is on a new Orange Pi Zero board that hasn't had an expansion board inserted, and it is running the orangepi.org headless debian server.
I still can't fathom how the difference between ethernet connection persisting and then being dropped procedurally is the installation of erlang/elixir/emqttd.
Worst case, I guess I can install Mosquitto.
Still, I cannot see the mechanism.
 
