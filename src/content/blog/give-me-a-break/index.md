---
title: "GIVE ME A BREAK!"
pubDate: 2017-05-30 13:36:46
---
FFRRRRRRRRRRRRAAAAAAAAAAAAAAAAAACCCCCCCCCCCCCCCCCCKKKKKKKKK!!!!
Now I have node-red running on the Orange Pi Zero (OPiZ) I thought I would try something to sort the problem I was having on the ODROID-C1 in any event.
That is, I have a google api account for the calendar widgets for google calendar to drive the running of the sprinkler system (I relented and stayed on the PC version which grates with the wife because of the electricity the PC burns).
In any event, for whatever reason,  the google API call-back was against localhost so it should have worked on whatever host was logged into the account.  However, the picture is confused I guess since it is a client API.  So what is the client?  The Web browser browsing into the node-red server OR the node-red server?
The other side was I wasn't sure the MAC address of the "client" wasn't being picked up in the background as part of registered "client" identification.
So, I thought, since I was running a server but not desktop version of debian on the OPiZ then I would install a text based browser and log into google developers that way, create a new api licence from the OPIZ, and then voila!
However, I tried using apt-get to install Lynx but gave up after a dozen attempts.  Tried Links instead.  Slow but I guess it has to parse then discard a shit load of junk.
I pointed Links at the google developer's login page.
It wouldn't let me in.
I thought I had forgotten my password so I reset the google password but it wouldn't let me in.
I opted to go in via other credentials.  It sent me an sms, I entered that in and then it prompted me for a password and then wouldn't let me in.
This went on a while but I tried an option that allowed me to put in at least one of my old passwords.  I used my new password, it told me that was the correct password and gave me the option to continue.
I opted to continue.
It the prompted me for a passwo ....
Yep, it wouldn' t let me in.
I am now no closer to finding out if setting up the API from the target server fixes the problem.
Against my better judgement I might relent and put the desktop version of Debian on the OPiZ - just so I can get at a browser.
The real problem, for whatever reason, is that apt-get crap.  I went to download erlang to find I couldn't install some of the dependencies AND, for whatever reason, wget will not find the erlang download site.  I checked on my PC and it is definitely up.  I use ping on the OPiZ but it doesn't seem to get out BUT then apt-get was fine to remove then download Links (as an experiment).
To top it off the OPiZ keeps dropping its connection to Telnet over the LAN, even though I setup a static IP.
I will have to built up a serial cable as I am convinced that there is something flacky about the ethernet setup (which might account for apt-get cracking up all the time in mid-stream).
Pity, the OPiZ seems really fast - flashed up the node-red sooooo quickly.
I need the erlang on for OPiZ to act as the MQTT server as well.
