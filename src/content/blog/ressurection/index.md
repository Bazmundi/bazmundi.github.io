---
title: "Ressurection!"
pubDate: 2025-07-13 01:34:36
---
I decided to modify an old project to add on a small SBC controller to command the HMBGC (gimbal controller) board.




https://organicmonkeymotion.wordpress.com/2018/03/27/back-to-the-home-made-lidar/





https://organicmonkeymotion.wordpress.com/2018/04/09/one-step-closer/




The problem, it was dabbled with about 7 years ago!



I had sorted it out, originally, using my laptop and Arduino IDE. Now I use me MonstaPC etc. for embedded development with VSCode and platformio.



I got, therefore, stymied since I had to recall how to set up for the HMBGC board (which was always short of docco and now is only "out of stock" item all over the Net).



A little poking around and I determined the HMBGC was programmed as if a "Arduino Pro or Pro Mini". However, the board never showed up in my devices list. I managed to sort that out with the details at:



<https://community.platformio.org/t/cant-see-older-atmega328p-board/48063/2>



Ultimately, there are various suggestions of what the upload speed was but what got me platformio setup talking to the HMBGC was:



```
[env:pro16MHzatmega328]
platform = atmelavr
board = pro16MHzatmega328
framework = arduino
upload_speed = 115200
```
