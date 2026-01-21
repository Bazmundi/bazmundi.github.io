---
title: "Painful!"
pubDate: 2023-06-04 07:18:32
---
With VisualPlace, it does not use local machine cameras at all.



Rather, it will peek at IP cameras.



So, the problem for my Acer Aspire One, when running VisualPlace, I currently need to run the camera "outside" in VLC.



I am trying to work out if I can, at all, get VLC to mimic an IP camera, no luck so far.



I did luck into a dozen lines of python code that someone wrote, to use Flask to turn your local camera into an IP camera.



Pesky issue, it's in Python 3 odd.



Better yet, I had no luck installing Flask onto the Acer using pip, under the built-in Python 2.7*.*



In fact, for some reason, anything related to Flask, kept coming up with missing setup file errors. Though, that seems to be an issue with pip probably, and how it installed. It would be far too weird for it to only be related to Flask and Co.



But, through trial and error, I did manage to download all the Flask==0.10.1 and dependencies (eventually), and got Flask==0.10.1 installed under Debian 8 (Jessie).



So far, so good.



Whether that ends up the solution to streaming my USB snake, for VisualPlace to pick it up, TBD.



The problem now, to get opencv running on Debian 8. Shouldn't be a problem right?! Except there is that pesky deb8u1 vs deb8u2 mix of opencv packages, including python-opencv, so a bit of a chore left to try to get python-opencv up. Not really up on that story, so a little hiatus as I try to learn my way out of the issue.
