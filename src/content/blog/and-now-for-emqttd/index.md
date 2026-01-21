---
title: "And now for emqttd ..."
pubDate: 2017-07-08 07:10:12
categories:
  - linux
  - mqtt
  - orange-pi
---
... again.
So, we buzzed out how to install emqttd on a OPiZ that was fragged by insertion of an expansion board so it, for some crazy reason, would not boot from orangepi.org debian server distro but would, but with clapped out device behaviour, using Armbian.com debian server distro.
Now we are back, with a new OPiZ board, no I said NO expansion board, and we have gone back to orangepi.org debian server distro.
So, some subtleties between the two distros.  Armbian.com distro must have had build tools installed as git and make were already on board.  The other quirk is wget on orangepi will report unknown certificates when using wget.   That aside, we are up againt and the orangepi.org distro seems happy as long as expansion board has never been inserted into the main board.
So for emqttd you will need git and build-essentials so please install with:

1. apt-get git build-essentials

Now we need erlang:

2. wget https://packages.erlang-solutions.com/erlang-solutions\_1.0\_all.deb
3. dpkg -i erlang-solutions\_1.0\_all.deb
4. rm erlang-solutions\_1.0\_all.deb
5. apt-get update
6. apt-get install erlang erlang-dev

Now previously we have had elixir on the end of line 6 but the emqttd build (to follow) is a bad citizen and builds elixir again over the top so no point cluttering the system.
Now we go downhill again.
So, I downloaded emqttd with:

```
git clone https://github.com/emqtt/emq-relx.git
cd emq-relx && make
```

But, when I ran make I started getting those rotten messages that hinted that the ethernet was down - couldn't resolve inet addresses.
I ran route and I seemed to have a connection.  I did, however, loose connection from the browser to the red-node despite pm2 show telling me node-red was running??
When I took a peek at my wifi extender settings the OPiZ IP was no longer reported.
I rebooted, node-red was there again, route seemed to show things were fine BUT my wifi extender settings were still not showing the OPiZ IP.
git was flaky too.  I started getting certificate errors??  The error was:

```
server certificate verification failed. 
CAfile: /etc/ssl/certs/ca-certificates.crt CRLfile: none
```

So, there are ways to fix this but not any explanations of what caused it.  This is a fresh distro, with a fresh install of git, so I haven't played around with config.
There was some chatter about certificates being time sensitive so problems with NTP??
So I am wondering if this is what I have seen with git before, not southern hemisphere friendly - after all here I am after midnight.
I did do something naughty.
I found you could turn certificates off for git.
So I did, emqttd then did start but clapped out not long after.
Each time "can't resolve host github"
I pinged 8.8.8.8 successfully so I know that I am on the net.  I can't, as usual, connect to github.
So, I was at a loss.
Given my background in embedded systems and testing I had to do what I normally did.
That is, nothing was too silly.
Go figure, I had been bugged by a difference between the previous fiddling and now that was really subliminal.
I had come across a syntactic sugar for netmask, for example a netmask of 255.255.255.0 would crop up at the end of your host IP as /24 but for some reason the netmask set by nmtui when using orangepi.org distro was /32.
Now I am not saying that that was what the problem was but changing the /32 to /24 in the static IP seems to have sorted the "missing" IP address of the OPiZ on my extender config window.
<RETRACTION>
Nope, the following morning I am not seeing the OPiZ on the networking but it is happily connected to the internet???  Although, I am still having problems with host resolution of github and having to run make multiple times.
</RETRACTION>
It hasn't helped with the github "missing" but re-running make, as it did last time, seems to muddle through - which again suggests a problem with the load on the github servers dropping connections.
It doesn't seem to happen here in the day time.
