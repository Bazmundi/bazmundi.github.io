---
title: "Close but no bananna"
pubDate: 2017-06-14 06:43:42
categories:
  - mqtt
  - orange-pi
  - rant
  - the-downside-of-opensource
---
So here is where I got to getting emqttd to start as a service on Armbian Debian server running on OPiZ:

```
Jun 14 08:29:42 house systemd[1]: Starting SYSV: emqttd is mqtt broker....
-- Subject: Unit emqttd.service has begun with start-up
-- Defined-By: systemd
-- Support: http://lists.freedesktop.org/mailman/listinfo/systemd-devel
--
-- Unit emqttd.service has begun starting up.
Jun 14 08:29:42 house emqttd[1282]: /etc/init.d/emqttd: 1: /etc/rc.d/init.d/func
Jun 14 08:29:42 house emqttd[1282]: starting emqttd...
Jun 14 08:29:43 house run_erl[1321]: Erlang closed the connection.
Jun 14 08:29:58 house systemd[1]: emqttd.service: control process exited, code=e
Jun 14 08:29:58 house systemd[1]: Failed to start SYSV: emqttd is mqtt broker..
-- Subject: Unit emqttd.service has failed
-- Defined-By: systemd
-- Support: http://lists.freedesktop.org/mailman/listinfo/systemd-devel
--
-- Unit emqttd.service has failed.
--
-- The result is failed.
Jun 14 08:29:58 house systemd[1]: Unit emqttd.service entered failed state.
```

So, to get here first you need the instruction for setting emqttd as a service at [emqttd site](http://emqtt.io/docs/v2/install.html#etc-init-d-emqttd).
The script line ". /etc/rc.d/init.d/functions" (within /etc/init.d/emqttd) will try to source a file you don't have in your Armbian debian server distro for OPiZ.  It appears a standard file so I used mkdir to create the /etc/rc.d/init.d directory and downloaded a copy of [functions](https://bash.cyberciti.biz/guide//etc/init.d/functions).  This may or may not be the source of any knock on problems I am currently having.
In any event.
What the emqttd build does not do is move the binary to /opt directory for you, and there are no words to direct you to do this in the emqttd help, so the help file either expects you "know" (how we hate priori knowledge yes) that was their install solution OR the build clapped out and didn't move the files or install properly - and did not report same.
So, you will need to copy the files (built into \_rel directory) into /opt with (from your emq-rex directory):

```
mkdir /opt/emqttd
cp -r _rel/emqttd/* to /opt/emqttd
```

To get the error above just type in:

```
service emqttd start
```

Note, I also tried the [service installation for node-red](https://diyprojects.io/install-node-red-orange-pi-running-armbian/#.WUDe1miGOUl) to no avail.  It appears to hook into services via a slightly different route (who would have thought).  But, alas, the following line ends quietly with no error report.

```
systemctl start nodered.service
```

But, browser does not connect to anything.  Rebooting has no effect.  The following provides the obituary:

```
systemctl status nodered.service
```
