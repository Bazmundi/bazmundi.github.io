---
title: "Almost there!"
pubDate: 2019-02-10 06:12:23
---
Opensprinklette closer.



Been a long haul with some distractions drawing me away.



The ESP8266 code is done. Tested on WEMOS Uno clone, with DIYMORE quad relay board; WEMOS D1 Mini with single relay shield; and that more industrial single relay ESP8266 with single optical protected input.



I am working on a way to configure the clients into the node-red flow by simply turning them on in the order you want to assign them to either groups (quads) or units (single relay).



There is a quirk with the lwt side, since it's 50/50 that a lwt comes through before the client pumps out a herald message (here is for the plebs in the audience).



I catch this since lwt is essentially offline message and herald online message, so I have both lwt ahd herald pumping out a JSON record of type (group/unit), ID (esp8266 chip id), and offline (lwt) or online (herald) flag. That way the gadget gets registered on power up either as offline or online. The herald comes through lickity split after the lwt so once up it is fine.



There will be two nodes that you hook lwt and herald messages from mqtt into. That will setup config in global context. One node is for units and the other for groups. This is inline with node-red design rules BUT also makes sense because you might only have either quads or units in a minimal setup.



The parser function, for decoding titles of google calendar events, into sprinkler activations, is well and truly tested. I still need to pull apart the duration of the calendar event to provide a millisecond value for the duration. Once that last parsing job is sorted I will be in a position to test and then deploy into the node-red community. The esp8266 code will be in github.



I will likely hold off for a couple of months while I thrash the system on my home sprinkler system. To catch any other quirks.



Once that main work is closed off, I am planning to work on code for control by android phones. Principally using the node-red hmi widgets. One thing though is I will look at a lightweight distributed key:value store to pass gadget meta-data around.



I don't wan't necessarily to drive everything from the home server. I have an evil plan to use RAFT for the fun of it, and as there is bugger all metadata to manage (so the metadata sits in two arrays, 4 entries for quads and 10 for units). Even RAFT might be overkill but I want to get my head around it in any event.
