---
title: "Et Voila!"
pubDate: 2019-12-29 13:42:50
categories:
  - opensprinklette
---
So, I rebuilt [a brand new single relay opensprinklette board](https://organicmonkeymotion.wordpress.com/2019/12/28/brown-outs-and-all-that-jazz/). I did notice, as I stripped the original, that the end of the electrolytic was a tad "swollen", oh dear, oh well.



I had a new batch of 47V TVS, physically smaller than another batch I had previously bought. So, that means I don't need hack at the boards to fit them. I thought the original problem was that I had was using a lower voltage TVS than I should have been. Only marginally I thought. It didn't turn out that the slightly lower rated TVS was the problem, though hacking the board to fit the larger and thicker leaded TVS probably helped me fry that board. I likely jumpered lead to the wrong place or inverted something.



No matter. Turns out a clean build, with all the properly rated components, still sees the brownout after a few cycles.



Hmmmmmm.



So, I shorted the shutdown pin to the VIN as recommended.



I then set up a node-red test that turned the relay on/off with a 50% duty cycle with 5 seconds in each state. It has been running now for about an hour without failure. So the quirk is that the Pololu 5V down converter seems more sensitive than the 9V down converter.



I will still need to short the shutdown on the quad board to be sure. I am now ready for final versions of the two boards, with minor tweaks including additional terminal blocks to keep the wiring tidy.



I am in the process of playing with a Kotlin front end for Android to manage the home setup. That is really just a prototype as the home setup will start with a single quad unit. I will build HMI system up as I get a hang of Kotlin development.
