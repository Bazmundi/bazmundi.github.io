---
title: "What a prickly problem?!"
pubDate: 2022-01-23 08:15:32
---
So, thought I'd build an assistant out of bits.



Porcupine seemed the best option, so opted to start at the beginning and play with wake words.




https://www.youtube.com/watch?v=E7dcMW7KeDc

Hey Porcupine, what the FRACK!?




**UPDATE**



So I have two issues running now with picovoice, [the syntax error using Hypriot](https://github.com/Picovoice/porcupine/issues/649), and now the fact that [I am now blocked from making API calls](https://github.com/Picovoice/porcupine/issues/653).



So, to discount Python versions I built then installed Python 3.9.2 onto my Hypriot box silver-pearl, since I tried the porcupine demos on Raspian OS Lite and they seemed fine.



Don't let anyone else tell you how to build Python onto Hypriot, it ended up (after trial and error) looking like this:



```
$ wget https://www.python.org/ftp/python/3.9.2/Python-3.9.2.tgz
$ tar -xvzf Python-3.9.2.tgz
$ mv Python-3.9.2 /opt
$ cd /opt/Python-3.9.2
$ ./configure --enable-optimizations --enable-shared
$ sudo make -j 4
$ sudo make altinstall
$ sudo ldconfig /opt/Python3.9.2
$ sudo update-alternatives --install /usr/bin/python python /usr/local/bin/python3.9 1
$ sudo update-alternatives --config python
There are 2 choices for the alternative python (providing /usr/bin/python).

  Selection    Path                      Priority   Status
------------------------------------------------------------
  0            /usr/bin/python3.7         2         auto mode
  1            /usr/bin/python3.7         2         manual mode
* 2            /usr/local/bin/python3.9   1         manual mode

Press <enter> to keep the current choice[*], or type selection number: 2



```



Note that some "help" pages suggest that `sudo make altinstall` sets up your new install as the default. It doesn't. Setting the priority of "python 3.9" did not set it to default, and so the final line `sudo update-alternatives --config python` was required to force the 3.9 selection at the console. I didn't do any additional reading into `update-alternatives`, to understand this better, but I will in the background. So many hidden gems right?!



Why not 3.10? Or another 3.9.x? Well, if the problem running on the Hypriot was some subtle change between 3.7.3 and 3.9.2 then who knows what other differences may occur?



I am getting a different response from the code now, but the original syntax problem was exactly in and around the importing of the key from the command line. ~~So I need unstick the problem with blowing out device limit before working out whether the later version of Python fixes the problem~~.



**UPDATE (again)**



Turns out now that the code is "working" (probably), but I can't check it out as the OS call that is used to provide the device ID produces a different device ID's each time I burn an SD. Yes, you heard it right, every time I re-burnt the SD card (Hypriot to Rasbian and back to Hypriot), it generated a new and different device ID. So apparently now, I already have 3 of 3 devices logged so cannot use the API for another 30 days. Even though I actually only have 1 physical device and 1 key.



**FRACK!**
