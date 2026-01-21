---
title: "What a wanK!"
pubDate: 2019-07-15 13:13:52
categories:
  - hassleio
  - the-downside-of-opensource
---
So, to date. Things that don't seem to work out of box on Raspberry Pi 3B+ hass(le)io (either 32 or 64 bit) are:



* cloud9 ide
* node-red
* portainer
* a few others that I can't be bothered listing



Now the problem might be mine. It seems though that the setting up of the config files is trickier than it should be. This is aided and abetted by "help" files that don't.



Idiomatically, a templated warning on many "help" files is "Don't use this config file, write your own". The example config in the "help" file acting, as it were, as taunt.



The problem turns out, if you cut and paste the example config files, from the "help", many of them cause errors! They don't, therefore, act as a example of a straight forward, no bells'n'whistles, get you started type of example.



What seems to be missing, in peoples puny attempts at "help", is:



1. Help should not assume users have full architect status in the project, and understand not everyone has the priori knowledge of an architect OR even the plug-in developer.
2. See point 1.



Certainly, when some of the error logs are reporting potentially missing files, nested deep in the Docker image, then the fact that the Docker image is not ready for production, and shouldn't be on the streets, is laid bare.



Some of this is the open source, the user is the tester. Or worse, the user is a developer. I know that there is a derogatory name, in the open source community, for users who don't contribute. I admit I am one. What I marvel at is the pressure to contribute is a counter argument to the utility of open source, since if I can't use the software due to useability, installability, understandability, portability or other software quality problems then I am not likely to be much help because of the inherent problems, generally, with open source in the areas of useability, installability, understandability, portability.



That is, if using the software is my goal, getting involved in all the open source code bases I might opt to use for my projects is not an aspiration, BECAUSE I am officially bored with the quality of open source software in terms of useability, installability, understandability, portability.



You should be too. Especially now that open source projects are whining over "pay me for my time". YOU FREAKS! You were the types that set up the free software rort. You would have been passing floppies of stolen software around, putting companies out of business. SUCK IT UP YOU PRINCESSES!



Pardon my grumpy pants. I will actually buy a beer, if the option is there, if the software meets my expectations on useability, installability, understandability, portability. Not, however, if in the first hour I am having to debug what should be straight forward, or clearly explained.



I did managed to get the Aircast running, no changes to config needed other than, it seems, turning SSL flag to false. That was a punt I took, as the default (SSL=true) raise a error when you tried the web UI link. That "fix", applied to the other apps above, did not fix them.



Aircast is great, since I have a C.H.I.P. running shairpoint-sync under the television. So, as chrome-cast is attached to television, I can free up a airplay speaker.



The other app that seems to run fine is motioneye, which is a CCTV monitoring thing. Same thing, came up after setting SSL=false. CCTV around the place was my next project for the home, so sweet.



The configurator works, so at least I can play with the scripting.



Otherwise, I am running the hass(le)io based RPI3B+ side by side my OPiZ.



The OPiZ is running Mosquito and node-red just fine, except for the system going down about once a month.
