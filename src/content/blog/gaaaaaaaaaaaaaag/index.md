---
title: "GaaaaaaaaaaaaaaG!"
pubDate: 2017-06-18 02:40:48
---
So, various things on follow up to mqtt as a service.
You can have a /etc/init.d/mqtt file (works from console but doesn't work as a service and therefore does not work at boot)
You can have a /etc/systemd/system/mqtt.service file (doesn't work)
You can have a /usr/lib/systemd/system/mqtt.service file (doesn't work)
Closest thing that appears to hint at what the problem might be is that emqttd starts with console but systemd baulks during service startup.  Noting that /etc/init.d/mqtt works from console but won't work using either of "service x start" or "systemctl start x" then that appears to "behave" in a way that would suggest console interaction with systemd.
Changed /opt/emqttd/bin/emqttd to turn off console on startup (doesn't work).  Or at least the example code I used does not work as advertised.  The change suggested is from:

```
-args_file $RUNNER_ETC_DIR/vm.args 
```

To:

```
-args_file $RUNNER_ETC_DIR/vm.args -detached -noinput -noshell -- ${1+"$@"}"
```

Not to mention that, for some reason, the mqtt.service options seem to "break" the node-red startup somehow.   When I log into the OPiZ, pm2 show tells me node-red is online but browser fails to connect.  If I delete the mqtt services and reboot I get node-red running on boot as expected.
