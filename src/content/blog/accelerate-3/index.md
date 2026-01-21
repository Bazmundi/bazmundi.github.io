---
title: "Accelerate 3"
pubDate: 2014-04-21 02:30:42
categories:
  - parallel-talk
  - python-rules
---
Just ran a couple of examples from a [pyOpenCL tutorial site](https://github.com/benshope/PyOpenCL-Tutorial "Step by step").
I tried running the [optimized matrix multiply](https://github.com/benshope/PyOpenCL-Tutorial/blob/master/06_optimized_matrix_multiply.py "Nope") but it clapped out.  I had to change the "blocksize = 32" to "blocksize=16" before it would work on my GPU.  Otherwise it didn't offer any impressive numbers.
I then tried the [mandlebrot example](https://github.com/benshope/PyOpenCL-Tutorial/blob/master/11_mandelbrot.py "Fond memories") (having spent some time years ago with mandlebrots in FORTH and on my Amiga).
The grunting GPU snapped the finished mandlebrot in 5.1 seconds.  The serial version took about 190 seconds.  The Numpy version however only took 5.3 seconds???
When running the CL code but selecting the CPU instead of GPU it takes 1.8 to 3.2 seconds???
These examples appear great to show how to get code running via OpenCL and python.  They also quickly start raising questions about algorithm design, data transfer overhead etc.
So, summary.
Running OpenCL on the GPU seems to take as long as running native Numpy.
Running vanilla (non-OpenCL, non-Numpy) on the CPU takes about 3 minutes versus the 5 seconds on the GPU.
Running the OpenCL on the CPU appears to run about twice as fast as on GPU.  This may be any or a combination of 1) Intel OpenCL calling AMD (who knows what sneaky tricks we play to make AMD look bad) 2) array size too small vs data transfers to bring out speed advantage of the GPU 3) algorithm not optimized or not suitable for large speed up through GPU.
Must be some rules/heuristics around for selecting problems that [best fit GPU speed up](http://advencode.wordpress.com/2011/10/24/performance-comparision-of-using-opencl-with-my-gpu/ "Here is one view").
 
