---
title: "What the fracking frack fracK!"
pubDate: 2026-01-02 22:49:22
categories:
  - esp32
  - mqtt
  - pcb-design
  - pcbway-sponsored
  - pick-plaz-port
  - smt-feeders
---
Yep, so still no joy getting the MonstaPC (Ubuntu linux) to connect properly to the ESP32 C3 supermini.



```
(base) asterion@MonstaPC:~$ sudo dmesg -w --level=err,warn | grep -E "error -71|error -110"
[    4.007251] usb 7-2.1: device not accepting address 5, error -71
[    4.487635] usb 7-2.1: device not accepting address 6, error -71

```



Meaning the device is there but protocol problem. Doesn't seem to be a power-management problem. Might be Linux's `xhci_hcd` (USB 3.0+) driver is stricter with timing than the older `ehci_hcd` (USB 2.0).



Given the ESP32-C3 SuperMini uses a native USB controller (not a dedicated CH340/CP2102 chip), the handshake is likely timing-dependent. Linux is historically more sensitive to the lack of USB-C termination resistors (CC pins) and the minimal power filtering on these "SuperMini" boards may be a problem.



The hack seems to be connect the ESP32 C3 supermini to an unpowered USB2 hub, then connect the hub to the computer.



Won't know until I have a USB2 hub. That'll be in about 2hrs as I've got one on click-and-collect from Jaycar.



Tick



Tick



Tick



...



Tick



2 hours later and ...



Yep, the problem with connecting the ESP32 C3 supermini to your linux box seems to be the way it handles USB comms, so if you're getting error -71 as above, linux seems to have blasklisted the device and won't try looking again. That is, linux'll black list it and ignore the device, even when you use:



* BOOT\_DWN
* RESET\_DWN
* RESET\_UP
* BOOT\_UP



While there are probably a raft of linux commands to downgrade your USB from 3 to 2, the simple fix was:



1. Get an old USB2 hub (or as I did buy a new one).
2. Connect the device the the USB2 hub.
3. THEN and ONLY THEN connect the USB2 hub to your Linux PC.



I am sure there are probably a range of linux hacks to try to fix this, but using an USB2 hub is way less intrusive.


![](./pcbway.png)
