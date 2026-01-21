---
title: "PEP Project kick off"
pubDate: 2017-08-01 02:29:11
---
So, I downloaded and installed and then run Arduino IDE 1.8.3.
I included the ESP8266 core.
I grabbed the blink example for the ESP8266 and bombed the WEMOS D1 R2.
We are blinking.
I then disconnected power and installed the [ITD 2.8 inch touch screen shield](https://www.itead.cc/wiki/2.8_TFT_LCD_Touch_Shield) (V1 I suspect).
I added power and led blinked PLUS I have back lighting on the LCD.
So far so good.
Next is grab and install libraries for the LCD to see what needs to be done on the WEMOS to port them.
Looks like some work to set up for the ESP8266.  Should be fun.
Errr ... no.
I should have looked at this sooner as the ESP8266 does not have enough GPIO.  When you look more closely the UNO compatibility is met by sending the same signal to a couple of the arduino pins but for the most part you cannot run the TFT board on the WEMOS after all.
So,  I dusted off an old MEGA1280 to play with the TFT library.  No biggy, a little messy but might then look at simply adding a ESP-01 module to provide the MQTT client over the serial buss from the MEGA.  Once I get the hang of this I might as well order a couple to three mega2560+3.2 inch TFT from Aliexpress.
I can then set them around the house and front/back yards to control various things - for when I don't have my phone on me.
Mind you, I also had to back date to Arduino 1.0.5 to program the MEGA1280.  I keep it around as it has been used to play with avrFORTH and [OCCAM (except Plumbing doesn't appear to work on Windoze 10 grrrrr)](http://concurrency.cc/downloads/)
