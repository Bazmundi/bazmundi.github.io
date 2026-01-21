---
title: "Accelerate 2"
pubDate: 2014-04-20 08:24:07
categories:
  - development
  - parallel-talk
  - python-rules
---
Okay, so a half day fidgeting to get pyOpenCL working.
Turns out it was easy.
I have a INTEL CORE i5  CPU and you just need to install the [Intel OpenCL runtime](https://software.intel.com/en-us/articles/opencl-drivers "Intel, I know, it isn't ARM").  The SDK won't install anyway unless 1) you have something other than VS Express or 2) there appears to be a cheat to install it anyway.  It isn't need for pyOpenCL.
Then install the [relevant exe for pyOpenCL](http://www.lfd.uci.edu/~gohlke/pythonlibs/ "Pre-compiled for your convenience") and run that.  I installed the 32 bit version because I opted for 32bit given the raft of libraries I wanted to use. I did try installing the [AMD OpenCL SDK](http://developer.amd.com/tools-and-sdks/heterogeneous-computing/amd-accelerated-parallel-processing-app-sdk/ "For your full AMD solution"), thinking I would need it for the Radeon, but it turned out that wasn't it at all. Experimenting with code examples from various places it looks good.
I have copies of a couple of OpenCL books so I can dabble in the background. This is primarily for prototyping and learning the ropes of OpenCL.
I am holding off on my ARM cluster, I was about to jump in and get 3 ODROID U3 but I can wait until they bring out the U4, hopefully with an RK3288.  The ODROID XU has OpenCL (via Octa chip set) but too expensive.
 
