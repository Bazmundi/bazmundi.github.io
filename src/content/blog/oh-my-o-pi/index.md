---
title: "Oh my, O Pi"
pubDate: 2019-12-23 05:07:24
---
Just about had enough of Orange Pi Zeros. My home server stopped serving again.



I tried balenaOS and couldn't get it up on the network.



I then tried ubuntu server same. I thought I must have plumb forgotten how to set up static addresses.



I relented and went and tried latest armbian, despite the ever presence of that wanker Igor.



Now, funnily armbian faired no better. Yet I would not have gotten that wrong since armbian comes with nmtui which handles the fiddly bit behind the scenes.



Go figure. Found a but in redhat against x86 that had the same behaviour. Not much help but it did provide an idea on how to potentially get the system up. The bug required one boot up without Ethernet attached.



So I tried that and voila! Up comes the OPI on static address. Well I felt sure then a bug in all three operating systems running on OPI right? Of course not.



Yep, you guessed it. The OPI stayed up for a while then went offline again.



I had the 3wire serial in so had an avenue to poke around.



I tried shutting down, pulling Ethernet, powering up and connecting Ethernet once booted. I knew in my heart that would not fix it and it hadn't. The second boot did not see Ethernet come up.



In fact, while the Ethernet was up, I did manage to get snap installed. Snapped in mosquitto and then most of the way through node-red when the Ethernet dropped out.



So, I started poking through the logs and it kept complaining about a loss of carrier. I note also that without doing anything else the network came back up for a while, then went down again. I am suspecting flaky SOC or board. Much like my first experience with OPI.



So, dumping the OPI Zero server for the house and going for HypriotOS on my RPI 3B+.
