---
title: "Ah, the thick plottens!"
pubDate: 2017-06-24 13:54:00
---
So, even with the static IP set on the parallella the TerraTerm console keeps disconnecting after a time.
Then it dawned on me, the connection was being broken because the PC IP would expire and pick up another from the DHCP in the router.
So, the unwritten story is that you need to set the IP address of your working PC to static as well - so that IP addresses at both ends of the connection persist.
Now that I have set my PC to static IP, TerraTerm does not close down.
