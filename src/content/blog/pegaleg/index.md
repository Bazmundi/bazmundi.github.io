---
title: "Pegaleg"
pubDate: 2018-11-11 09:51:23
---
So, one file I had fun getting off my laptop was the source for the parser for the google calendar event titles.
The titles, as discussed previously, would be a list of sprinkler group or unit callouts.
I managed to ssh onto the laptop from my desktop to lift anything I wanted before I trashed the laptop with a clean Debian install.
While waiting for the install, I opted to tart up the parser with some sanity.
The problem for the distributed opensprinklette design is that there is no editor per se to police the entries in the google calendar event title. So, if any unwanted text is in the title, the parser running on the node-red server will drop the lot. Harsh I know, but the distributed nature of this entails some trade-offs.
So, I did add some smarts to avoid sending repeated call-outs to a sprinkler. A burst of call-outs will go out once the event title is parsed. The ESP8266 gadgets don't mind if a single sprinkler is pummelled - it simply results in the time starting from the last received call-out - which won't be that many milliseconds behind the first.
Still, to opt for a defensive scheme meant testing for a call-out in the return from the scan of the line before adding it to the return. Simples tick!
So, even if the user pummels the title of the event with multiple call-outs to the same sprinkler, the parsed response will only contain a single call-out.
So something like this in the google calendar title:
`group1=1;group1=[1];group1=[2,2,2,4,4,4,4,1,1,1,3]`
will return the following in the node-red response (prior to fully concatenating into a MQTT topic):
`[
"group1/1",
"group1/2",
"group1/4",
"group1/3"
]`
