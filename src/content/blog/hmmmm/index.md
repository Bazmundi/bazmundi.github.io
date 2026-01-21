---
title: "Hmmmm"
pubDate: 2012-09-06 14:17:05
---
Now, you'll recall that I used the 3volt FTDI dongle to power the Razor IMU and connect it to the COM port.
Just based on the [Razor tutorial](https://dev.qu.tu-berlin.de/projects/sf-razor-9dof-ahrs/wiki/Tutorial "A blue tooth wireless IMU") there is a straight forward approach to setting up the IMU with a bluetooth connection.  But I had a wild idea.  Using an [XBee Explorer Regulated](https://www.sparkfun.com/products/9132? "Hmmmmm") I should be able to pump the IMU data out to a SNAP network.
Of course, I will use the bluetooth approach as well for pumping into Android but the options SNAP provides are wild.
I just need to sort out, in my head, the schematic for the Explorer to see if track cutting and patching is necessary.  The RF266PC1 should power up nicely from the 3.3volts from the Razor.  Might need to jump between pins on the regulator or maybe not. Will see.
