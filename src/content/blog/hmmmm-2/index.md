---
title: "Hmmmm ..."
pubDate: 2017-06-01 09:55:24
categories:
  - erlang
  - mqtt
  - orange-pi
---
... so the sage seems to be continuing.
I was able to get erlang going on the OPiZ.  I tossed up whether I was going to put RabbitMQ or emqttd onto the gadget - going for emqttd since it didn't need to carry all the protocols you can play with using RabbitMQ.
I am hoping that was a good choice - go figure emqttd appears to have grown up and so is getting bloated it seems.
The other side though is during the make the OPiZ kept losing connection with github.  Not really sure how to debug this, it is either flaky networking on OPiZ part - given the problems with ssh.  The other side is that it is day time in northern hemisphere and github is not friendly to the southern hemisphere about this time at night (19:00 hours central standard time Australia) as the servers choke.   I have previously, on my PC, not been able to connect to github - putting it down to skewing of services.
 
