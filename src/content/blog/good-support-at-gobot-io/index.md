---
title: "Good support at gobot.io"
pubDate: 2014-10-18 14:32:53
categories:
  - beaglebone-black
  - cross-compiling
---
The team at gobot.io sorted the access to the user LED on the BBB but an interesting problem or two.
The code does not run on the embedded Angstrom that came with my BBB.
The new BBB come with Debian and apparently the LED are set up differently between the distros.
Additionally, while I could scp the cross compiled binary to my Angstrom, using a cygwin terminal, it wouldn't work the same way when I had the Debian SD card in.
I found that I could SSD SCP from my TeraTerm to the Debian distro however.
So I was able to run the blinking demo from gobot on the Debian distro.
I just have to be brave and bomb the Debian onto the BBB.
Case closed.
