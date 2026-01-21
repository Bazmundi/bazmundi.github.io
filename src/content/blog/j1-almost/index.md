---
title: "j1 - almost"
pubDate: 2015-09-16 13:10:57
categories:
  - forth-is-it-dead-or-isnt-it
  - fpga
---
A while back I had a poke at porting the [J1 FORTH](http://www.excamera.com/sphinx/fpga-j1.html) softcore to Altera.
Yep, ahead of my meanderings with the Altera LABS but I have spent years in software development and real-time DSP and other systems so the LABS are just me being methodical and giving back to the community.  My main aim, eventually, is DSP and vision experiments.
Not being a slouch I then speed off to at least play at a larger level of granularity and so the FORTH softcores.
Any old how, J1 did allude me because it is coded for XILINX and had some pesky RAM code definition that did not come with the J1.  Ended up finding the XILINX code for the RAM and so I have got most of the way through the porting.  Just some pesky problems with Altera version of Verilog not covering the same expanse of the spec as the XILINX compiler.
All good, as it is all a learning vehicle.
Stay tuned then.
