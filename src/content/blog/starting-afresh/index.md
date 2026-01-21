---
title: "Starting afresh"
pubDate: 2017-07-06 12:56:29
---
Throw out OrangePi Zero board that was [fragged when expansion board was inserted](https://organicmonkeymotion.wordpress.com/2017/07/06/crrrrrrrrrrrrrrrrrrap/).
[Full story](https://organicmonkeymotion.wordpress.com/category/armbian/).
Take brand spanking new Orange Pi Zero from wrapper.
[Set up 3-pin serial](http://lucsmall.com/2017/01/19/beginners-guide-to-the-orange-pi-zero/).
Use 2amp power supply.
Burn [orange pi debian server distro](http://www.orangepi.org/downloadresources/orangepizero/2017-05-11/orangepizero_a1d552c7f0247859389fe3c.html) from orangepi.org site ([not the distro from the Armbian.com site](https://organicmonkeymotion.wordpress.com/category/armbian/)) onto SD card using Etcher (so it reports SD verified).
Then login and:

1. setup static IP with nmtui
2. reboot so that static IP takes
3. apt-get update

So far so good.  The apt-get call is also a check you are on the net, or before using apt-get you could use:

```
ping google.com
```

Next, I went to download the nodejs binaries [as before](https://organicmonkeymotion.wordpress.com/2017/06/25/setup-for-house-server/) but got an authentication error message.
So I thought, what the hell, just use apt-get install.
Nope, as before the install aborted so likely this has not got an Orange Pi Zero "flavour" set up.
Back to the binary download.
wget baulked but I recall there is a way to set up the authentication to allow the file to be picked up by wget.

```
wget https://nodejs.org/dist/v6.11.0/node-v6.11.0-linux-armv7l.tar.xz
```

Raises an unknown certificate error.
But the trick (if you trust the site and you don't care to fiddle with certificates) is:

```
wget --no-check-certificate https:...
```

So we continue with:

4. wget --no-check-certificate https://nodejs.org/dist/v6.11.0/node-v6.11.0-linux-armv7l.tar.xz
5. tar -xf node-v6.11.0-linux-armv7l.tar.xz --directory /usr/local --strip-components 1
6. node -v
7. npm -v
8. npm cache clean
9. npm install -g --unsafe-perm node-red
10. node-red

So again check by browsing in from your PC to the OrangePi Zero at whatever static IP you set up.

11. ^C
12. npm install -g pm2
13. whereis node-red
    node-red: /usr/local/bin/node-red
14. pm2 start /usr/local/bin/node-red --node-args="--max-old-space-size=128" -- -v
15. pm2 save
16. pm2 startup
17. export PM2\_HOME="/root/.pm2"
18. reboot

So again check by browsing in from your PC to the OrangePi Zero at whatever static IP you set up.
Next time we'll build emqttd (again ***\*groan\****)
As an aside, when I changed the hostname using nmtui I discovered that /etc/hosts wasn't changed.
No biggy but I only found it through the failed attempts to get nodejs to install via apt-get.
This occurred because you need to register the location of the nodejs package using curl.
The error curl was raising being "host house not resolved".
That in itself gives you interesting insight into how curl works but also a reminder that the hostname is set in various places (very clumbsy) and nmtui doesn't bother dealing with that - so you have to remember to chase down wherever the hostname for your host is set on that host.
The other aside, since I had setup my PC now with a static IP I added it to /etc/hosts on the OPiZ just in case I ever go to add something that would lean on that.
