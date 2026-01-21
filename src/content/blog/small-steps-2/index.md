---
title: "Small steps"
pubDate: 2016-12-24 07:32:25
---
Going from hints provided, I added 1.2kohm pull-up resisters to 3.3v on a breadboard shield that currently sits between the Wemos D1 R2 and what appears to be a clone of the Seeeduino Relay Shield V2.
The pullups need to go on D3 and D4 (GPIO0 and GPIO2) of the Wemos board.
As expected on power up the two relays on those boards, on D3 and D4 (GPIO0 and GPIO2), will be have the NORMALLY OPEN contacts driven closed so on initialisation you will need to ensure all four GPIO are forced LOW to drive the relays to OPEN.
To ensure this happens, you will need to force all four GPIO to OUTPUT mode and then set them LOW.
The two inner led  for D3 and D4 (GPIO0 and GPIO2) on the relay board lit on power-up as expected.  One (GPIO0 or D3) flickers on power-up of board likely as it is party to the startup mode of the board.  Settles on after flickering off then on as part of the start-up.  Indexing as per previous blog rant ([2,3,4,5](https://organicmonkeymotion.wordpress.com/2016/06/29/differences-between-wemos-and-uno-pin-numbering/)).
I can vouch for ESPStudio connecting to the Wemos with the two pull-ups in place.  As I have been able to run short snippets to flip state of relays.
May be best to flash with board unattached for moment.
Now given the circuit design of the D1 mini relay shield and the seeeduino (or clone) are similar, hopefully we are safe to continue.
 
