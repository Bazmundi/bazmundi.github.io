---
title: "Crap!"
pubDate: 2018-11-11 07:07:43
categories:
  - rant
  - the-downside-of-opensource
---
So, found I couldn't run tensorflow on my laptop as the older i5 I am running is missing an instruction extension to support vectorisations.
I thought then to try to get cuda toolkit up so I could use pyCuda or Cuda accelerated pyTorch.
I got the nvidia driver installed for the GeForce GT 420M my laptop was running. Tricky since I am running Debian 9 Stretch and nvidia is anti-Debian.
Tried unsuccessfully to get pyCuda to talk to cuda toolkit.
There is no official support for the kit on Debian so I had to rely upon vain attempts by others.
I eventually found a good blurb on the problem, but my machine started blurting out app crash reports from the desktop. They kept coming through as often as I closed them. I decided to reboot.
DOH!
Laptop came up without desktop running.
A little poking round and I worked out that sddm was not running and would not run. So, no sddm, no x-windows, no desktop. Kulprit appeared to be the nvidia supplied driver for the 420M.
I tried uninstalling the nvidia driver but the driver uninstall defaults to not recovering your x-windows setup. Unfortunately, I must have twitched on the enter key so nvidia uninstall wiped itself clean, except for the x-windows config.
I poked around and found one config file that needed to have nvidia changed to nouveau BUT there was no information on the extent of mods to files required to manually backout of the nvidia driver callouts in the x-windows.
I was stuck with no desktop.
I also found I was now also sans wifi and likely few other things so I elected to rebuild the laptop (again). That is the standard approach to dealing with linux is it not. If only that was not such a drag.
