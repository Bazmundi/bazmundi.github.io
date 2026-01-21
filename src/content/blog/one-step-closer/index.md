---
title: "One step closer"
pubDate: 2018-04-09 13:10:34
categories:
  - home-made-lidar
---
Here is the gimbal board blinking.
What it took was a bit of work to sort a [driver](https://learn.adafruit.com/usbtinyisp/drivers) for a [USBtinyISP programmer](https://core-electronics.com.au/usbtinyisp-arduino-bootloader-programmer.html).
Then some fidgeting to get the [programmer header](https://organicmonkeymotion.wordpress.com/2018/03/27/back-to-the-home-made-lidar/) to stay in place.
You can actually crash the programmer it turns out by shorting pins - if the header is not seated properly or it moves.
Otherwise, if everything is in place it takes literally a second to burn the bootloader onto the board.
I set the board up as an Uno in the IDE, opened up blink example and uploaded.
https://www.youtube.com/watch?v=-2yruk9qhbY
Next is to strip out the code from drive one of the 3 motor ports to get a motor rotating for the LIDAR.
