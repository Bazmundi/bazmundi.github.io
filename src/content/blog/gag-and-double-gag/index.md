---
title: "Gag! And double Gag!"
pubDate: 2017-05-28 11:19:09
categories:
  - linux
  - orange-pi
  - the-downside-of-opensource
---
So, I downloaded [Debian server](https://dl.armbian.com/orangepizero/) for Orange Pi Zero ( the Armbian thingy).
I logged in using Cygwin terminal.
Ran the following:

```
sudo apt-get update && sudo apt-get upgrade
```

Go figure it would run for a while then drop out the connection.
I had to log in a couple of times.
Had to run the following to tidy up.

```
sudo dpkg --configure -a
```

Eventually got to a state where I could install node-red so followed instructions at a [helpful website](https://diyprojects.io/install-node-red-orange-pi-running-armbian/#.WSp6M2iGOUk).
Got down to where you check for npm and node versions.  No error reports displayed previously.  However, when I tried to run npm or node to get the versions system could not find them.
I went to have a look at the bin directory.  The following directory exists but was empty:

```
/usr/bin/nodejs
```

Very grumpy.  Even a clean install is not working.
I am going to reformat the SD card and then try setting a static IP address for the board as I think I have some of the problem as the IP address expires on my while in mid session.  Something was likely not right after the update/upgrade.
