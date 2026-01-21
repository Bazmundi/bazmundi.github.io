---
title: "Yet another bonus!"
pubDate: 2016-10-12 11:57:36
categories:
  - raspberry-pirate
---
Mate at work, the one that handed me his Odroid C1 when he decided he would dump the small PC approach to media replay for a service provider, mentioned he was bringing in his Raspberry Pirate for me.
Now this is a bonus as I was using one of my ODROID W as a MQTT and node-red host.  I would much rather use the ODROID W for other things, so I will rebuild my thingime-box clone with a Raspberry Pirate.
I don't recall what model he said it was but I recall a while back he was talking B+?  Don't care in any event as it can sit humming out of sight.
I had actually used an [erlang based MQTT broker](https://github.com/emqtt/emqttd), if that doesn't offend - rather than Mosquitto.   I have also been looking at moving to RabbitMQ as it has a hook into XMPP that might allow talking between [SPADE2](https://github.com/javipalanca/spade) (python) agents and Erlang/Elixir AMQP clients.
To facilitate these transactions I note that there is an interesting hook into RabbitMQ is a (so-called) [script-exchange](https://github.com/tonyg/script-exchange).  This might be the hook into the problem of converting to/from FIPA ACL.  Obviously needs some work but will be  a fun way to sort out an understanding of XMPP.
 
