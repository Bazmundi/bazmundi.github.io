---
title: "DrRacket is a racket"
pubDate: 2015-12-06 13:26:08
---
What a way to get people through their prejudices.
Change the name from Scheme to Racket and bank on people not having a history of being misinformed to believe Lisp and Scheme are dead.
They ain't of course.  Been hanging on for a Renaissance.
Go figure functional languages have resurged.  You remember those.
Of course Erlang does Lisp (aka lfe).
But what ballsy misdirection. Just don't call it Scheme no more no more, just don't call it Scheme no more.
Still.
Bad form in the examples:
> |  |  |  |  |  |  |  |  |  |  |
> | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
> | |  | | --- | | ([define](../reference/define.html#%28form._%28%28lib._racket%2Fprivate%2Fbase..rkt%29._define%29%29) (reply-more s) | | ([cond](../reference/if.html#%28form._%28%28lib._racket%2Fprivate%2Fletstx-scheme..rkt%29._cond%29%29) | | [([equal?](../reference/booleans.html#%28def._%28%28quote._~23~25kernel%29._equal~3f%29%29) "hello" ([substring](../reference/strings.html#%28def._%28%28quote._~23~25kernel%29._substring%29%29) s 0 5)) | | "hi!"] | | [([equal?](../reference/booleans.html#%28def._%28%28quote._~23~25kernel%29._equal~3f%29%29) "goodbye" ([substring](../reference/strings.html#%28def._%28%28quote._~23~25kernel%29._substring%29%29) s 0 7)) | | "bye!"] | | [([equal?](../reference/booleans.html#%28def._%28%28quote._~23~25kernel%29._equal~3f%29%29) "?" ([substring](../reference/strings.html#%28def._%28%28quote._~23~25kernel%29._substring%29%29) s ([-](../reference/generic-numbers.html#%28def._%28%28quote._~23~25kernel%29._-%29%29) ([string-length](../reference/strings.html#%28def._%28%28quote._~23~25kernel%29._string-length%29%29) s) 1))) | | "I don't know"] | | [[else](../reference/if.html#%28form._%28%28lib._racket%2Fprivate%2Fletstx-scheme..rkt%29._else%29%29) "huh?"])) | |
> |  |
> | |  | | --- | | > (reply-more "hello racket") | | "hi!" | | > (reply-more "goodbye cruel world") | | "bye!" | | > (reply-more "what is your favorite color?") | | "I don't know" | | > (reply-more "mine is lime green") | | "huh?" | |

The problem being  the test for "?" and that one is forced to fall through the first two tests and so it cracks up when a string shorter than 5 char comes through as there is an overrange condition.
For example:
> (reply-more "bug?")
> . . substring: ending index is out of range
> ending index: 5
> starting index: 0
> valid range: [0, 4]
> string: "bug?"
> >

Still takes me back.  I did knock up a lisp interpreter in FORTH years ago ... for the shear fun of it.
The safer version thus (forgive the loss of indenting):

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| |  | | --- | | ([define](../reference/define.html#%28form._%28%28lib._racket%2Fprivate%2Fbase..rkt%29._define%29%29) (reply-more s) | | ([cond](../reference/if.html#%28form._%28%28lib._racket%2Fprivate%2Fletstx-scheme..rkt%29._cond%29%29) | | [([equal?](../reference/booleans.html#%28def._%28%28quote._~23~25kernel%29._equal~3f%29%29) "?" ([substring](../reference/strings.html#%28def._%28%28quote._~23~25kernel%29._substring%29%29) s ([-](../reference/generic-numbers.html#%28def._%28%28quote._~23~25kernel%29._-%29%29) ([string-length](../reference/strings.html#%28def._%28%28quote._~23~25kernel%29._string-length%29%29) s) 1))) | | "I don't know"] | | [([equal?](../reference/booleans.html#%28def._%28%28quote._~23~25kernel%29._equal~3f%29%29) "hello" ([substring](../reference/strings.html#%28def._%28%28quote._~23~25kernel%29._substring%29%29) s 0 5)) | | "hi!"] | | [([equal?](../reference/booleans.html#%28def._%28%28quote._~23~25kernel%29._equal~3f%29%29) "goodbye" ([substring](../reference/strings.html#%28def._%28%28quote._~23~25kernel%29._substring%29%29) s 0 7)) | | "bye!"] | | [[else](../reference/if.html#%28form._%28%28lib._racket%2Fprivate%2Fletstx-scheme..rkt%29._else%29%29) "huh?"])) | |

> > (reply-more "bug?")
> "I don't know"

I will leave it to the reader to work out if there is a bug if a 6 character string is used.
Now why I like lisp/scheme/forth?  The same reason I like python.  Very productive code and test and code and test and code and test.
So, now I like Racket too.
 
 
