---
title: "Tossing the coin ..."
pubDate: 2015-12-02 12:11:02
---
... is it the hardware or the software?
Not having any luck with the ESP8266 (as an ESP-01).
Seems I have to re-flash it over and over.
All I do in load the mqtt library and then create a client.  It then seems after a couple of minutes the chip hangs and then I get the chip jamming my bluetooth and I think now also my wireless networking at my PC.
If the led is glowing dimly rather than brightly seems to be the warning.  This sometimes happens when I plug in the USB.  That is I don't get a bright led, it just barely glows ... and of course my mouse then stutters across the screen as it is being jammed.
Not sure that it isn't also temperature related as I did have the thing plugged in almost permanently this last week.
It may be a problem with the board design given the problem with the USB power tripping the problem and then its the potential for  also seeing the mqtt tripping it due to some bug.  Will take a little work to sort out since there seems to be two routes to same problem.  The potential hardware one though is the killer.
It will likely not be much use in the applications I want to use them in as I don't want to be cracking boxes and jiggling bits all the time.
Still, I am curious.
When I tried a build tool on the web, to reduce the distro footprint, the crack up pumped wingdings to the terminal.  The full distro not so much.
Both times the mqtt.Create() call would close up shop after a while and the light on the board would dim and the jamming would commence.
If I can't use them for reliable mqtt clients they'll go in the bin.
The real problem being that nodeMCU is no longer actively supported.  Likely, was a curious side effect of hackers opening hardware design.  I guess they thought other so-called opensource hardware was making money.  However, Chinese knockoffs of the ESP-xx range abound.  Someone will have to front up to take over the baseline.
The other quirk.  I for some dumb reason decided to run the tools in my GoogleDrive folder so that any files was creating from the ESPlorer IDE would be backed up.   Go figure, the IDE creates a \*.lck file when it runs (who knows why).  In any event the strange thing was that GoogleDrive would pick it up and you could not delete it.  That meant once you closed the IDE you could not open it again.  Found a tool on Microsoft site has "special powers" and so I got things working again.  I also moved the application folder back onto my trusty D drive.
