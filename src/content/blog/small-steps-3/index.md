---
title: "Small steps"
pubDate: 2017-08-07 05:54:29
---
I have roughed a node-red config node and it's visible counterpart.  I decided to call wemos nodes "sectors" - since the usual rort is to call a single channel on an irrigation controller, controlling a single solenoid, a zone.
I have set up for 4 sectors each using a WeMOS D1R2 with a quad relay shield.  That provides up to 16 zones (4 per WeMOS).
You need to mod the relay shield with a couple of pullup resisters.  This is to get around a design shortfall on the WeMOD D1R2.
I am using a protoshield in between the WeMOS and the relay shield to allow for fidgeting with design changes. I added a four position dip to set the zone id BUT I dropped that in favour of the config node concept.
That gives me back 4 pins for GPIO. The problem is the out and out lie that the WeMOS is a Uno form factor. The ESP8266 has to cheat by using the same GPIO pins across a couple of Arduino socket pins.
I will add the rain gauge input later.
The idea is an input line such as the following as the title of the google calendar event:
sector1=1,sector3=4,sector2=0,sector3=1
The line above shows you some of the input features I will aim for, being:

* You don't need to nominate all four sectors or even all four individual zones of a sector.
* You can order the sectors in any order.
* The zones per sector are number 0..4 with 0 being the global all on/off id for all 4 zones on the addressed sector.

I did think about using JSON as input but the problem is that if you have two tokens the same then the object construction takes the later value in the line for the key.  Oh well.
For this to work you attach two google calendar event sniffers, one to flag the start of an event and one to flag the end.  Both feed into the opensprinklette-configurator to decode the events into MQTT calls to the 4 WeMOS D1 R2.
Of note, the configurator maps between chipid() and sector# (and back again) so planning the sprinkling can be in people-talk (relatively speaking).  At least you don't have to remember which WeMOS chipid() was allocated to what sector.
Of course, there are quirks to do with the distributed system.  There will be a watchdog on the WeMOS to automatically turn off the water to a zone after 45min.  To plan out longer watering you will need back to back calendar events (shorter than 45min to avoid the watchdog).  If that is offensive please send money to help me pay the water bill of a runaway commercial setup ($3,000 in fact).
The other option I guess is send the duration to the WeMOS node and let it do the countdown.
I will play with a couple of timing approaches to see what is most robust - given you could have the ISP gateway drop out, the node-red crash, the emqttd crash, the OPiZ drop of the network.  Not to mention, google calendar hickups - I occasionally get a baulk around credentials lapsing that somehow comes good again.  Oh and of course, the WeMOS could also behave badly.
All in all needs a good bashing to help weed out nuisances.
