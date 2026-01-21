---
title: "I must be imagining things?"
pubDate: 2021-03-08 11:03:59
---
So, I reported to the author of one of the ESP32 CAM "solutions" a problem I was seeing with long lags in display of camera stream using the code provided.



The author's response was Monty Pythonesque. "It's not dead, its sleeping".



That is, the author claims not to have seen the problem, so it isn't a real problem. Albeit I did note someone else had reported the problem.



I did assume the problem was the code provided was using a single task to service all clients, but I did misread the code and now understand a little more about RTOS and ESP32. The code, in fact, is running a task per server client - scary then.



There is thus a comment from the code author that there are mystery batches of clone cameras out there and that was the problem ... not the code.



It's as likely not tested fully (apart from apparently waving the camera in front of us on Youtube for 3 seconds).



Since we appear to be operating in pop culture references, you call that video evidence, THIS is video evidence. So first of two videos. Note my hand did appear in top left of the four stream client windows about 15 Mississippies into the count (I am using Mississippi as a cultural appropriation, sorry, use Warragamba or any other similar 4 syllable word). I missed it in the first video, and went for covering the camera BUT that had not shown up even after 18 <insert your 4 syllable word here>. Second video really says a lot about the lag.




https://www.youtube.com/playlist?list=PLx-J9JNloBJ8Ou9O3gH\_XHabYj4h-GNF0




So further experiments seem to suggest maybe distance (and hence -dB) might be part of the problem with allframes compiled and even trying to be gentle using VGA. I set up with t-camera more or less on top of wifi router AND disconnected my dock, using only the laptop screen, with the laptop about 2m from the wifi router. Lag halved (10-11 seconds behind instead of 20 and greater) and the display artefacts reduced noticeably.



I ended up dropping the allframes version (which spooled all clients to "ensure" that no client saw dropped frames ;) ). I did also capture the [crashing of the allframes](https://pastebin.com/kisHnyzF), though the code seems resilient, since it reboots and you can refresh the browsers to restart. The crash seems to be reproducible by creating n clients and randomly closing one.



I also tried what I guess is better called the notallframes version, again using VGA, seems fine on my setup with a smidgen of lag.



Both the allframes and nonallframes versions fail to add more than 6 clients, despite the max clients apparent set to 10? I will have to scroll through the code to double check that.



There was some passing comment about use of the PSRAM being the problem (as opposed to a slow clone camera). Whether it makes sense to compile with PSRAM=false is a question. Whether you could provide sufficient buffering space with the on board RAM being the problem.



Having sorted the ESPHome version, by finding that pesky pin pullup trick, I had to note a conditional compile in the allframes relating to one specific board type requiring pullups, so I added the pullup lines for the t-camera as well. That did not seem to help nor hurt. So, happy to have an occasional poke at this over time, but not an imperative. It is interesting from the point of view of using tasks and especially the streaming aspect. Not sure this should not be ported to [lua-rtos](https://whitecatboard.org/software/lua-rtos/).
