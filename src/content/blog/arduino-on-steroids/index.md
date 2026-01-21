---
title: "Arduino on Steroids!"
pubDate: 2014-04-29 12:44:32
---
http://www.cloudx.cc/
What can I say?
I put my name down for funding it at [INDIEGOGO](https://www.indiegogo.com/projects/arduissimo-multicore-arduino-for-more-arduino-and-raspberry-pi-interfacing "Multithread is good!").
The project brilliant.  Done to an Arduino IDE mod to do multi-threaded work.
It is up there with [XMOS](http://www.xmos.com/startkit "Transputer isn't really dead afterall.") and [Parallax Propeller](http://www.parallax.com/downloads/p8x32a-propeller-datasheet "Another tiny embedded multi-core").
Now, I wonder ... you could probably use this technique to have a multi-threaded FORTH engine.  Not as many "cores" as [Chuck Moore's G144A12 Chip](http://www.greenarraychips.com/home/products/index.html "Yeah but ...") but likely more practicable given not every one will need 144 cores for practical projects.
I guess optional cores are:

* [J1](http://www.excamera.com/sphinx/fpga-j1.html "J1, from ROS community") and as implemented on the [gameduino](http://excamera.com/sphinx/gameduino/ "Vrrrrroooooooooooom!") (XILINX).
* [myforthprocessor](http://opencores.org/project,myforthprocessor "Build, maybe too big.  But has floating point no less.  Xilinx implementation.") at OpenCores - really BIG and comes with compiler.  Core includes floating point and it appears already has multi-core option (Xilinx).
* [HIVE](http://opencores.org/project,hive "Beez kneez") at OpenCores - already has 8 threads (Altera but needs a bigger chip than on our experimenters board).

Certainly, as far as the cloudx project is concerned, there may be impetus for a cut down version that could be used (4 AVR MCU/threads say) without as much companion real estate as a APM-Multithread.  Just saying.
**POSTSCRIPT**
Dead project.  Chap couldn't get the backing.  Oh well.
