---
title: "Universal Instrument Host"
pubDate: 2021-02-10 11:41:47
---
So, I plan to weld an [ESP32 with built in battery](https://www.diymore.cc/collections/esp8266/products/diymore-wifi-bluetooth-esp32-18650-battery-development-board-module-ap-sta-ap-for-arduino-lua), an [e-link display](https://www.waveshare.com/2.66inch-e-paper-module.htm), into a Universal Instrument Host (UIH) for the following sensors (as a start):



* [PH](https://www.aliexpress.com/item/32797327021.html?spm=a2g0s.9042311.0.0.27424c4dedmJWY) (really a [conditioning board](https://www.diymore.cc/products/diymore-liquid-ph-value-detection-detect-sensor-module-monitoring-control-for-arduino-m?_pos=2&_sid=7698fd332&_ss=r) plus a [sensor](https://www.diymore.cc/products/aquarium-hydroponic-ph-controller-electrode-probe-bnc-connector-sensor-ph-meter?_pos=1&_sid=7698fd332&_ss=r)).
* [TDS](https://core-electronics.com.au/gravity-analog-tds-sensor-meter-for-arduino.html) (Total Dissolved Solids) indicates that how many milligrams of soluble solids dissolved in one litre of water.
* [Turbidity](https://core-electronics.com.au/gravity-analog-turbidity-sensor.html) (detect suspended particles in water by measuring the light transmittance and scattering rate).
* [Soil Moisture](https://core-electronics.com.au/gravity-analog-waterproof-capacitive-soil-moisture-sensor.html).



I think I'll have (at least) two touch inputs. Hold both down to wake the UIH up. Then I can use the two touch buttons as left/right to cycle through sensors.



PH meter will be a separate input, but the other three have same VCC, GND and ADC requirements. Though, the TDS and Turbidity sensors will have an intermediate box holding a conditioning circuit.



Using the e-ink makes sense from power saving but also since I want to hack at an e-ink display. Later, I rather like the idea of a form of "art" where you run a moving by clipping out a frame once every 5 mins say, and use it as a canvas and take a week or so to play the movie. Plenty of old movies to get hold of and black and white.



I did get a bad order from Aliexpress once, where they sent me [20 RFID tags and boards](https://components101.com/wireless/rc522-rfid-module) by mistake. I am thinking of building the reader board into the back of the GIH and use the tags around the yard to ID locations I am taking sensor readings to log to my home sever (running HA, node-red etc.).



I ordered the e-ink from waveshare, rather than by from local store, since locally there are too few options. Just needed a reasonable size display, no wifi, SD card, PI HAT etc.
