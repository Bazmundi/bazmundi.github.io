---
title: "So much help, so little help"
pubDate: 2017-12-08 06:01:28
categories:
  - the-downside-of-software-development
---
So, I stupidly thought I would upgrade my elixir and crack open my book on Phoenix and plod through the examples while home sick with the flu.
Book is Programming Phoenix (eBook) P1.0 from PragProg
Broke the build so I had to strip out the hex and mix folders, re-installed hex, elixir and phoenix.
And then all I got was the broken connectic with postgres!  Why?  I was going to up from 9odd to 10 but backed out after I saw how long the 10 would take to download (and it wasn't needed).  I had already uninstalled 9 and just re-installed.  BUT the build would fail as the username/password failed on authentication.
Hmm.
When you delete postgres on windows it doesn't, of course, remove the data directory (where usernames and passwords are encrypted).   If you reinstall overtop a bug or quirk of the install is that it not longer prompts for super-user password or port etc.  (obviously buried in the data directory).
All fixed by manually deleting the data directory and re-re-installing postgres.
POSTSCRIPT
GAG!  My book appears to be out of date now!
At least, they have moved all the app directory structures around.
Pragmatic Programmers KEEP UP!
Although, it looks to be the difference between Phoenix versions 1.2 and 1.3 which is fine (just have to remember to use the phoenix.x rather than phx.x idiom for building apps).
POSTPOSTSCRIPT
There are problems with the errata page, as rather than the author drafting errata, as people report the problems, the errata is like a user group and so you get the same drifting away from facts.
Although, problems include movement in version of ecto as well.
If there is an error, go figure there will be at least two solutions offered by readers BUT as they don't state the elixir, phoenix and ecto versions that they are using (while working through the book) you need likely try each of the different solutions until one works for you.
Looks like best option is to install the elixir, ecto and phoenix versions from the book.
Still, I have had to work things out that don't appear to have been reported in the errata so I guess I am learning little tit bits along the way.
