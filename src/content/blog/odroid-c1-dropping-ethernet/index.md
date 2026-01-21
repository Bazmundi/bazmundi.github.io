---
title: "ODROID-C1 dropping internet"
pubDate: 2016-12-26 22:44:21
---
I found I was having problems with the ODROID-C1, which I am building up as the node-red, mqtt, Phoenix server for home automation, was loosing internet connection a time after boot.
I am building the machine on top of odrobian vanilla - I am using Debian based Linux on all my boxes by preference - which does leave me out in the cold with some software yes.
The cli command told me the ethernet on board was working so I suspected a problem with IP allocation.  A reboot would fix the problem after all.
I poked around the [odrobian docs](http://oph.mdrjr.net/odrobian/doc/#README).
Go figure the installed /etc/network/interfaces file read:

```
auto lo
iface lo inet loopback
```

The starting example in the docs read:

```
auto eth0
iface eth0 inet dhcp
```

Interwebbything, again, has no useful help in as far as there are 1,000,000 plus pages on iface setup so who knows who actually understands what they are telling people and how many are just gash copies of material from the first place people found it?
So what I ended up doing is the following:

```
auto lo
iface lo inet loopback
```

```
auto eth0
iface eth0 inet dhcp
```

The reason being one oft copied recommendation is always have the loopback.
I tried the eth0 without the auto in front but ping failed to find the real-world.   You would know if it failed as the ping returns immediately.   If it takes any time it's because it got out into the real-world and is looking for the target.
The auto  command is telling the etho (and lo for that matter) to start on boot.  Without it you would need to do a manual start from the command line.
So, there appears a problem in the supporting manual for odrobian as it assumes what might be in the /etc/network/interfaces file and is simply wrong.
I checked it out by starting a ping to github.com and then jumped on my bike and went for a half hour spin THEN a medium length walk with the dogs (b4 it rains again).
When I came back, we were still on the Interwebbything.
Looks like that they have just copied material from somewhere without tuning it for the actual distro.
