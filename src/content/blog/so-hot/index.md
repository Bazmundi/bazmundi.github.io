---
title: "So hot!"
pubDate: 2017-07-30 07:12:21
categories:
  - orange-pi
---
I stuffed the following into a node-red exec node:

```
cat /sys/devices/virtual/thermal/thermal_zone0/temp
```

Every minute I will now get a temp reading of my OPiZ to my node-red console.
At the moment the temperature of the OPiZ is running at about 61degreesC.
From chatter on the net this is hot but not a problem - but I will be taking delivery of heat sinks later in the week so that should see the temp drop somewhat.
Fine while the OPiZ stays running but it will keep a record of the temp and the round about time the thing stops.
I have a python based mqtt client listening on my PC for a topic set by node-red on the OPiZ.
I also have another python script on my PC pinging the OPiZ periodically to try to catch the time it drops off the ethernet.
Now even if the ethernet drops out I will still need parse the logs to see if the chip reset due to heat or was turning off devices due to heat.
I am also running the following, to monitor memory usage, on the Tera Term connection (3-pin serial):

```
sudo watch -n 1 vmstat -s
```

In any event, I have ample instruments to monitor the system to try to give hints at the behaviour (at least) of the ethernet drop outs that I have been seeing.
In the meantime I started poking around to try to work out how to get control of the CPU clocking as I might need turn down the clock speed to try to keep the OPiZ cooler - if that turns out  to be the problem.
Keeping an open mind in any event until I get some hints.
