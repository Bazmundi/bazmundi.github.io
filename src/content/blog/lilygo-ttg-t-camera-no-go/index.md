---
title: "LilyGO TTG T-Camera no-go"
pubDate: 2021-03-06 23:53:32
---
So, unhappy to report no go as yet for t-cameras v1.6.2 I bought.



I am trying to set them up to use as handsfree camera doorbells, as they have a PIR sensor.



I opted, though I suspect that is some of the reason for my pain, to use ESPHome since there are already people who have configurations for these boards.



Two problems.



The first is what appears to be a bug in ESPHome. It appears hit and miss as to whether your t-camera will start if you include camera code. Not useful if you have a camera and therefore why bother with a camera. The hit and miss aspect shows up as I have two t-camera boards. One starts and one does not start, if the camera code is included. The one that starts is not perfect. To start it, for some reason, occasionally you have to keep pressing the hard reset n times (no rhyme or reason how many times) to get the flaky thing to start. Irritatingly, even when I thought it was fine once started, the board that I finally got running has now decided not to talk to the OLED. With verbose logging on, it appears to connect to the OLED but just but simply does not write to it.



I seem to be able to use one device then, as long as I don't care about using the camera. The second device seems to work as long as I don't care about using the OLED.



https://github.com/esphome/issues/issues/1890



Now, deploying the "working" device, ignoring the absent OLED, seemed as simple as plugging in a 18650 single battery shield, very often advertised for use with ESP32. The problem, with the t-camera running off a powered USB hub all is good (mostly). But the same t-camera refuses to start, or at least fails to connect to wifi, when powered by the 18650 shield. I checked an power appears at the pins expected at the voltages expected. So this is either an amperage thing or a noise thing. I have a DSO so I will have a poke at that, but I do know there are various versions of the 18650 shields around, so I am suspicious I have an early version that might not drive a ESP32 board.



https://github.com/lewisxhe/esp32-camera-series/issues/25
