---
title: "Connecting NodeMCU to a NTP server"
pubDate: 2016-07-04 17:03:32
categories:
  - embedded
  - lua
  - nodemcu
---
Ignore the IP suggested in [example](https://nodemcu.readthedocs.io/en/master/en/modules/sntp/#sntpsync).
Search google for "NTP server".
Being Australian I am using one from the pool listed at:

http://www.pool.ntp.org/zone/au

Code therefore becomes:

```
sntp.sync("0.au.pool.ntp.org",

 function(sec,usec,server)
   print('setting time to:', sec, usec, "from: " .. server)
   rtctime.set(sec, usec)
   sec, usec = rtctime.get()
   print('time set to: ', sec, usec)
 end,

 function()
   print('failed!')
 end
)


```

The difference between times that you will see, when running this gem, is in and around 7 milliseconds which is the cost from function calls is all.
The idea would be to use a timer, set to max time and auto mode to run this occasionally to keep the time on the node synced with your local world.  That is:

```
tmr.register(6, 6870947, tmr.ALARM_AUTO, sntp.sync(...)) -- see above code
```

You might like to set a flag if the sync fails, or publish a mqtt alarm, or something more useful as the print will be lost on the world since we are deploying nodes in the real-world sans terminals.  Although consider loss of sync might also be loss of wifi access and so likely loss of communications with your mqtt server - so devilishly complicated this will all be.
 
 
