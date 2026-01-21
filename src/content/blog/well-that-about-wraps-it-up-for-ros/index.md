---
title: "Well that about wraps it up for ROS ..."
pubDate: 2013-08-06 10:29:42
categories:
  - agent
---
... more or less.
The gist is I have been looking at ways of building a mission management system for my UAV/UUV/UAS/AUV in and around Python.
Various tools that I have been playing with include [SPADE](https://github.com/javipalanca/spade "Python Agent framework") which is an Agent based tool kit for Python.  This has an interesting range of base Agent types including [BDI](https://en.wikipedia.org/wiki/Belief%E2%80%93desire%E2%80%93intention_software_model "Belief, Desire, Intention") agents (or [here](https://www.cs.drexel.edu/~greenie/cs510/bdilogic.pdf "Deeper explanation") if you aren't afraid).
Still, there was still a need of a central server and that's okay.
I found that the ROS server could be supplanted by using ZeroMQ/RPC as it had examples of a data service that could pass for the features of the ROS server.  Between the SPADE and the ZeroMQ/RPC things started to come together.
Still, while you can, to some degree, paint missions with a BDI approach I felt that Agents should have generic Actions and internal Goals and let external Goals be set by some other semantic.
I liked the mission planning side of [Savage's AUV Workbench](http://www.movesinstitute.org/xmsf/projects/AUV/NpsAuvWorkbenchFlyerFebruary2004.pdf "Grrrrrrrrrrrrrrrrrrrr").  Especially the [AVCL](http://www.cse.psu.edu/~bhuvan/teaching/fall06/uuv/papers/Optimizations-Evaluations/DavisBrutzman%20-%20THE%20AUTONOMOUS%20UNMANNED%20VEHICLE%20WORKBENCH%20MISSION.pdf "Too many brackets ..."), which is an <XML> Autonomous Vehicle Command Language </XML>.
So much so I looked for tools to create Python bindings, so with [PyXB](http://pyxb.sourceforge.net/ "Bind me!") in hand I took the schema and built bindings.  The idea is to use the AUV Workbench to build missions and then to have it run on a Python engine on the vehicle.  That is still in work as I have to pour over the AVCL interpreter, written in JAVA, to port it in between other fun (including next lot of Master's course subjects starting September).
The other option was to tear the interpreter out of the simulation environment to run it in Java on the vehicle.  I played with that for a while cheap Android PC were being used as the "brains".  However, the Beaglebone Black (2 in drawer) and the Python environment for Android loosened that goal from its rafters.
Still, there was another approach, that was being used (in principle) in both AUV and UAV.  Namely petri nets for mission planning and execution.
That appealed as I am playing with Coloured Petri Nets to become a better System Safety Engineer.  But how do you build a Petri Net based planner in Python?
Answer is two fold.
First with [Snakes](https://code.google.com/p/python-snakes/ "Hisssssssssssssssssss")!  A full blown Petri Net library for Python.  Not only that you can have nets of nets which is powerful in itself but is also means you can have plans on how to use plans.
Coding Petri Nets isn't fun, especially if they get large, so you need an editing environment and [Viola](https://coloane.lip6.fr/ "Coloane, smells good!")!  An eclipsed based Petri Net editor, Snake Friendly (almost), of course as it produces PNML.  Snake is a bit behind the PML standard (apparently) so may not help that for generating documentation and perhaps "fragments".
Of course, the other idea might be to take AVCL files and use a xlst file to convert them to PNML - or even just use an ETL tool.
