---
title: "Around the buoy again ..."
pubDate: 2017-07-27 10:41:10
---
So, after thrashing the nodejs, node-red, npm install for a few days (by rebooting every 5 minutes) we have decided those aspects were not causing the problems with the ethernet and usb devices collapsing.
I just began the next stage by installing erlang/elixir and have begun the chore of re-installing emqttd.
Go figure, it gets most of the way through it's build and claps out.
Might be that the latest master called by git requires OTP 19.3+ and the apt-get for OPiZ returns OTP19.  So, I have ripped out the emqttd again and re-run git command but used an OTP 19 friendly branch emq20.
Voila!
emqttd builds on OPiZ running OTP 19 if you use the emq20 branch.
Now to bed.
I will look at setting it up as a service tomorrow night then pummelling it with reboots over the weekend.
