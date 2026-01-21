---
title: "Ooo arrrgh, that's forward ... RTFM"
pubDate: 2020-08-18 10:01:26
categories:
  - embedded
  - linux
  - open-source-can-be-professional
  - rant
---
Go figure, for some dang reason I could not get a VNC connection no more no more with my 64 bit Debian machine.



I tried ripping out vnc servers and re-installing. I changed vnc server. Nothing seemed to help.



In a vague moment, as I had recently added jupyter to my 64 bit Debian machine, I fired up a lab via MobaXterm running on my Windoze 10 laptop.



What the ... !



A Chrome window opened up on my Windoze machine! A little perplexed I bothered to scan the MobaXterm manuals.



Perfect! X11 forwarding (I did not know that I got that with MobaXterm :) ).



So I took a punt and installed vscode on my 64 bit Debian box and voila! I can use vscode on my Debian box and MobaXterm presents the vscode editor on my Windoze laptop.



It's amazing what you find if you read the manual ;) .



I was also having a problem with my Raspingdoodleburry Pi. The RPi started baulking about "running out of space", which was bullshit.



However, the RPi wouldn't start the docker daemon under Hypriot and I could no longer connect using VSCode running on my Windoze laptop (since that seems to want to write to the embedded system).



A little shitty since the Raspingdoodleburry Pi was running Hypriot atop which was running node-red, emqx, home-assistant, deCONZ and I was about to run Redis. So, once I had problems with "no space" on the RPi, I was faced with having to sort that and needed to get my config off - as I was likely to have to re-burn the SD card.



I managed to use scp to get the relevant files off the RPi onto the 64 bit linux box, but then found MobaXterm also opens a Sftp dialog that allows you to navigate the embedded host and move files to and from the target. DOH!



I spent a little more time RTFM after that. I do have to recommend [MobaXterm](https://mobaxterm.mobatek.net/)!
