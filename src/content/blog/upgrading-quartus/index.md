---
title: "Upgrading Quartus"
pubDate: 2014-05-09 08:04:24
---
Well, that was my fault be being lazy.  Since the Quartus downloads take so much time, once I found 13.1 didn't have support for Cyclone II, I played safe and went for 10.1 sp1.
I am now downloading and installing 11.1 sp2 software to get around problems with Qsim (hopefully) as well as giving me Cyclone II and Max II support (still).
Go figure though, I installed 11.1 University Program (UP) with Qsim over 10.1 okay and Qsim would run, though its wave editor would not.
Now I install 11.1 UP over 11.1 Quartus and naught, nothing, na da, no Qsim installed.
On top of that, the 11.1 install of ModelSim does not recognise the 11.1 install of Quartus, even then I manually point it into the directory, so it won't install.
Why did I bother?
**POST SCRIPT**
Where we are at now is I have ripped out all Altera software and reinstalled:

1. Quartus II sp2 Build 259 into clean directory "11.1" and program group "Altera 11.1"
2. ModelSim-Starter 11.1 sp1 Build 216 into directory "11.1" created in step above and used the same program group "Altera 11.1"

Having said that, it took quite a while with slow downloads and installing and uninstalling to get that sorted.
We will have to go back to our SOPC example to re-do it in the new Qsys tool, though that isn't as scary as it sounds.
What we might do next is add a few personalized instructions to our CPU - just to buzz out that process.
This newer development environment includes a "better" way of doing this apparently.
