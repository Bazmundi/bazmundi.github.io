---
title: "Scammed?!"
pubDate: 2026-01-02 05:31:42
---
Yep, got me a dud ESP32 C3 "supermini" from a [vendor on Aliexpress](https://snvi.aliexpress.com/store/1104120686).



Under the microscope it wasn't even apparent it was an ESP32 soldered onto the board. The numbering was well smudged, compared with another 5 superminis I bought from another vendor.



Golly gosh, when was the last time I gave out a CRAPPER award?


[![](./freevector-kid-on-potty.jpg)](./freevector-kid-on-potty.jpg)



So, my hacking of the pick-n-plaz SMT feeder is on hold while I order from a reputable vendor.



Well, not really as I have 5 other ESP32 C3 supermini from a legit [vendor on Aliexpress](https://www.aliexpress.com/store/1103994252?spm=a2g0o.detail.0.0.37abRpotRpotmB&sortType=bestmatch_sort).



They are quirky though as you need set:



```
build_flags = 
    -D ARDUINO_USB_CDC_ON_BOOT=1
    -D ARDUINO_USB_MODE=1
```



Which is straight forward on Arduino running on windoze. But I can't seem to get it working on platformIO on linux.



I am going to try on arduino on linux so I'll let you know how that goes.



So, at the moment it looks like Arduino on windoze, which is my least favourite dev env.



There is also a funky thing you need do to get them into programming mode, being:



Follow these steps:



1. Hold down the **BOOT**button.
2. Press and release the **RESET**button (while still holding **BOOT**).
3. Then release the **BOOT** button.
