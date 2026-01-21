---
title: "So close!"
pubDate: 2015-12-31 05:21:01
categories:
  - android
  - linux
  - the-downside-of-opensource
---
I installed [GnuRoot Debian](https://play.google.com/store/apps/details?id=com.gnuroot.debian&hl=en) on my MANN phone.
![mann](./mann.jpg)
It is ruggedized etc. and the IP67 rating means you can get it wet - it is rated to 1meters for 30minutes.  (That is assuming the Chinese manufacturer is honest, I have another so called IP67 phone that leaks like a sieve.)
I bought it because it has a Qualcomm Snapdragon MSM8212 Quad-Core which means I can use some of the libraries Qualcomm have for graphics including tag recognition etc.
It is also much cheaper than Samsung.  My Samsung S4 shattered the other month when it flexed in my back pocket as I sat into my car seat.
In any event.
Some small amount of work to get the ssh working (so I can work from by Tera Term or Cygwin on my PC).
First one must install SSH into the GNURoot Debian environment with:

```
apt-get install ssh-server

Then install vi into the GNURoot Debian with:
```

```
apt-get install vi
```

Then on the phone one needs to edit (make sure you make a backup copy of "sshd\_config" first:

```
vi /etc/ssh/sshd_config
```

You can do this either on the phone with an X session or use VNC Viewer to do this (more conveniently) from your PC.
The default root password for the XWindow session is "gnuroot" (not in documentation ... well there is no documentation, it turned up as an aside when the GNURoot Debian vendor was responding to another ssh problem).
Here we aim to jump the port from 22 to 2222 by editing sshd\_config to read:

```
Port 2222
```

Turn off privileged separation by editing sshd\_config to read:

```
UsePriviledgeSeparation no
```

So far so good.
Now from either Tera Term or your Cygwin terminal (and remembering we are running from port 2222, try to connect).  If you are running from cygwin console it is apt to type:

```
ssh -p 2222 root@<your phone IP address>
```

Yep.  Nope.
We get a connection.  We are asked for a password.  However, for what ever reason the password for the ssh sessions is so far UNKNOWN.  It isn't gnuroot, root, password, and it isn't "" I can tell you.
