---
title: "It's all a matter of timing"
pubDate: 2017-06-24 03:48:13
categories:
  - chapel
  - elixir
  - erlang
  - forth-is-it-dead-or-isnt-it
  - parallella
---
So, phew!
I re-bombed parabuntu onto the SD card.
What the problem was earlier was the security key had changed but I was forgetting to say YES to option for saving the new key (I had quite a lot of red wine last night so don't be so hard on me ;) )
When I powered up the Parallella again, I wasted no time and jumped in with:

```
sudo nano /etc/network/interfaces.d/eth0

---- inside of nano ---

auto eth0
iface eth0 inet static
address 192.168.0.150 // your parallella IP here
netmask 255.255.255.0 // your netmask here
gateway 192.168.0.1 // your gateway address here
dns-nameservers x.x.x.x //your dns server list here

--- exit and save ---

sudo reboot
```

Happily now running on the static IP set ... phew!
Now to work.
Target environments will be erlang/elixir and chapel.  Yet, ePython for poking around.
I am reading back into my threaded interpretive days to look at a minimal FORTH runtime to run on the Epiphany.  There has been chatter on the parallella groups about J1, but that is a HDL (read FPGA) FORTH.  I think many people chattering haven't worked in FORTH so much of the chatter is unproductive.  I am thinking a GForth running on the ARM side that assembles, rather than cross compiles, to a hand built threaded interpreter on the matrix.  I am not sure how feasible that all is but it will be  a good instrument for learning the nuts'n'bolts of Epiphany.
Many lessons can come from the struggle, yes?
This, idea is no more or less I worked on during a project, in Canada, where I noted the DSP software the team was using was already using a threaded processing chain.  The idea then of control loops and conditional inside of that was a soft sell.
So, in FORTHeze no outer interpreter running on the Epiphany.
 
