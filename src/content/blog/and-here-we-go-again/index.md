---
title: "And here we go again ..."
pubDate: 2020-04-19 02:04:07
---
Just bracing myself for a torrent of UNHELP on homeassistant user group.



The problem, well there is a couple of problems.



**Problem 1.**  I found the charger for my old Acer A500 android tablet so that is being set up in kitchen as web search, YouTube and Netflix gadget for cooking assistance. That means, apparently, I cannot use it for homeassistant client since a) Chrome version on A500 is too old and b) the homeassistant android app is not compatible with the version of Android running on the A500 and therefore c) see **Problem 2**.



**Problem 2.**  I need to ask questions on the homeassistant user group.



**Problem 3.** I need to sort why the rest API works fine in all examples provided on homeassistant web site EXCEPT! for the POST that is to set the sprinklers on. When I use the POST it complains their is a non-JSON problem with the data despite the token, IP address, device id all work fine with other API calls and so that means see **Problem 2**.



I was able to play with the API by installing curl onto my widoze 10 laptop and then GETing and POSTing to my raspingdoodleburry pi home server running homeassistant under hypriot/docker.



Why all the bother? I will likely write a Kotlin app, for my old A500, with n buttons and POST calls to sprinkler zones to the ESP Home device via HA since HA has been set up with default sprinkler times (so you just turn the sprinkler on).



I can go to a fallback and send MQTT messages if I must, but at the moment the preference is to try to use the API. Generating a POST message in Kotlin is straight forward. The fun bit might be reading back states to make sure the sprinklers are up (so ghosting or not the buttons) and changing button colour or toggling the button on Android device by following the switch state, so as to provide an indication of ACK from device.
