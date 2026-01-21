---
title: "Slowly"
pubDate: 2018-09-06 11:09:34
categories:
  - mqtt
  - node-red
  - orange-pi
  - the-downside-of-opensource
  - ubuntu-core-16
---
So, 4 days ago I reported to node-red group that the --beta snap of node-red did not start as a service on armf version - at least when snapped onto Ubuntu Core 16 running on Orange Pi Zero.
When I started this journey, the following command would not download a snap but it would prompt:

```
sudo snap install node-red
```

The prompt would report there is no --stable version and I had to choose between --beta or --edge.
In fact, the snapcraft.io site also confirmed this as it only had a beta or edge version in the drop down for *armf*.
So I would install node-red with:

```
sudo snap install --beta node-red
```

But, as I mentioned, it did not start a node-red editor on :1880.
If I used the following:

```
snap services
```

It would report the mosquitto snap I snapped in was indeed running a service.
Et voila! If I typed the following:

```
sudo snap run node-red
```

Then node-red would run in foreground.
Not much use since it needed to run as a service.
Starting node-red as a service is easy peasy, if you read the help file, with:

```
sudo snap start node-red
```

Except, that raised the error "node-red ain't got no stinking services to run" which confirmed that the --beta snap for node-red, at least the armf version, had something funky going on.
Curiously, on my freshly built laptop running amd64 version of debian 9 stretch, with snapd installed, the snap of --beta node-red ran as service immediately after install.
That points definitely to something funky going on in the armf Ubuntu Core 16 OPiZ combination.
Then, as likely because of my prompting, node-red community pushed a --stable version of node-red out to snapcraft.io (something like 4 hours ago as I type).   The youngest version, --edge, was 6 months ago.
So node-red didn't have a --stable for armf!!  Some problem with their build (apparently).
Working with node-red community now to sort this.  Such a good Citizen I am.
![gc](./gc.jpg)
 
 
