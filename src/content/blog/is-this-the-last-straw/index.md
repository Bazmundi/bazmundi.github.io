---
title: "Is this the last straw?"
pubDate: 2017-06-21 13:09:12
categories:
  - linux
  - orange-pi
---
So, now after a couple of weeks of dicking around trying to sort the booting of the OPiZ - so it starts up with node-red and emqttd, it works!
Or at least I can say the both services start up.
But, of course, this last couple of days I had trouble browsing into the node-red and now, in hindsight, it seems my OPiZ was occasionally not starting up connected to the ethernet.
After all the work to get around the fragging of the board, and working out the trick to using nmcli, the OPiZ would occasionally boot with no IP (static or otherwise), no gateway setup, no DNS?
It is now worse having put the board into the case.
The simple act of screwing it in and now system boots with no network at all.
So, fingers crossed - I will type in all the nmcli commands again.
Arrrrr ... no.
If type all the data again and then use the "route -n" command I get naught - meaning:

```
root@house:~# route -n
Kernel IP routing table
Destination Gateway Genmask Flags Metric Ref Use Iface
root@house:~#
```
