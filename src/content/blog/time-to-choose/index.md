---
title: "Time to choose"
pubDate: 2017-11-04 22:02:38
categories:
  - agent
---
Having played with [Profeta](https://github.com/corradosantoro/profeta), [eJason](https://github.com/avalor/eJason) and now [Astor](http://astralanguage.com/wordpress/) I think the time has come to settle on one.
eJason is a great idea, especially as it is built on erlang, but it is knobbled as it is a partial implementation.  It has .send so can talk between agents running in the vm but does not to distributed agents.  You don't have sensors and actuators.  All that could be added but there isn't enough design info and pulling apart the codes would be fun but a major project in itself.
Astor is a great evolution of AgentSpeak, especially as it tries to readily incorporate the imperative side.  That is, however, already tackled in Profeta.   Astor is build with Java so has that in its favour, if you were a Java clone.
So, Profeta seems the BDI tool for me.  But it doesn't do distributed agents.  That is, I suspect, where [SPADE](https://github.com/javipalanca/SPADE) comes in.  However, some work involved.  Profeta assumes one environment so the PROFETA class is a singleton.   To run in the SPADE environment that design assumption may need be broken.  Also, the PROFETA class has its own execution loop, it may want a single step to be driven by a SPADE tick event.
Not much work but now having gotten over the distraction of the options I can focus.
