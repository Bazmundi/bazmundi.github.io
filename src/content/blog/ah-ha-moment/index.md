---
title: "Ah ha! moment"
pubDate: 2014-07-23 11:51:01
categories:
  - android
  - python-rules
---
I am having a problem with python libraries in QPython as I found that libraries seem to be visible to the script menu but not to the console.  The libraries were not turning up where I was expecting so I poked around using [AndroZip](https://play.google.com/store/apps/details?id=com.agilesoftresource "AVG Labs") which has a search function.
I worked out that, as I hadn't put SD cards into any of my newer Android devices, the libraries were going into a cache that essentially was pretending to be the SD card.  For whatever reason, only the script menu could see the libraries at that location.  The QPython team promise they will look into fixing that but there is no reason for me not to bulk out my devices with SD cards.
I'll buy a swag of SD cards this weekend and try uninstalling and then re-installing everything.
