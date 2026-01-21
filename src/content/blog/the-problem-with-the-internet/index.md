---
title: "The problem with the internet ..."
pubDate: 2017-06-17 10:48:10
---
... and all you need is that one page you can get to from anywhere in the world, though it might be obfuscated by all the other pseudo pages on the same topic.
So, to get the node-red to run on boot I used the [following (see "Starting Node-RED on boot")](https://nodered.org/docs/getting-started/running)(as root):

```
npm install -g pm2
whereis node-red
node-red: /usr/local/bin/node-red
pm2 start /usr/local/bin/node-red --node-args="--max-old-space-size=128" -- -v
pm2 save
pm2 startup
export PM2_HOME="/root/.pm2" # because I installed in root 
reboot #takes a while after rebooting but it should come up


```

The max-old-space-size=128 is based on suggestions for RaspingBreathBurryDoodle Pi and Beaglebone Black, which both have (as does the Orange Pi Zero) 512Mb of memory.
So, now that fraking emqttd, which does not start as a service on boot, is the last hurdle.
