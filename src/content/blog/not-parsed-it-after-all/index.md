---
title: "Not parsed it after all"
pubDate: 2018-10-24 11:42:44
categories:
  - javascript
  - opensprinklette
---
Play on words.
Now I have a reliable OPiZ server and a drawer full of quad and single EPS8266 relay setups I am moving full steam on opensprinklette again. That and I have burnt out writing papers for journals.
I finished the parser for the opensprinklette using [pegjs](https://pegjs.org/online).
As mentioned in much older posts the idea is to set sprinkler zones by adding the zone call-outs in the title for a google calendar event. When the event fires, it pings the node-red thingywhatzit and packages MQTT topics to fire relays on distributed IOT boards.
I settled on calling the quad relay boards groups rather than sectors. I am adding call-outs to single relay boards and calling them units. So, the call-outs would look something like this test string of call-outs:
`group1=1;unit=9; unit = 2; group 3 = 4; unit 3;unit1; group2=[1,2]; group 3 = [3]; group4=[];group 1=[1,2,3,4]; group 2 = all` 
Note something important. The call-outs only turn the sprinklers on. The duration of the calendar event sets the time the sprinklers are on. Durations have a watchdog of 1hr 5min just in case server connection is broken. If you want more than 1hr watering, set two consecutive calendar events.
Don't sweat it as there will be MQTT topics to turn on/off individual relays, groups/units, global (all groups/units). This parser is only for interpreting calendar events. I am in work fiddling with google assistant as well so calling out to google will turn sprinklers on/off outside of calendar events.
I have allowed units 0-9 and groups 1-4 (that's 4 time quad relay on Uno shield). Actual zones per group is therefore 1-4. If'n you want more groups or units you hack into code and change numbers. The parser would need a little more work if you opted for multiple digits in your numbers. You can, of course, only have 4 relays on a quad relay board ;)
I used =;, since they don't need shift.
I added a lazy unit definition. Just in case you forget the = when setting a unit relay on. That is, either of unit=x or unitx is legal.
A missing = will be an error in a group call.
Originally, if you wanted more than one relay fired on a quad board you would use groupx=y for each rely. You can still do that but I added the groupx=[a,b,c,d] option as well. That is you can list as many of the four relays as you like. A quirkly, I didn't fuss with limiting the number of entries in the group array. As long as entries are between 1..4 inclusive then you simply pump out as many call-outs in the list.
Yes the you can either use groupx=y or groupx=[y] for single relay activations - smooth.
The parser generator handled groupx=[] nicely. An empty group array in the input results in no output but also no exception. It is effectively ignored.
Oh? You want what? Okay. It was simple enough to add groupx=all.
As per previous ancient posts, there will be a conversion of group or unit id to a chipid on the ESP8266 boards.
Since the calendar event will turn relays on, it hardly matters if you make multiple calls to the same relay. All call-outs go through in milliseconds, there is pulsing of relay and therefore no pulsing of waterline.
Any errors in the call-out line at all will abort and a debug message will be generated. Best that gets to node-red debug console, emailed to you so you get a prompt, or if you have an old android phone, as I have, use an SMS server to ping your phone. Most all of that is vanilla node-red.
