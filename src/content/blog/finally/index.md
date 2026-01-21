---
title: "Finally!"
pubDate: 2015-06-08 00:37:08
---
So, sorted the BlackWidow and likely the YellowJacket connectivity. The socket approach seems to be the better option, and that is TCP based, so porting of mqtt code might still be possible - although the application is simple enough so a Python adaptor on the host between the boards and the mqtt server would do just as well.
Now, the other side is that I opted for moving from [emqttd](https://github.com/emqtt/emqttd) to [RabbitMQ](https://www.rabbitmq.com/) as the mqtt broker.  This is due to the fact that there is likely a way to get RabbitMQ talking to [Spade](https://github.com/javipalanca/spade) agents via [XMPP](http://tonyg.github.io/rabbitmq-xmpp/) (with some work).  This might be a way of integrating [Profeta](https://github.com/corradosantoro/profeta) agents into the picture without deep integration into Spade that I have been currently investigating.
Not to mention likely being able to use the same inter-agent communication for [eJason](https://github.com/avalor/eJason) base experiments.
Essentially using mqtt as a '*blackboard*'.
