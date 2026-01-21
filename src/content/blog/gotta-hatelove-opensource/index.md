---
title: "Gotta hate/love opensource"
pubDate: 2012-09-03 14:04:58
categories:
  - software
  - the-downside-of-software-development
---
Go figure, now that I am chaffing at bit I am sucking in Python modules and trying to compile this and that and ...
Of course, you can't hook all you want to into one installation of Python.  Some muck is 32bit, some muck is 64bit.
And of course some of the useful network based muck needs to be on a POSIX compliant Linux and not your WINDOZE box.
Because I wanted to use mucky 32bit SNAP and SNAPpy (and especially Connect) it turns out I can have PyCUDA to port some of the mucky real-time SLAM examples because that needs 64 bit muck.  Of course, on Windoze so there goes some of the neater RPC and parallel programming tools.
Was even tempted to bang together either an ATOM motherboard I have around the place, or a couple of dual core AMD64 with linux so I can have a 32bit LINUX and a 64bit LINUX.
Of course the LINUX leaning makes sense because of ROS, but I was actually looking at other distributed cache and linda-like tuple spaces as I don't get the impression the ROS topics give you much more than that (and I wanted something that ran on 32bit without LINUX).
Most of this is because I am looking at offloading processing to a server over wifi so that you can get away with less smarts on the indoor/outdoor rovers.  Especially since the SNAP Portal is running Python2.7/32bit I was restricted to that on the laptop.  So a pure Python RPC is in order to skip between the laptop and the ATOM running 32bit LINUX/ROS.
Mind you, as exciting as all that sounds it hasn't been - going through the trial and error and trying to build things from the mucky instructions people write for building.
The one thing I learnt years ago, working in Defence on software maintenance, no one did good help files.  With the advent of Open Source it's all gone downhill further.
Still, all this to match the RPC of the SNAPpy with python based RPC across server applications.
Especially if this pesky OpenCV compiles without muckiness on my laptop.  They talk about python bindings but you need the bin directory full there was talk of windoze binaries but they don't appear in the download I chose.  Otherwise import cv works fine, just no blinking module calls.  None of this is clear and the gist of the problem is the depth and breadth of priori knowledge you appear to need to get it up and running.
 
