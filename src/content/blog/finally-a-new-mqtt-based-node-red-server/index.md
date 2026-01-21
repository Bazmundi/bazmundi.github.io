---
title: "Finally, a new mqtt based node-red server"
pubDate: 2017-06-21 12:09:39
categories:
  - linux
  - mqtt
  - networking
  - node-red
  - orange-pi
---
So, much pain but lotsa learning!
Final story.
 
If you are using:

* OS: armbian.org debian server: ARMBIAN 5.31 stable Debian GNU/Linux 8 (jessie) 3.4.113-sun8i
* Erlang/OTP: V9.2/19
* EMQ: 2.2
* Orange Pi Zero 512kb (and fragged by expansion board ;)

Ignore the [service definition at the emqttd site](http://emqtt.io/docs/v2/install.html#etc-init-d-emqttd)
DO NOT CREATE /etc/init.d/emqtt - because systemd is installed in ARMBIAN 5.31 and systemd uses UNIT files (as emqttd.service below).  The /etc/init.d/xxx file should be ignored if the UNIT file is there but why clutter and have junk around.
Then do the following (from root):

```
mkdir /opt/emqttd
mkdir /opt/emqttd/bin
cp -R emq-relx/_rel /opt/emqtt/
mkdir /usr/lib/systemd/system
nano /usr/lib/systemd/system/emqttd.service

---- inside of nano ----

[Unit]
Description=emqtt daemon
After=network.target

[Service]
Type=forking
Environment=HOME=/root
ExecStart=/bin/sh /opt/emqttd/bin/emqttd start
ExecStop=/bin/sh /opt/emqttd/bin/emqttd stop

[Install]
WantedBy=multi-user.target

---- exit and save from nano ----

chmod +x /usr/lib/systemd/system/emqttd.service
systemctl enable emqttd.service
reboot
```

voila!
Thanks awfully to [@turtleDeng](https://github.com/turtledeng).
There is, of course, a new problem.  Both node-red and emqttd services start every time the OPiZ boots.  However, for some reason (tonight for the first time) connection to LAN is not coming up every time.  It comes up with no IP, no gateway, no DNS addresses???
Reboot a second time and it comes up.
This new problem means I will need check after brownout, or cycle power on ISP gateway (where the OPiZ will get its power ... assuming there is 5volts on the USB port on the gateway).
 
