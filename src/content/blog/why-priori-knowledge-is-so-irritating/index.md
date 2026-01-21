---
title: "Why priori knowledge is so irritating"
pubDate: 2017-05-20 11:25:21
---
Something so simple, if you have example code on your blog why on earth do you not included the includes.  Priori knowledge is not immediately explicit.
I bumbled through the example of [constraint based programming in Factor](http://re-factor.blogspot.com.au/2017/02/711.html).  Go figure, the actual code should be:

```
USE: backtrack
USE: locals

:: solve-711 ( -- seq )
    711 iota amb-lazy :> w
    711 w - iota amb-lazy :> x
    711 w - x - iota amb-lazy :> y
    711 w - x - y - :> z

    w x * y * z * 711,000,000 = [ fail ] unless

    { w x y z } ;


```

Run it with:

```
IN: scratchpad solve-711 .
```

Still, the debugging is fantastic and will suggest vocabularies to include (which helped sort out the missing "includes" aka USE:).
Interestingly Factor has a vocab "models" which sniffs a bit like the idea of models, in the first instance from MVC, but then subtly not unlike the way "model" is used in [Elm](http://elm-lang.org/examples/buttons) and therefore Functional Reactive Programming.  Cool.
Although, its Concatenative Reactive Programming really - although that's postfix functions rather than prefix.  Cool.
The difference is important though.  Elm "compiles" to JSP to "compile" to byte-code to run on the JVM.  In Factor, you are reactive in Factor.
Now, the key difference between Factor and Forth here is that Forth is for embedded systems.  Factor is not.  While you can squeeze Forth onto an AVR chip, they don't even bother anymore with Factor on ARM.
Still, I get a queasy feeling it's the FORTH community all over again.
