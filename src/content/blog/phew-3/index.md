---
title: "Phew!"
pubDate: 2016-01-02 13:58:31
---
Thank GOD! I bought a serial cable for the ODROID-W baseboard.
I was trying to setup a WiFi static address and must have blown the edit so I couldn't get into my ODROID-W as I had lost both eth0 and wlan0.
Not to mention that I ran a apt-get upgrade which wipe my LCD setup - so I couldn't even get in with USB mouse/keyboard.
All good, reset everything and up a running again - though I have to go back to drawing board to set the static IP up.  Likely should not be tippling on rum and scotch whilst telneting - yes I think that is a good rule.
The problem was that the DNS is updating my ODROID-W IP address and I loose connection in the middle of things like, say, installing node-red.
I also gave up on installing the emqttd after I found that the apt-get upgrade lifted my erlang install from 17 to 18.  The emqttd install notes warn that one must use 17 because of a memory leak problem in 18.
So, I installed mosquito to provide the mqtt server requirements from my house.  I guess I am building a thingyboxythingy then but with a much smaller footprint.
I may look at downgrading the erlang at least to allow for an emqttd install.  Still, the IoT aspects of the house won't (or shouldn't) know the difference.
Happy New Year by the way.
 
