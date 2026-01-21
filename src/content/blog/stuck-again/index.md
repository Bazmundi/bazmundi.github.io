---
title: "Stuck again"
pubDate: 2017-12-18 07:56:29
categories:
  - the-downside-of-opensource
  - the-downside-of-software-development
---
So, I have my iPEGA bluetooth gamepad and I am wanting it to run from my dopey Android phone that I am using as the mediator for the rover.
Nothing useful for using these gamepads in Processing for Android so that appears to be out.
No heart or interest to write something in Java.
Python?  Well pygame for Android seems a dud, a lot of old blog entries but nothing obviously working anymore.
I noted that they sorted some of the flakiness of Kivy and so I re-installed Kivy on my PC with the view of prototyping on Windoze then bombing on Android.
Go figure I can get the pyGame gamepad exerciser working on PC.  I tried the same for the raw Kivy version.   I works!  Well as long as you don't allow your gamepad to go to sleep.  If you do, Kivy drops it.  And, if you leave it disconnected long enough, the Kivy application closes down quietly.
Posted a question on Kivy.org and an issue on github but no responses at all from anyone.
It is not obvious from the Kivy code why it drops the gamepad.  There is otherwise no hints in any of the examples or any of the documentation.
In the pygame version, the gamepad can go to sleep and when it wakes it is auto-connected again.
So, stuck as I still have to see if I can get the old pygame for android to work with the gamepad.  I would have used Kivy but help is a dead end.
 
