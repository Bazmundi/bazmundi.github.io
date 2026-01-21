---
title: "Belief Desire Intention"
pubDate: 2014-02-18 09:30:41
---
Now I did promise to focus on my Master's work - my last subject in fact before the Dissertation - but doodling helps clear the head.
I have mused a bit about Jason the Agent Speak language and dabble in that to master the [BDI](http://en.wikipedia.org/wiki/Belief%E2%80%93desire%E2%80%93intention_software_model "I desire more time, I intend to dabble more, I kid myself I believe") concept.
Now the porting of Spade2 to my Android devices stalled a bit because my tablet got flogged at work.  However, the basic examples were running so I was more or less to move onto the BDI agents in Spade2.  Quite apart from the manual site going down (grrrrr), the BDI approach left me a little cold.

The reason I like Jason is because of Orientedness.  A term I invented (I know because the spell checker is set to American and they make up new words whimsically it would seem and the spell checker balked so I first ... so there).

In any event, Orientedness.  Consider, UML.  First reaction is that it is Object Oriented. But that is misleading.  

Class diagrams are an expression of OO but are activity diagrams?  Are sequence diagrams?  Many of the diagrammatic styles actually are trying to express the things OO cannot (*though some of the lexicon of OO infects them*).

Consider event driven programming.  Is it OO?  No, Event driven paradigm certainly can be facilitated in OO languages but its Orientedness is something different to classes, methods, etc.  It is events (*yes insert inversion of control and/or dependency injection if you must*), and probably some temporal or state (or stateless) aspects.

Jason presents an Agent Oriented programming language where the Agent Orientedness is expressed in the syntax of the language.  Not to say you can't do agent "stuff" in Java (JADE, JACK, Cougar, etc.) but, I guess the way to explain it, is that the Agent Orientedness expressed in Java based technologies is obfuscated.  Much the same way OO obfuscates the functional design/model (*yes we want to argue for UML again but case tools don't sit on that many desks, I mean how many of the trillion and one opensource projects out there have a case model as part of a release ... no really don't, or you'll get my sequence diagrams and activity diagrams are the expression of the functional model that OO claims is an anti-pattern stance*).

So, we were talking about the BDI model in spade2.  It sorta kinda reeks of the obfuscated approaches of JADE and JACK etc.
I came across two alternative approaches, one in process and one potentially to provide a server based solution.
In process candidate is [Pyke](http://pyke.sourceforge.net/ "Pyke is logic programming in Python").  This approach "cooks" python code from logic programming expressions that have a similar flavor to the why beliefs and desires are expressed in Jason.  It also has Plans (so-called).  So, a little side experiment between study sessions is look at using Pyke in place of the "native" BDI solution in spade2.  Now if it isn't itself really BDI note you can code up a [BDI model in Prolog](http://umkn-dsp01.unisa.ac.za/xmlui/bitstream/handle/10500/3517/dissertation_rens_g.pdf "BDI in prolog") which is a logic programming language - so if you need to be pedantic you might port the prolog BDI model to Pyke, for a laugh.
The other interesting approach is [Fuxi](https://code.google.com/p/fuxi/wiki/FuXi "RDF based RETE").  Loosely, RDF based RETE rule engine but interesting.  The analogue here is the [oro server](http://www.openrobots.org/wiki/oro-server "OWL driven").  Now first iteration would be to hook into an oro server, but down the track a full python port???
