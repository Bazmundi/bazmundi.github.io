---
title: "Voila! I can see!"
pubDate: 2023-11-01 10:56:59
---
![](./20231101_2116035240428033122762256.jpg)



So, above is the voila! moment. I tried setting up with and old portable DVD player, which as RCA inputs. Driven, I thought, from the VGA output on the side of the Acer Aspire ONE, via an RCA/VGA cable.



Didn't seem to be getting a signal out.



I thought I would then splurge on a cheap 7" OLED display, with both VGA and HDMI inputs - I will be using the VGA.



So, the display turns up with a USB cable but needs 12volts! So, don't you know, you can get USB 5Volt to 12Volt converter cables?! One comes with the monitor. Phew!



Yes, you can ask [ChapGPT to explain how to pump video out to your VGA port](https://chat.openai.com/share/b82d9571-538c-4abe-be29-35bd6ee34843). Although, I went with:



```
xrandr --output VGA-1 --auto --left-of LVDS1
```


![](./20231101_2118194013247182355842269.jpg)



Obviously, VisualPlace still has a place on the laptop screen. The fun problem being with the left USB port powering the side screen, the mouse and the USB microsope burn the other two USB ports on the right. So, no board up in VisualPlace as that's on a USB drive. So, I guess I need add a USB hub'll fix that.


![](./20231101_2116274584831988730167113.jpg)



I am thinking I'll put the display on an arm and make an adaptor to fit both of my manual PnP machines. My poor old eyes will need the thing up close.



Oh! Oh! Fun fact. Groaned a little. When I connected the VGA up, I got a start, since the video was flipped horizontally. The first though that went through me mind was, oh well. No biggy, as I am just using it as a targeting cam for the pick'n'place head. But a little poking around AND, of course, there is a menu item for rotating the screen.



A shout out to [MakerSpace Adelaide](https://makerspaceadelaide.org/) for use of their larger format 3D printers, or I would not have those pesky longer black trays.


![](./wp-16988377254532975946318005507135.jpg)



Now really, if you think about it, I did not need to use the 1.6mm plate steel. That was to allow for magnetic trays. But, the paramatised SMT tray system I found, writen in OpenSCAD, can adjust all parameters. So, making "tall" SMT trays is in work - that can reach the PnP head. That'll give multiple options for setting up. Remember the SMT trays? The white thangs bottom left below?


[![](./wp-16842431591124892342326585092985.jpg)](./wp-16842431591124892342326585092985.jpg)
