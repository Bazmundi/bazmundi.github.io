---
title: "Lies, more lies and statistics"
pubDate: 2016-12-07 10:19:18
categories:
  - rant
  - sucky-service-providers
  - the-downside-of-opensource
---
So, Intel "confirm" it cannot possibly be the Curie that is causing the problem I am having as they tested their Curie on their computer and it worked.
The problem, either they don't understand quality control and process statistics or are hoping I don't.
Indeed, it is the same fallacious, that is flawed, argument you get on user groups where someone's "help" is the statement "it works for me".
Can people really be that vague?  I suppose so.
Using that logic, for example, the wheel bearings on my 01 01 Subaru WRX do not need replacing.  Granted the front right bearing is squeaking badly.  There is a suspicion about one of the rear ones.  After all, the car was built in 2001 and has many  many kilometers on the clock.  Still, if there is one other 01 01 Subaru WRX that doesn't have squeaking bearings, needing replacing, then mine does not either ... despite the annoying squeaking.
That in a nutshell is the class of "help" you get on user groups and also what passes for "help" of vendors.
However, Curie vendor no help.  Curie device suppliers no help.  Curie community no help.  Arduino community help in as much as it helped me work out that many people are having the problem and there is no clear cut solution.
So, on balance:

* Two different computers saw the same problem.
* Two different Curie devices saw same problem on both computers.
* Different versions of the Arduino IDE saw the same problem.
* Failed on all USB 2 ports on both computers.
* Failed on cables that, using the same cable, on the same USB port, programmed an AVR or other board (verifying cable and USB ports work)
* Failed on all versions of dfu-util that were downloaded from dfu-util site.
* Failed on all versions of Curie core tried.
* Failed on various programmer options in IDE.
* I had a secret bet with myself it would not allow upload of new firmware, it couldn't because it wouldn't upload \*ino.bin files.
  + It failed to upload firmware.
  + I won that bet with myself so now I have a crisp new $5 note in my left hand, paid by my right hand.
* Recompiled the uploader with extra error messages.
* Oh, and re-installed, disabled, re-enabled drivers as nauseum such that I imagine I etched their random patterns of dribbling useless bits into the substrate of my hard drive.

Bored now, SF Genuino returned to LBE. (thankyou LBE).
DFR CurieNano in bin.  Too hard to negotiate because with all I have had to do that wasn't enough.
