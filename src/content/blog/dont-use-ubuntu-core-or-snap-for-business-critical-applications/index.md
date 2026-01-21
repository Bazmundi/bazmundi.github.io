---
title: "Don't use OPiZ Ubuntu CORE or Snap for business critical applications"
pubDate: 2018-09-08 01:45:39
---
On the Orange Pi Zero version there appears to be a problem with the Ubuntu CORE update mechanism if there are delays on the lan/internet.
Whenever I try connecting to ubuntu core device at night time southern hemisphere I will often get a snap does not exist message or connection timeout with some message about missing headers. This is likely round trip problem over the internet over distances or server loading.  It get the same behaviour on my PC late at night if I try to connect to github during the week.  It might also be a local server being thrashed at night here by overseas being awake.  Same same.
This morning (saturday morning southern hemisphere and northern hemisphere asleep) I reburnt the Ubuntu CORE 16 Orange Pi Zero onto SD, loaded it, started device, let device go through it’s obligatory first update and it came back up! That is it did not lock into config loop after update came through.  I was able to get mosquitto and node-red snapped in without lan error messages.
This lan connection problem indicates that the update, also prone to having to travel across internet, is sensitive to timeouts and frags the device that is updating.
The only solution, since you cannot avoid the updates, is to set the updates to quiet time in northern hemisphere.  That will NOT guarantee you won't frag the device - since it would only take a timeout during update to frag it.
The other problem persists, however.  That is the device drops off the LAN.  Although I think this is the reboot after successful update.  It just goes off line way too long and at random times.
As I am after a server up all the time I settled for the latest Armbian Bionic which, coincidently, allows you to install and run snapd daemon required to use snaps.  This does not act as a device the same why CORE does, or at least it does not cycle through random restarts.
I was able to snap mosquitto onto the Armbian Bionic OPiZ.  However, node-red for armhf is in --beta only and that is the node-red that would not start as service on Ubuntu CORE 16.  At least we are back to one and only one problem.  The node-red team are sorting it.  I simply went back to install nodejs, node-red and pm2 as per the hand built way.
I will revisit if node-red snap for armhf is fixed.
Although, I think also I might have to get my head around the role of CORE.  As it is for IOT I likely should not use it for a server per se.  I will investigate snapd onto an Armbian mix, however, as that would suit for a server - I think.
