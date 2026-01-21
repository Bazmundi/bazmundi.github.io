---
title: "Actually!!"
pubDate: 2011-12-03 01:55:53
categories:
  - chase-that-dog
  - prototyping
  - software
  - vision
---
I have a Sony Bloggy (one of the first models with the rotating camera) and anyone who knows Bloggy knows it has a panoramic lens attachment.
Did you know that you can do optical avoidance relatively simply with a panoramic view (<http://www.pirobot.org/blog/0004/>)?
So, I will need to see what needs to be done to use the bloggy, or the omni-directional lens from the bloggy with another camera.  Since the lens is designed to work with the Bloggy camera I am guessing it will be tune the distance which may require some machining of the lens to fit it to, say, the Android phone.
I will use the PC as the remote smarts for the moment is that the proof of concept will be using RoboRealm Vision for Machines ([http://www.roborealm.com](http://www.roborealm.com/index.php)).
First good thing.  If you do your research, like any good little integrator, you'll discover some quite expensive omni-directional setups (>$1K).  So, Bloggy lens (at around $100) is a bonus.
So if you can use the bloggy itself, streaming to your BeagleBoard running Linux that would be one option.  Would take some work, what with having to find/write drivers etc.
The second is modify the lens base to work with Android phone camera and use IP WebCam to pump images up to client (Android or PC) for processing.  (This will be the approach for the prototyping.)
Mind you, Snapdragon S2 based phones will drip in price soon enough (makes me wonder why you would bother with Beagleboard if a Android phone plus Arduino would give you more for less) - my S1 based phone was $70.
