---
title: "Never ending story"
pubDate: 2017-06-30 02:16:35
categories:
  - armbian
  - orange-pi
---
So, to date, flaky behaviour using Armbian 5.25 debian server on Orange Pi Zero.
Claims of file system corruption due to SD burn are likely debunked because:

1. SD are brand new.
2. SD are genuine out of the box SanDisk Ultra microSDHC UHS-1 parts.
3. 5.25 image has been burnt to SD with both WIN32DiskImager and Etcher.
4. Etcher is supposed to baulk if SD does not verify and it does not baulk.
5. Problem occurs regardless of SD used so since file system corruption is random it is hard to argue, statistically, two SD burns with exactly the same corruption, let alone three or four serial burns of same SD with same corruption.

So, for some reason the eth0 connection eventually goes kaput.
I found to the problem I thought was with nmtui (where it hung) was actually the board dropping the USB connection.  The quirk is nmtui can break the connection every time, it just so happened that the problem manifest halfway through scrolling a log using nano.
Why I came to this was that eth0 would come good, for a time, after doing nothing but two or three reboots in a row.  The USB dropped out while eth0 was up so I was able to ssh into device and run nmtui with no problem - so nmtui isn't hanging, the usb link is.
The problem with the usb is then of same ilk as the problem with eth0 since they are both devices so that might point to where the problem resides.
On weekend I will get out 3-pin serial as I keep getting hounded to use that since you get more login garbage.  I am guessing it doesn't act as a device so might also be immune to any lergy affecting devices.
