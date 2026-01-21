---
title: "Setting up clusterctl on Hypriot"
pubDate: 2020-09-01 06:37:12
categories:
  - uncategorized
---
Manually install [clusterctl](https://8086.support/?action=faq&cat=23&id=120&artlang=en). This will install fine but not run.



The running problem `clusterctrl status` results in:



`$ clusterctrl status  
Traceback (most recent call last):  
File "/sbin/clusterctrl", line 7, in  
import glob, sys, smbus, time, os  
ModuleNotFoundError: No module named 'smbus'`



So, smbus needs to be installed.



Manually installing smbus from [example](https://skpang.co.uk/blog/archives/575). Findings:



* `/etc/modprobe.d/raspi-blacklist.conf` is empty so neither i2c or spi are blacklisted so no modification needed.
* i2c-dev is already included in `/etc/modules` so no modifications needed.
* run `sudo apt-get install i2c-tools`
* run `sudo adduser pi i2c`



Unfortunately, instead of:



`$ sudo i2cdetect -y 1  
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f  
00:          -- -- -- -- -- -- -- -- -- -- -- -- --  
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
20: 20 -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
70: -- -- -- -- -- -- -- --`



I am geting:



`$ sudo i2cdetect -y 1  
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f  
00:          -- -- -- -- -- -- -- -- -- -- -- -- --  
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  
70: -- -- -- -- -- -- -- --`



Hopefully that simply means nothing attached.



I tried to fix the smbus module missing with:



`sudo apt-get install python-smbus`



But still got the problem. BUT, that command line is for Python2 and not Python 3. To be sure to be sure, and since Python3 is the one running on Hypriot, use the following:



`sudo apt-get install python-smbus python3-smbus python-dev python3-dev i2c-tools`
