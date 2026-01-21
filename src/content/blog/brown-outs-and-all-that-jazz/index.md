---
title: "Brown outs and all that jazz"
pubDate: 2019-12-28 21:49:58
---
So, now having a DSO on the bench, I was looking forward to solving the problem of the brownouts on the openspriklette prototype boards.



I saw the brownouts on the single relay version. I had a sneaking suspicion I might not see the problem on a quad relay version. The reason is simple. The single relay version uses the 24VAC to 5VDC circuit but the Wemos D1 mini does not have power conditioning aboard as sophisticated as the Wemos D1 R2.



The Wemos D1 mini does have an ME6211 regulator to down convert 5VDC to 3.3VDC. The Wemos D1 mini does not have an 9VDC-24VDC input option, which drives the need for more sophistication in the power input stage. That means the Wemos D1 mini is reliant on the power conditioning provided by the off-board power supply.



So, I assembled a quad board. It has the D24V3F9 9VDC out by Pololu. Older tech, but that's what you get from Australian stores. So, fun story, that quad board works fine. I even attached two solenoids and cycled them on/off simultaneously. No brownouts.



Fun fact though. I had not tied the shutdown to VIN on either design. The specs warn if you don't you could get strange behaviour. So, I still need retest the single relay board with shutdown tied to VIN. The problem, I did rather hack at it with some component swaps. I did get the bridge pins around the wrong way. There was smoke. No matter, I had three boards made - OSHpark minimum quantity. So, I will build another board and re-verify the behaviour without the shutdown tied to VIN. I will then tie the shutdown to VIN to see if that helps.



Oh! The DSO. Didn't need it for the quad relay board testing. Will need it once I build up a single relay board.
