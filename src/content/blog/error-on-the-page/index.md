---
title: "node-red on docker - problem solved"
pubDate: 2019-12-24 02:15:32
categories:
  - docker
  - hypriotos
  - networking
---
So, I gave up on my OPI Zero as the house server, because it kept disconnecting. I did then try to buzz out a second OPI Zero, but with the same result.



I had the RPI 3B+ I bought and then got shod of thethingbox, as it didn't run the node-red out of box so that flows were preserved on reboot.



I decided to go for broke and bomb the RPI 3B+ with HypriotOS.



I then tried out the instructions on node-red site for [node-red on docker.](https://nodered.org/docs/getting-started/docker) Good.



Tried the mosquito MQTT server example. Not so good. The node-red would not connect to the MQTT server. Typed the example it, quadruple checked it. Nothing.



Gave up. Worked out how to install Snap onto HypiotOS.



Why would you I here you say. Well 1) I had the shitz up because I couldn't get the dockerised node-red talking to the dockerised mosquito broker from the relatively simple instructions and 2) it kinda makes sense that apps like mosquito broker and node-red are saner as Snaps.



So, worked fine as two Snaps of node-red and eclipse-mosquito.



Still bugged me that I couldn't get the docker versions running.



Also found my RPI 3B+ was dropping off the network. That put paid to the idea I had dodgy OPI Zero boards. That was a harder ask, in any event, since two flaky boards? You had to be plain unlucky.



So, culprit is, in fact, my old Netgear wifi extender. An interent search finds, indeed, that wifi extenders are notorious for dropping off. On top of that, for some reason I could not login to my wifi extender using the usual mywifiext.net. Although, that problem cleared itself after a couple of hours, so who knows what goes on when I am not monitoring the thing. Yeesh!



It was too long a stretch to blame the wifi extender for the docker problems as the web page found the node-red fine, the node-red not connecting to the mosquitto broker was internal to docker, so would not be affected by the wifi extender problems. The wifi extende was up more than it was down so I soldiered on.



So, the wifi extender aside, I did rip out the Snapped apps and retry with the docker examples. In fact, I opted to drop eclipse-mosquito since it did not have an admin channel. I was going to go with my fav, emqttd, but found it had become emqx.



So, pocking around I found that the emqx was up. Same problem, no connection with the node-red container.



The node-red site recommended:



`docker run -it --name mybroker eclipse-mosquitto`



I beefed that up to be:



`docker run -it -p 18083:18083 --name mybroker emqx/emqx:v3.2.7`



That gave be the penulimate arm64 version of emqx, running with admin accessible. I found the admin port up and running so ...



Turns out the error was in the node-red example at the node-red site. The error starts with:



`docker run -it -p 1880:1880 --name mynodered --link mybroker:broker nodered/node-red`



What the node-red instructions tell you is to use "broker" in the MQTT node in the node-red flow. Turns out you actually need to use "mybroker" to get the connection. Once I used "mybroker", I got a connection and all was fine from then on - save for the wifi extender dropping in and out.
