---
title: "CrrrrrrrrrrrrrrrrrrAP!"
pubDate: 2017-07-06 12:11:27
categories:
  - armbian
  - linux
  - orange-pi
---
So, now with 3 pin serial and I have changed power supply (just in case that was the problem).
I have a 2amp USB powerpack from my Samsung phone so that factors out power since problems persist even with the fragged board running on the new powerpack.
The thing is with the 3-pin serial in I can see what I worked out weeks ago.  The system-load-modules.service wasn't starting on the fragged board.
It doesn't start out of the box with a fresh burnt Armbian - either 5.25 or 5.30.  I only noticed this after the fragging so until I try this on one of the new boards who knows whether this is triggered by the fragging.
I had seen that earlier in my investigations but it never started and I could, for a time, set static IP etc.
I note using nmtui 'Wired connection 1' I get the error:

```
Could not activate connection ... connection not available on device eth0
```

So, there is something with the ethernet chip?
Nope.
I swapped in one of the new boards and same problem - system-load-modules was not starting and nmtui was not saving eth0 config or it was being dropped because you could not get a connection to the device.
So it is definitely something with the Armbian distro since it is on both fragged board and the new board (that has not had an expansion card inserted).
I will burn 5.30 onto SD again and boot fresh again to see again whether system-load-modules comes up on the new board.
Er ...
No wait, what I will try is burning the SD with the orangepi.org distro.
Recall fragged board won't boot at all post insertion of expansion card - and hence the assumption the orange pi zero had been fragged.
Hmmm
New board boots with orangepi.org distro, old board does not boot with the exact same SD card - yes burnt with Etcher.
Case closed.
The orangepi zero was fragged by the expansion board.
That was my initial hypothesis.
All the other problems are the Armbian distro.
Pity I am not welcome on their forum to help sort this.
![jestor](./jestor.jpg)
So, original OrangePi Zero is in bin.
Two new boards on hand.
I will re-build one of the new boards with node-red and emqttd to be the house automation server and then get back to sorting the house automation and finish rebuilding the cluster with the recovered ODROID-C1 and new parallella.
 
 
