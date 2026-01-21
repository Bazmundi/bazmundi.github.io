---
title: "ESP32-(K)NOW how?"
pubDate: 2022-12-12 10:32:10
---
![](./doh.png)



Gotta luv the internet. So, some people are telling you to use STA for the controller, and a `WiFi.disconnect()` afterwards. [Others both the master and slave](https://www.instructables.com/ESP32-With-ESP-Now-Protocol/) use `STA` but neither need a `WiFi.disable()`.



The venerable [Circuit Cellar](https://circuitcellar.com/research-design-hub/design-solutions/using-esp-now-protocol-part-1/) is telling you set up the "slave" as an `AP` as well as use `WiFi.disable()` with the `STA` for the "master". Essentially, the opposite of what I muddled into myself. Not convinced.



So, it just seems to "depend" upon whom you get to first on the internet, and given it's hard to get an authoritative source since so many are just also regurgitating crap from other web pages.



DOH! And double FRACK!



Now I have found that the "pedal" (aka "controller" aka "master") as `WIFI_AP_STA` with `WiFi.disconnect()`, and "slave" aka "peer" as `STA`, mitt no `disonnect()`, can either behave for quite a time (probably dependant upon Elon the King Twit's twit count on the day), before then failing utterly to send a message successfully.



Noting the variations in how people are trying the ESP-NOW setup, all I can do is try them all, to see if at least one provides a higher QOS.



I got rid of the `AP` and simply with `STA` on both devices. I assumed, since ESP-NOW was talking protocols, it may be simply using the WiFi as a "carrier". Since `STA` both transmit and receive, I am assuming that we are using something low level? I did eventually find an [OSI stack picture equivalent](https://github.com/espressif/esp-now#esp-now), vs ESP-NOW, in my Net trawling.



Also wik, if you do understand `WiFi.disable()`, it does disconnect from the network BUT [leaves the wifi widgetry up](https://docs.particle.io/reference/device-os/api/wifi/disconnect/)! Didn't seem to matter, however, at least on the small number of pedal presses I did to test each option.



The table below shows some experiments with different WiFi setups.




| "Master" | "Slave" | Works |
| --- | --- | --- |
| WiFi.mode(WIFI\_STA); | WiFi.mode(WIFI\_STA); | YES |
| WiFi.mode(WIFI\_STA);  WiFi.disconnet(); | WiFi.mode(WIFI\_STA); | YES |
| WiFi.mode(WIFI\_STA);  WiFi.disconnet(); | WiFi.mode(WIFI\_STA);  WiFi.disconnet(); | YES (pick this one) |
| WiFi.mode(WIFI\_STA); | WiFi.mode(WIFI\_STA);  WiFi.disconnet(); | YES |
| WiFi.mode(WIFI\_AP); | WiFi.mode(WIFI\_STA); | NOPE! |
| WiFi.mode(WIFI\_AP\_STA); WiFi.disconnet(); | WiFi.mode(WIFI\_STA); | YES (BUT) |

Experiments




So, I had been using `AP` and having fun with that, so assumed that was what was needed. My fault, I do jump the gun.



The intermittent behaviour, that I was seeing when using `WIFI_AP_STA` may simply be the `AP` stealing processing from the `STA`? When using the straight `STA` there is no lag (really) on connection between the two units. Once the "Pump connected!" message comes up, it stays up (except for, as it turns out, annoying times it extinguishes again). You can turn the "pump" off then on and everything is happy, without any fancy reconnect code. All of this, since it is simply a protocol over the WiFi channel, with the mac addresses being used to target devices.



However, I was disappointed to find that even with using straight `STA`, and with `WiFi.disconnect()`, the messages would eventually stop going through. Reboot of the "pedal" seemed to fix that. Seems rare and intermittent, so I may still need to understand the problem, to see if there is a means for the devices to sort themselves out.


[![](./wait-just-one-fracking-minute-small.png)](./wait-just-one-fracking-minute-small.png)



[Turns out you can set up with `AP`](https://github.com/yoursunny/WifiEspNow/blob/main/examples/EspNowUnicast/EspNowUnicast.ino), but it needs a `WiFi.disconnect()`. Though not buried in the ESP-NOW site. The story is even funkier, because:



```
  WiFi.persistent(false);
  WiFi.mode(WIFI_AP);
  WiFi.disconnect();
  WiFi.softAP("ESPNOW", nullptr, 3);
  WiFi.softAPdisconnect(false);
```



You guessed it, the `..., 3);` is channel 3.



And that's on both the "initiator" and the "responder".



But wait. Let me look, …


[![](./crazy-monkey.jpg)](./crazy-monkey.jpg)



Yep, nope. Using that code on both "initiator" and "responder" sees no connection between the two. That may be because I have only registered the pump as a peer to the pedal, and not vice versa.



Gimme a moment, …


[![](./me-on-the-net.png)](./me-on-the-net.png)



```
tap, tap, tappity tap, tap , ... , DOH!
```


[![](./crazy-monkey.jpg)](./crazy-monkey.jpg)

Nope, not a sausage, or should I say banana?




However, that may work with the (so-called) "yoursunny" [WiFiEspNOW](https://github.com/yoursunny/WifiEspNow) library. I won't even dignify the Circuit Cellar offering with an experiment.



Since it is more intuitive if you understand what chunks of the OSI model ESP-NOW replaces, rather than discussion around not needing the Wi-Fi, I'll stick with the following on both devices:



```
WiFi.mode(WIFI_STA); 
WiFi.disconnet();
```
