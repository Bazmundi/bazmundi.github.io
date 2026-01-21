---
title: "How hard is it to program a eeprom?"
pubDate: 2014-07-29 12:46:47
---
Pretty tricky if it is obsolete so no programmers around for it.
The [AT17C65](http://www.atmel.com/Images/doc2321.pdf "Obsolete") is the eeprom configurator used in the [eval board that the ADMCF328 sits on](http://www.analog.com/static/imported-files/tech_docs/BoardF32X.pdf "Can't get me one").
You can probably see where I picked up the fidgety RS232 approach with the AD chip and the optocouplers.
Now I know what you are thinking.  Swap it out for another chip.
Kooky idea.
Except the of the three chips that the ADMCF328 are design to work with (XC17165E, AT17C65, or 37LV65) the AT17C65 is the only one I can readily find on the aftermarket in China.  Absolutely no programmers for it though (although ATMEL have a tease page for a programmer but you can't get it anymore, and why would you as the chip isn't stocked anymore).
[Thank you Mouser for one idea of how to build a programmer](http://www.mouser.com/ds/2/36/atmel_doc2288-322522.pdf).
Although clincher came from [ATMEL site](http://www.atmel.com/Images/doc0642.pdf "Build your own!") along with the [software](http://www.atmel.com/tools/CONFIGURATORPROGRAMMINGSYSTEM.aspx "!!!") for the configurator.  So, since the software seems to install on my Windoze box, I just need a DB25 parallel port - yes I said a DB25 parallel port.
Now, this goes either of two ways.  First is a USB to DB25 cable and driver, hopefully the configuration software recognises that arrangement.  Total cost $1.98.
Failing that, $6 to $11 dollars for a PCI card with DB25 parallel port and the ATMEL configurator software.
Failing that, ATMEL has also provided AVR code for programming AT17C65 so I would just code something up on my Arduino MEGA1250.
Okay, so either of 3 ways, 4 if you count no can do - which we don't do we!
Why all this trouble?
Later chips work slightly differently and there is no guarantee the ADMCF328 will read other chip types.  Since getting a flashing LED on this little DSP chip will be proof I can program it having the right eeprom makes sense to avoid compounding the problem.
Although, the first flashing LED experiment will be against serial port boot.
Stay tuned.
PS, no Maker get out clause no way no how ... I like it.
 
