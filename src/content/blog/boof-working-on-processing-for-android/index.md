---
title: "BOOF working on Processing for Android!"
pubDate: 2015-07-31 23:20:00
---
A little work and a little sweat and the help of Peter Abeles (the author of BOOFCV) and BOOFCV can compile in Processing for Android.
The fix is to break into the boofcv\_dependencies.jar and delete the xmlpull entry under: boofcv\_dependencies/org
The reason, the library is already being pulled in from somewhere else in the build and the build is not smart enough to ignore a replicated library and simply cracks up.
Simple fix.
Too early to know whether there will be any side effects - perhaps now in Java mode of the Processing IDE, since this fix appears to correct a problem in the Android mode.
In any event, we can move on with the experiments. I have quite a few android based toys with cameras after all.
[caption id="attachment\_1112" align="aligncenter" width="300"][![JXD S7800B](./jxd-s7800-1_02.jpg)](./jxd-s7800-1_02.jpg) JXD S7800B[/caption]
[![water proof phone](./water-proof-phone.jpg)](./water-proof-phone.jpg)
[![android webcam](./android-webcam.png)](./android-webcam.png)
[caption id="attachment\_1272" align="aligncenter" width="169"][![Cyclops!](./rover.jpeg)](./rover.jpeg) Cyclops![/caption]
[![Measy](./measy.png)](./measy.png)
