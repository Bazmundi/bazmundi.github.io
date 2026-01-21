---
title: "So wearing ..."
pubDate: 2017-06-16 15:09:52
---
... goddamm fracking frack!
So, again different versions of versions of linux.
So, apparently I can change the timeout of a service with:

```
systemctl set-property mqtt.service TimeoutStartSec=x
```

If and only if I have a TimeoutStartSec property that is, you guessed it.
Turns out, there is a TimeoutStartUSec ... woop ... er... already set to five minutes.

###### doh

So theres goes that theory.
