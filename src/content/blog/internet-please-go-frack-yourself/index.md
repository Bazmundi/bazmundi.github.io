---
title: "Internet please go frack yourself"
pubDate: 2017-06-16 03:44:30
categories:
  - linux
  - orange-pi
---
So, why couldn't I get the emqttd starting as a service on boot?
Why, it was merely my own stupid fault.  I went to the emqttd site and used their example code.
Problem, they are not keeping their stupid documentation up to date so are time wasters.
I ended up just starting from scratch with the following:

```
#! /bin/sh
# /etc/init.d/mqtt

case "$1" in
  start)
    echo "Starting eqmttd"
    /opt/mqttd/bin/emqttd start
    ;;
  stop)
    echo "Stopping emqttd"
    /opt/mqttd/bin/emqttd stop
    ;;
  restart)
    echo "Restarting emqttd"
    /opt/mqttd/bin/emqttd stop
    /opt/mqttd/bin/emqttd start
    ;;
  *)
    echo "Usage: /etc/init.d/mqtt {start|stop|restart}"
    exit 1
esac

exit 0
```

 
Last problem is now the starting of node-red as a service.  Oh, and I discovered this morning, after running system for 24hours, node-red karks it.
Why can't things just work eh?
