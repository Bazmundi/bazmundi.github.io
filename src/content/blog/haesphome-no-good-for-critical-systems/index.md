---
title: "HA+ESPHome no good for critical systems"
pubDate: 2020-05-02 06:35:23
---
Ah, actually, I think I have to go away from using ESPHome and homeassistant combination for OpenSprinklette in any event.



No longer then interested chasing down a bug I was chasing in the [HA REST API](https://developers.home-assistant.io/docs/external_api_rest/) and using CURL to turn sprinklers on with a POST to switch services. I was planning to use that to be able to write a Kotlin app for an old Android tablet, since 1) I can't get HA to open on the old version of Chrome on the tablet and 2) the HA app for Android won't install on my old Android tablet. The bug I found sits cleanly in the REST API of HA since I am only using the examples and the POST does not work for switches or at least switches implemented using ESPHome.



The problem leading me to drop the bug in the REST API is not associated with the REST API but is because my raspingdoodleburry pi has crashed.  But, I found the ESPHome based sprinkler system has 3 of 4 relays on with the Pi crashed and not online. Even worse, as bringing the Pi and therefore HA back online does not automatically reset ESPHome device. Sure, you could set up something on HA start/restart but that does nothing for the span of time the Pi/HA is down and relays on ESPHome device on. Way too fiddly to sort all likely mishap cases. Especially, if the actual cause of the Pi/HA crash and the breakdown of HA/ESPHome communication causing the relays to come on, is unknown. So, even if the Pi/HA came back up by itself (some time after it crashed), there’d still likely be $K dollar water bills in the mail.



Having had a $3k water bill some time back, due to sprinkler system leak, I gauge it makes **no sense keeping this combination of HA and ESPHome for a “mission critical” application**, since I am not sure when the p p p p p Pi went d d d d down.



The evidence of a HA/ESPHome interaction problem is the relays in this HA/ESPHome version are set up in automations, to come on and turn off in sequence, with a gap in time between off and on, to avoid having to deal with sharing the water pressure. This works fine with HA up and running. So, having 3 of 4 on will be an artefact of Pi+HA crashing and likely some interaction between HA and ESPHome. That is, there are no automations in HA that would set 3 of 4 relays on at the same time and so no two relays should be on at the same based on the design of the automations. The automations have been running on a test rig and come on sunrise and sunset without a problem and the logs did, till the crash of Pi, reflect that expected behaviour.



That likely means the usual ping ponging between two user groups blaming the “other” software and, frankly, not my bag. I want to water my gardens and not solve a problem with use cases not being tested.



Not a problem, I have [previously hand written code](https://github.com/Bazmundi/opensprinklette) to run on the WEMOS UNO format board for the sprinkler system. That code is MQTT driven and was designed from scratch for a sprinkler system with ample safe guards. For example it wont turn on water for less than 5 mins, won’t accept more that a 15 minute request and will turn off a sprinkler after 20 minutes. It will allow a new time setting over top the old so if you want a hour of watering you just ping it with 4x15 minute requests every 15 minutes. I have a node-red setup that also will send an sms if a sprinkler node (either a 4x or 1x wemos setup) raises an LWT. I’ve even designed my own boards to support the 24VAC to WEMOS voltage conversion.



I also have a [peg](https://pegjs.org/) [based parser](https://organicmonkeymotion.wordpress.com/2018/11/11/pegaleg/) to all setting of sprinkler times, across multiple single and quad sprinklers, via titles of google calendar events. Though, I want to decouple from google and try the same over a local mechanism for both principled and practical reasons.



So, I am also looking at how to hook my parser code into other calendar widgets. I am still to look at HA calendar widgetry, if it exists, since automations are fine but the natural thing is to just want to use even just a weekly calendar and not a full year calendar, or so I imagine I think I want to believe. Although, then node-red calendar widgetry or HA calendar widgetry? It will depend upon ease of integration.



In the end, I actually suspected my hand coded sprinkler option was likely the better approach for exactly what the crashing doodle woodle pi and the interaction between HA and ESPHome has revealed. I would even suspect the ESPHome web site, and the HA one to, have caveats and warnings about not using either for mission critical applications. Especially, if its the emergent properties of the integrations that will get you and no one is really going to arbitrate that except for the end users.



Lucky I found this problem on the test bench.




**UPDATE**



I poked around a bit with this, the problem is a little more insidious.



I thought the server had crashed as I could not log in with MobaXTerm. In fact, I have my server with Ethernet wire connection to a wifi extender and it turned out that the wifi extender has been dropping connection with the ASDL router. A real pain since I bought a new wifi extender BECAUSE I had the same problem with the older wifi extender AND BECAUSE the "help" on the Net suggested there was problems with the older wifi extender.



So, I found that re-connecting the wifi extender to the ASDL router saw an interesting picture. The ESPHome device must have reconnected to the HA server since the switches on the HA HMI, representing the relays in the ESPHome device, had the same state as the device. 1, 2 and 4 on, 3 off.



Not a problem you say. Well, it is since the way the system is set up is that you turn the switch on at HA HMI, and then an automation runs and turns the switch off after 15 minutes.



On top of that, that behaviour was also required when driving the relays by sunrise/sunset since a delayed trigger to turn the switch on, on sunrise/sunset, was used and the trigger to turn the switch off after 15 mins was expected then to trigger on the switch being turned on. Worked a treat while connection between HA and ESPHome device stayed up.



The problem still remained that three relays on ESPHome device were on (1,2,4) and one was off (3). Three switches on HA HMI were on (1,2,4) and one was off (3). HA log reported all switches off. So, there was a disconnect between states internally to HA somewhere.



The automations for all four switches are all triggered on sunrise/sunset. They have delays that set the individual switches on 20 minutes apart. The second set of automations, triggered by individual switches going on, turns the triggered switch off after 15 mins. So, the system works:



* sunrise->all four switches triggered with delay x mins.
* 0 mins->switch 1 on trigger switch 1 off automation
* 15 mins->switch 1 off by switch 1 off automation
* 20 mins->switch 2 on trigger switch 2 off automation
* 35 mins->switch 2 off by switch 2 off automation
* 40 mins->switch 3 on trigger switch 3 off automation
* 55 mins->switch 3 off by switch 3 off automation
* 60 mins->switch 4 on trigger switch 3 off automation
* 75 mins->switch 4 off by switch 4 off automation



Nothing really then to account for why 3 of 4 relays on, why HMI reflected ESPHome device state and then why if relays are on in ESPHome device the associated switch on in HA did not result in a switch off after 15 mins. That is, I have had the ESPHome device powered up and 3 of 4 relays have been on for two days, where they should have off after 15 mins if triggered on by HA. If I manually switch the switches at HA HMI to off today, they are then off at device. I haven't rebooted device because I want to see if the states coherence is re-established. I assume that states will be coherent again if the automations run tonight and the relays behave properly again. Noting that that won't redeem the setup for use in a critical applications, since it would take too much energy to understand the interplay and the problem it is actually a state coherency problem in either or both the design of HA or ESPHome or both.



So, no real way to account for 3 off, for example, since all four switches run with exactly the same automation descriptions. You would expect all four on or all four off, not a mixture.
