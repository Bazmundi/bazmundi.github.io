---
title: "Setting up platformio and arduino IDE with ttyUSB0 on Debian 9"
pubDate: 2018-09-27 05:53:09
categories:
  - iot
  - linux
  - nodemcu
---
Wow!
Troubles with my 64bit Debian 9 Stretch and trying to setup for ESP8266 and ESP32 development.
This is a freshly built laptop so the USB ports had not been opened before.
I could not "see" ttyUSB0!  So I assume it might be drivers (it was for my Windoze PC).
I feel lucky to have found anything on setting up my usb serial port to see my NodeMCU 0.9 because of just how much junk is on internet about the zillions of ways of fracking your USB port.
I did find out the drivers I had to install, a great video on how to do that, and stopped short of doing that because 1) the instruction was to move stuff under the kernel devices directory (it turned out I had two kernel directories so thought better of that) and 2) when I looked under the kernel directories I found the driver already installed.
So, a little more poking around and I found I needed to add my standard user to related groups:
**dialout** - full and direct access to serial ports. Members of this group can reconfigure the modem, dial anywhere, etc.

```
sudo usermod -a -G dialout user
```

**plugdev** - allows members to mount (only with the options nodev and nosuid, for security reasons) and umount removable devices through pmount.

```
sudo usermod -a -G plugdev user
```

 
That is what I need as the serial port now displays in Arduino IDE. However, I did opt for also installing platformio into the MS Visual Studio Code (rather than into Atom).
