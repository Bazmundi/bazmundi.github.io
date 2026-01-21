---
title: "Putting that raspingdoodleberry Pi to good use"
pubDate: 2019-12-22 07:02:41
categories:
  - docker
  - raspberry-pirate
  - raspingbreathburrydoodlepi
  - the-downside-of-opensource
---
So, used Etcher to burn an SD with HypriotOS at:



* `Version 1.11.4`
* `hypriotos-rpi-v1.11.4.img`
* `Docker 19.03.4`
* `kernel 4.19.75`
* `Dated 04.11.2019`



Booted the RPI 3B+ and added docker-compose via:



* `sudo apt-get update`
* `sudo apt-get install -y apt-transport-https`
* `echo "deb https://packagecloud.io/Hypriot/Schatzkiste/debian/ jessie main" | sudo tee /etc/apt/sources.list.d/hypriot.list`
* `sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 37BBEE3F7AD95B3F`
* `sudo apt-get update`
* `sudo apt-get install docker-compose`



Grabbed my favorite MQTT setup, all grown up now, emqx with:



`docker pull emqx/emqx:v3.2.7`



Thence onto node-red with:



`docker pull nodered/node-red`



The fiddly bit seems to be to get the MQTT nodes in the node-red to connect to the emqx broker. None of the standard tricks seem to work, such as the default use of --LINK from the node-red guide on using it under docker. Hence, the downloading of docker-compose as I want to see if starting emqx and node-red via compose sorts the problem.



The problem is eclipse-mosquitto nor two or three other MQTT brokers, including emqx never see a connection from the node-red container. I tried openning up ports etc. I opted for emqx since it comes with an admin console so it is the most straight forward way to 1) see that the MQTT broker is up and 2) you have visibility of client connections if/when they are made.



Otherwise I am likely to recommend the MobaXterm as it allows me multiple sessions and session types. I can ssh into the hypriotOS or VNC onto my debian server at the same time.



I also opted for MS Visual Studio Code, since I use is for my PlatformIO dabblings. The remote explorer allows me to edit files on the RPI/OPI/BBB/C.H.I.P/ODRIOD W/ODRIOD C1/Parallella/NVIDIA Jetson Nano.
