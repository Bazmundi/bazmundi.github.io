---
title: "Triple Gag!"
pubDate: 2017-05-30 09:18:02
categories:
  - linux
  - orange-pi
  - the-downside-of-opensource
---
So, can't install node nor npm from apt-get on either armbian (ubuntu or debian) for Orange Pi Zero.
The Googledrive links on the Orange Pi page were duds so I reluctantly went to the Baidu Cloud link.  Baidu Cloud is so slow that for the longest time I thought it had no files at that location - it took upwards of 5 minutes to load the webpage.  That was the reason for going to the armbian distro.
So, finally got the "official" debian distro for Orange Pi Zero.  A Gb that when burnt to SD gives you a whopping 65Mb??!!
Runs.  But it also prompts you to run a command to expand the disk.  So I did.
I then had to run SDFormatter and reload the disto because once you run the disk expander your OPI drops its connection to telnet and you cannot re-connect ever again??!!
The other way to break your "official" OPI debian distro is to run nmtui to set your static IP and host name etc.  Go figure, I was doing that ad nauseum on the armbian distros but on the "official" opi distro you can never get a connection ever again.
I have gone back to the armbian debian distro.  Rather than frack around with setting static IP on the OPI I set a fixed IP address to its MAC on my GATEWAY instead.
I am going to try the binary distro ahead of any stupid attempt to build it all from source.
Something like:

```
wget https://nodejs.org/dist/v6.10.3/node-v6.10.3-linux-armv7l.tar.xz 

tar -xf node-v6.10.3-linux-armv7l.tar.xz --directory /usr/local --strip-components 1
```

DOH@!$!#
While I was typing this blog entry the opi dropped out??!! So, apparently, the reservation of IP from the DHCP is not permanent SO back to nmtui - at least that doesn't crack up the OPI when using armbian debian ... yet.
 
 
