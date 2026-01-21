---
title: "Snap (by Synapse)"
pubDate: 2012-06-29 08:33:16
categories:
  - hardware
  - mesh
---
[![11279-01_large](./11279-01_large1.jpg)](http://organicmonkeymotion.wordpress.com/2012/06/29/snap-by-synapse/11279-01_large-2/)

Specs:

• 15 GPIO, 4 with 10-bit ADC
• 128k flash, 56k free for over-the-air uploaded user apps
• One UART port
• Low power modes: 2.3 ?A w/ internal timer running
• Spread spectrum (DSSS) technology
• Socket-able or solder-able
• Up to 2 Mbps Data Rate
• 2.4 GHz RF Frequency
• Receive Amplifier (10 dBm) standard
• Transmit amplifier (20 dBm) for best-in-class range
• Chip antenna (up to 4000 feet, LoS at 250kbps)
SNAP’s on-board Python interpreter provides for rapid application development and over-the-air programming
I was poised to buy the ZIGBEE modules for a couple of my ZIGBEE mounts when I came across the [SNAP alternative](http://www.synapse-wireless.com/Mesh-Network-self-healing-SNAP-components).  A plus because they have ZIGBEE footprint.    A plus because they come with a cut down version of python on them and allow for RPC and a whole range of useful things, over the wireless.
Of note, they appear to allow for the raw data flow transparency under the RPC and other layers so I can still use them for MAVLINK as well as using them for other smart applications.
The most useful thing is that, plugged into the arduino boards, they can offload the raw I/O to the arduino board.  The remote programming (over the air) will allow for more malleable smarts - especially as a PC can join in and act as a node using full python.
OR, at least, they can be used simply as a ZIGBEE replacement.
I have two on order to start looking at the MAVLINK side.  Noting, of course, that MAVLINK already has [python bindings](http://www.qgroundcontrol.org/mavlink/pymavlink "All the work done for you").
