---
title: "Not a sausage?"
pubDate: 2017-07-20 10:20:46
categories:
  - linux
  - orange-pi
---
So, I reburnt the SD with the orangepi.org distro.
I gave up on nmcli/nmtui and I went back to the good ole /etc/network/interfaces edit, or at least I created:
/etc/networks/interfaces.d/eth0
Set the contents to:
auto eth0
allow-hotplug eth0
iface eth0 inet static
address 192.168.0.100
netmask 255.255.255.0
gateway 192.168.0.1
dns-nameservers ...
When I set up I now happily get:
root@OrangePizero:~# ip addr show
2: eth0: mtu 1500 qdisc pfifo\_fast state UP group default qlen 1000
link/ether f6:78:ae:aa:0a:d8 brd ff:ff:ff:ff:ff:ff
inet 192.168.0.100/24 brd 192.168.0.255 scope global eth0
inet6 fe80::f478:aeff:feaa:ad8/64 scope link
valid\_lft forever preferred\_lft forever
So, board seems to setup the eth0 as I want it to.
However, my network simply does not see the board.
I have a bag of short ethernet jumpers from aliexpress ... hmmmm ... nope.  I swap a few out so unless they have sent me a dozen dud ethernet cables it isn't the ethernet cable.
So, it looks like the problem might have been that I had the following
auto eth0
allow-hotplug eth0
iface eth0 inet static
address 192.168.0.100
I commented out the hotplug line, rebooted then voila!  My OPiZ was "seen" on my local lan again.
But ...
... still can't get out to the world???
Well, apt-get doesn't resolve.  A ping to google.com fails.  A ping to 8.8.8.8 succeeds ???
root@OrangePizero:~# route -n
Kernel IP routing table

| Destination | Gateway | Genmask | Flags | Metric | Ref | Use | Iface |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.0.0 | 192.168.0.1 | 0.0.0.0 | UG | 0 | 0 | 0 | eth0 |
| 0.0.0.0 | 192.168.0.1 | 0.0.0.0 | UG | 1024 | 0 | 0 | eth0 |
| 192.168.0.0 | 0.0.0.0 | 255.255.255.0 | U | 0 | 0 | 0 | eth0 |

So, why am I not getting out?
root@OrangePizero:~# ifconfig eth0
eth0 Link encap:Ethernet HWaddr f6:78:ae:aa:0a:d8
inet addr:192.168.0.100 Bcast:192.168.0.255 Mask:255.255.255.0
inet6 addr: fe80::f478:aeff:feaa:ad8/64 Scope:Link
UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
RX packets:1559 errors:0 dropped:172 overruns:0 frame:0
TX packets:489 errors:0 dropped:0 overruns:0 carrier:0
collisions:0 txqueuelen:1000
RX bytes:246564 (240.7 KiB) TX bytes:37710 (36.8 KiB)
Interrupt:114
So, I note I can ping google.com from my PC and I can ping the OPiZ from my PC.
I can ping my PC from my OPiZ.
Ah ha.
/etc/resolv.conf
is set to:
#the following is set by network manager
nameserver 192.168.1.1
So, that won't work on my network given the ISP router provides two nameserver addresses before you would bother with the free nameservers. Not to mention my gateway is 192.168.0.1 and so the dns requests were getting nowhere.
So I manually set up resolve.conf to two name servers given by my ISP and the two free ones (to be sure, to be sure).
Happily now pinging google.com.
I have run apt-get update again.
Ready to start all over again ... again.
All this as the node-red was running fine but the network went [kaput](https://organicmonkeymotion.wordpress.com/2017/07/08/and-now-for-emqttd/) on the OPiZ somewhere in the middle of the emqttd install.
I can't put my finger on when during the emqttd install, but there were all the problems with wget and then I did twiddle with certificates. However, why on earth would that blow away my network configuration???
No useful hypothesis as yet so I will check regularly during the emqttd install steps if see if/when the connection breaks.
I also installed a watchdog node into node-red and set up a 10 minute timer to reboot the OPiZ to stress it.  If it is up on Sunday after all those reboots we can likely discount the node-red and I guess the npm as the culprits.
