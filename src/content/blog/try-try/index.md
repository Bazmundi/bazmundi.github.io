---
title: "Try, try ..."
pubDate: 2017-06-22 14:48:42
---
So, I am scratching the OPiZ SD and starting again to see if that recovers the issue around the system no longer booting up with ethernet.
Straightforward enough.  I used SDFormatter to reformat the SD card.  I am just rebombing with the arbian distro.
Logging in via USB.
I will jump straight in with nmcli as the problem manifests as no IP, Gateway or DNS and nmcli failing to save the configuration.
DOH!
Tried logging into the fresh distro - got a "Authentication token manipulation error" when responding to prompt for new root password?!
I pulled power to try again.  Same problem, so I will rebomb SD card.
DOH!
Still the same problem!  Is the card fragged?  I will bomb a new SD card (with trepidation).  But, maybe the card was fragged by the expansion board and not the motherboard?  Might explain the problems with software: nmtui hanging, nmcli eventually not saving, loss of ethernet configuration.
WoW!
Same problem with new SD card?  Is my distro corrupt?
I re-downloaded the distro and burnt that new copy of the distro to the new SD card.
Getting a flashing red led next to the green one.
Of course, there is a hint on the net that OPi are generally super sensitive to SD quality, you need at least a Class 10!  I have a SanDisk Ultra microSDHC UHS-1 Class 10 ... check.
Since it is getting through the initial prompts, and doing so on two different SD cards, it is pretty telling that the board is fragged somehow.
Proof of pudding I took one of the SD that now won't get past setting root password (on first boot of SD card) and happily bombed parabuntu onto it.
I did suspect the SD card for a moment.  I connected the Parallella to my gateway in the lounge room as I have a horrible nest of power cables in the back of my desk, up against the wall, which makes it soooooo undignified, when getting on all fours to plug something into the rarely available positions in the power boards.
The parallella powered up BUT I could not see an extra device on my gateway???  I tested the power adapter I bought (the ones with the various optional connectors) so I knew I had +5V on centre pin as required.
That's right.
In the end I was on all fours.
Bumping my head.
Kelpie cross Staffy cross Ridgeback cum Chupacabra (aka Mexican Devil Zombi Dog), tail wagging at the speed of sound, jammed under the desk with me as my presence on the floor WAS obviously an invitation for her to play.
I digress.
The parallella turns up fine, with a DHCP IP address , when connected by ethernet cable  to the wireless extender sitting on my desk.
The fun fact?
Yep, I follow instructions to set up static IP on the parallella AND I then have to re-bomb the card to get dopey ethernet back again.   This one will be a pain since you cannot serial in easily.
 
 
