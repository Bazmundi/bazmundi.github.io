---
title: "Setup for home automation server"
pubDate: 2017-06-25 14:16:33
---
So, setup for house server on Orange Pi Zero 512kB using:

```
Armbian_5.25_Orangepizero_Debian_jessie_default_3.4.113.img
```

Ignore my previous posts where I use WIN32DiskImager.  Seems it has fallen out of favour (and might be the root of all the other problems I was seeing??!!).
Use [Etcher](https://etcher.io/) as directed on the Arbian.org site, as well as a good quality Class 10 SD card.
On Windows you will get a fright because dopey Etcher does not nominate your SD card as a drive number (J: for example on my PC) - heaven forbid.   So it takes a while to work out it is happily point ONLY at your SD card.
Given all the warnings about using WIN32DiskImager (and trashing your computer) it was a bit arrgh! of the authors of Etcher.   I think they are trying to be hip \*yawn\*.
<RETRACTION>
I just notice the windoze drive letter on Etcher.  You have to swipe your mouse over a tiny group of pixels accidently for a hovering text to show up.
Once I saw that I did go back to the drive selection to find a very light gray "j" over a dirty white background in contravention I suspect of accessibility laws - if not plain old simply human factors and HCI design rules.  I am 50+ and have glasses (often smudged) so what can I say ... I easily miss things.
</RETRACTION>
Login into armbian.org distro for first time and set up root and user accounts.
Setup static IP for your Orange Pi Zero using nmtui or nmcli (for power users).
Reboot and  then run:

```
apt-get update
```

Grab binaries for nodejs and install them:

```
wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-armv7l.tar.xz
tar -xf node-v6.10.3-linux-armv7l.tar.xz --directory /usr/local \
      --strip-components 1
```

Check install with:

```
node -v
npm -v
```

Use npm to install node-red with:

```
npm cache clean
npm install -g --unsafe-perm node-red
```

Test node-red out with:

```
node-red
```

Then go to your OPiZ static IP with your browser on another computer in your network.

|  |  |
| --- | --- |
| 1880 | node-red Port |

Next we are going to setup PM2 so as to start node-red as a service on boot:

```
npm install -g pm2
whereis node-red
node-red: /usr/local/bin/node-red
pm2 start /usr/local/bin/node-red \
      --node-args="--max-old-space-size=128" -- -v
pm2 save
pm2 startup
export PM2_HOME="/root/.pm2" # because I installed in root 
reboot #takes a while after rebooting but it should come up
```

Then go to your OPiZ static IP with your browser on another computer in your network - you should see node-red running.  Be brave, close the browser tab and re-open it, or refresh it.
Now let's add erlang with:

```
wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb &&
dpkg -i erlang-solutions_1.0_all.deb &&
rm erlang-solutions_1.0_all.deb
```

Then

```
apt-get update && sudo apt-get install erlang erlang-dev elixir
```

Note you can leave elixir at the end of the previous command but emqttd following will rebuild elixir blindly over the top - bad citizen!
Now fetch and build emqttd:

```
git clone https://github.com/emqtt/emq-relx.git
cd emq-relx && make
```

Try out emqttd with:

```
cd _rel/emqttd && ./bin/emqttd console
```

|  |  |
| --- | --- |
| 18083 | MQTT dashboard port |

Go to your OPiZ static IP with your browser on another computer in your network - you should see node-red AND emqttd running.
Now let's set up emqttd to start on boot:

```
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

I copy the whole \_rel directory over to /opt because I tried moving only the bin directory BUT when I tried running it came up with an error.
Go to your OPiZ static IP with your browser on another computer in your network - you should see node-red AND emqttd running without having to login!
Enjoy.
 
