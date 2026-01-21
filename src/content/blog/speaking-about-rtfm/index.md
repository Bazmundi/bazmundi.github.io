---
title: "Speaking about RTFM"
pubDate: 2020-08-22 03:18:12
---
I discovered that my RPi running Hypriot was not running the docker daemon no more no more :(



I noticed also I could not jump onto the RPi from my PC running VSCODE with its remote development tools no more no more :(



I could ssh onto the RPi but could not run apt or apt-get even to remove packages :(



Disk was reporting 100% full, or at least it appeared root was :(



Averse to reading poorly constructed help files I did miss or ignore the suggestion that you needed at least 16G SD, I had only used an 8G. Still, if the problem in in the root partition it is only ever given 64M by the setup.



In any event, I have now re-built the RPi with a 32G SD.



But, having read the manual to set up Hypriot (again) using the cloud set up. I find my RPi is not sitting on the static IP I set for it. Indeed, multiple people seem to be having problems setting up Hypriot for static IP, using the default approach. This seems also to be a problem across multiple drops of Hypriot as the versions people are reporting span quite a few.



I am having the problem with 1.12.3 which is the latest version.



Managed to [solve the problem](https://github.com/hypriot/image-builder-rpi/issues/372)!
