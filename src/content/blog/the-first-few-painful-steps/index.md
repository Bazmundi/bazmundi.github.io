---
title: "The first few painful steps ..."
pubDate: 2013-08-30 09:00:21
---
... POSH on Samsung SII

I moved a cut-down version of POSH onto my Samsung SII to see about getting it running.

No joy first up as Python doens't appear to run from the S4A shell - or at least I am missing something.

No matter, a few tries to get it running from the Python shell convinced me to re-code the Main function as a class and do something relatively simple to call a POSH plan et al.

The code relies on parsing child directories for plans, agent descriptions, behaviours etc and most of the code in Main function is simply dealing with the plethora of command line options when running from an OS shell.

There is no shame in hard coding the dang blasted experiments into an instance of the base class.

Once my "Hello World" application is running I will try some experiments with the Android sensors then I want to try talking to my Romeo All In One on my experimental work horse.  That will need to chat with the Arduino using Bluetooth.

Actually, the neat thing is that the Android library for Python, as it is JSON-RPC based, allows one to run python applications on one's PC while talking wirelessly to the Android device - so you can prototype the application on your PC before dumping it onto the Android device.  More or less why Bluetooth to the Arduino is a good idea as I should be able to talk across the Android device's Bluetooth to the Arduino from the PC - neat if it works.
