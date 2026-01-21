---
title: "Almost there"
pubDate: 2016-12-17 07:58:45
categories:
  - esp8266
  - opensprinklette
  - wifi
---
I got a prototype shield today to sit between my WEMOS D1 R2 and the quad relay board to work on my OpenSprinklette design.  I will get a PCB made once I debug the design.  It will need a 24VAC to 5VDC on it to power the WEMOS and the relay board.  The 24VAC will come from the wall plug from the old sprinkler system.
Not to mention a couple of pesky pullup resistors and an input for flow meters, though that will take some thought, and of cause ports.  So the flow meters might sit on a WEMOS mini as an afterthought.  Still brainstorming that aspect.
I am still setting up one of my ODROID-C1 to be the mqtt and red-node server.
I will buzz out the system with my PC install of red-node in any event - for the moment at least.
I decided I will add a dip switch to allow for 15 modules.  I will keep one for a broadcast so all on/off.  Most people can get by with 1 or two modules in any event.  So yes, module ID will be 1..15.  Software will sort the zone to module story - of course.
The use of google calendar will mean using NTP protocol isn't as important but it might serve as a network alive function.  I will need think about response to network down.  All relays open circuit is good general response.
Still, I think we need a watchdog to catch other issues, like the google calendar connection down, so maybe a timer that shuts the zone off after 45min and then calendar events can be set at 1/2 hour increments.  You just set two 30min back to back to get an hour.
I am also playing with options for zones.  The broadcast to all zone can be the calendar entry without title.  Otherwise, a comma delimited set of zone numbers in the title of the calendar entry can be used to set individual zones on/off.
The various weather gadgets are great for prediction but I will need look at moisture and rain sensors.  I found you can get shields for the D1 mini that are lipo battery chargers so I am thinking of a set up with solar power for on house and gazebo roofs for reporting rain and then same in garden for moisture.
Though, the moisture ones would need to be dog proof.  Hmmm.  Bury them, but would the wifi reach the surface?
