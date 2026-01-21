---
title: "Cyclone II-Exp.8"
pubDate: 2014-04-21 22:34:45
categories:
  - cyclone-ii-experiments
---
Or "10-key\_digital tube display".
This one we won't dwell on too much.
It introduces the **case** statement.
Essentially it reads the button press into a register and selects display 1 through 4 based on the key pressed and displays the number 1 through 4 on the display selected.
Curious, I tried swapping the display select and segment driving sections of code around - because the key select was set in one case statement but used in both.
Code still worked!
The reason is - again - this is hardware description not software so the relevant twists in thinking apply.
"always" literally means that and the two case statements can be thought of as working in parallel or concurrently.
... okay, so maybe we might change this up a little.
I am in the middle of studying for a Master's exam so bear with me.
What we might go for a 3-bit binary input to display 1 through 8 into all of the 7-segment displays.
I just have to behave and get some study done first.
 
