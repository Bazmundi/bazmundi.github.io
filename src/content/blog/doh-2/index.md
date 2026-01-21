---
title: "DOH!"
pubDate: 2014-11-02 11:23:27
categories:
  - altera-labs
  - cyclone-ii-experiments
---
[After](http://organicmonkeymotion.wordpress.com/2014/10/22/not-quite-right/ "Not quite right") ... [and](http://organicmonkeymotion.wordpress.com/2014/11/01/still-not-right/ "Still not right") ... turned out was a typo after all (and after checking for fifth time).
The problem with wearing glasses LOL.
The problem was I had:
-- SEG B : F1 = B' C D' + A' C' + B' C' D + A' B' ;

LEDSEG(1) <= (NOT SW(2) AND SW(1) AND NOT SW(0)) OR
(NOT SW(3) AND NOT SW(2)) OR
(NOT SW(2) AND NOT SW(1) AND SW (0)) OR
(NOT SW(3) AND NOT SW(2));

Instead of:
-- SEG B : F1 = B' C D' + A' C' + B' C' D + A' B' ;

LEDSEG(1) <= (NOT SW(2) AND SW(1) AND NOT SW(0)) OR
(NOT SW(3) AND NOT SW(1)) OR
(NOT SW(2) AND NOT SW(1) AND SW (0)) OR
(NOT SW(3) AND NOT SW(2));

So PART 1 of LAB 2 ready to write up.
