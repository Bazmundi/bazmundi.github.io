---
title: "Parse the salt please, or at least the sector declarations"
pubDate: 2017-08-10 03:23:10
---
So, I spent some time on how to parse zone commands for the sprinklers in the form "sector1=1,sector3=4,sector2=0,sector3=1", from the google calendar event titles, into mqtt commands for the WeMOS nodes.
Regex have never been a favourite of mine, being a clunky solution from hackers for hackers.
While it is a small problem to solve I still wanted to do something smart so I looked around for a parser generator for javascript.
I came across pegjs.
Brilliant!
Though, as usual, bugger all help.
However, I started with the JSON example and parred it back to get a solution that returns an array of zones (sector/zone) to act as a fragment of an MQTT topic.
