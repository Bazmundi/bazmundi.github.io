---
title: "It never rains ..."
pubDate: 2017-04-22 01:43:49
---
... and I have just got back to my web-based sprinkler to find, with writing papers for conferences and work deadlines, my google api tokens were dodgy.   The reasons are [clearly explained](https://developers.google.com/identity/protocols/OAuth2#expiration) in the api documents.
So I deleted the credentials and created a new set.  All working fine again.
 
I can get the json response from the calendar on the debug window.
I put a json function in to turn it into a jsp object.  The output should be stringified and displayed in the debug panel but nothing appears.
I have two separate flows, one for start of the event and one for the end.  If I put a json function on the start, neither of the start or end events are displayed.
What's worse, taking out the json function and going back to a straight through flow also no longer works.
Not getting the token expiration warning so it isn't that problem anymore.
To get it going again, with the json function included, I needed to stop and then restart the node-red server.
