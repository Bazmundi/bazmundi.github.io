---
title: "EMI oy, oy, oy vey"
pubDate: 2022-12-18 23:03:51
categories:
  - esp32
  - manual-pnp
  - pnp
  - wireless-manual-pnp-pump
---
The idea was, actually, to run the ESP32 pair (pedal and pump) off battery - for the portable aspect.



The 12VDC power to the vacuum pump and to the pneumatic solenoid would be separated BECAUSE that would go through the NO circuits of two relays on the relay shield.



Couldn't be simpler.



Even if powering the pump by USB or power jack, there is no denying that there is plenty of air gap between the power supplies of the ESP 32 based WEMOS D2 R32 and the pump and solenoid.



And yet, the pump device crashes the moment the first relay, the one for the pump, comes on. You can tell, in the video, the LED for the associated relay blinks on then off, ever so quickly.



FRACK, it just shouldn't be so.



Except, it may be EMI? It can't be power spikes, due to the back EMF of the motor, since the power circuits are separate.



I will have to get out me CRO.


[![](./cawing-crow.jpg)](./cawing-crow.jpg)

CAW CAW





https://www.youtube.com/watch?v=C2SG\_jdjkxk




Turns out, the problem is the DIY CAW, so sorry, DIY MORE battery shield FRAGGING whenever the first relay is being turned on. No, really it is, I just took the battery shield out of the loop, and powered the pump device by USB and the issue disappeared.




https://www.youtube.com/watch?v=9Da\_Zj7czM0




DOH!, I worked out the issue. Was simply a short between the battery shield and the relay shield.




https://www.youtube.com/watch?v=T4fCZlBrZjI




Code for [pump](https://github.com/Bazmundi/openpump2) and [pedal](https://github.com/Bazmundi/openpedal2) is now posted.


[![](./labshot1.png)](./labshot1.png)
