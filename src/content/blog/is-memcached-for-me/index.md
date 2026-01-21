---
title: "Is Memcached for me?"
pubDate: 2014-04-26 08:24:36
---
I found a windows version of [memcached](http://blog.elijaa.org/index.php?post/2010/10/15/Memcached-for-Windows&similar "Already done, that's nice!") and also a [python library that talks to memcached](http://www.tummy.com/software/python-memcached/ "That gets us some of the way there.").
So, I suspect I can get memcached going on the beagle[board|bone], and of course the other two linux boxes on the network.
But I might need to see how to get it going on my Android devices as a daemon so that I can use it with S4A python.
This will need some thinking as daemons are not really something easily built to run on Android (apparently) so likely needs an Android service (which no one seems to have written yet).  Most likely too much of a problem as a web search has found naught, not a sausage, no even close.  There are Java clients that might port but still need daemon/service running.
Likely needs some other system to span everything.   Might get away with an RPC call from the S4A devices to a server but that defeats the purpose of a decentralized cache.
