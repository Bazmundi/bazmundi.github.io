---
title: "Short cut to static IP on HypriotOS using linux"
pubDate: 2019-12-23 09:20:26
---
So, go try understand the new flash utility for Hypriot OS. Ignore the [blog](https://blog.hypriot.com/post/cloud-init-cloud-on-hypriot-x64/) entries as the wacker has no technical writing skills.



Seems you need only read and understand the FAQ. All you need to know is:



>`flash --userdata setup.yaml hypriotos-rpi-v1.10.0.img.zip`



With setup.yaml based upon one of the examples from the flash [samples folder](https://github.com/hypriot/flash/tree/master/sample).



First of all you need flash installed on your linux box, since it does not run on windoze.



The flash utility can be installed on Debian 10 with:



>sudo apt-get install -y pv curl python-pip unzip hdparm



>sudo pip install awscli



>curl -LO https://github.com/hypriot/flash/releases/download/2.4.0/flash



>chmod +x flash



>sudo mv flash /usr/local/bin/flash



You can test it with:



>`flash --help`



OR, you can do what I eventually did, since it took me hours to find you couldn't set the static IP on a HypriotOS host with the old tricks no more.



So, I set up for flash utility but when I stuck a previously bombed SD card into my Debian 10 box, the SD card of course was readable.



So, here is your short version to set up a static IP with HypriotOS without having to setup cloud-init and all that jazz.



Download a HypriotOS image zip, say:



`https://github.com/hypriot/image-builder-rpi/releases/download/v1.11.4/hypriotos-rpi-v1.11.4.img.zip`



Unzip the image and burn to sd card using etcher.



If you have the sd card in your Debian 10 machine, open it using graphical file browser. Open and edit the following file using the file browser's built in editor:



user-data.yaml



Use the example static.yml file in HypriotOS sample folder and edit up the user-data.yaml file to suit your static IP setup.



Take sd card out of your Debian host and insert into your target RPI.



BOOT FOR THE FIRST TIME and voila! You will find your HypriotOS host on the static IP you set up in the edited user-data.yml file.



Note, the BOOT FOR THE FIRST TIME. That is, download image, edit the config in user-data.yml then BOOT FOR THE FIRST TIME.



Nice accident si?



Message repeats, without the flash utility installed :



* Insert SD card into USB SD card reader.
* Insert USB SD card reader into Linux box.
* Bomb Hypriot onto SD card. Do not remove it. DO NOT BOOT IT!
* Use text editor on Linux box to edit user-data.yml file on SD card in the USB SD card reader. The file is at the top of file system so easy to find when you open up the SD card in a file browser.
* Safe the updates to user-data.yml on the SD card.
* Unmount the USB SD card reader and insert the SD card into your RPI.
* Now you can boot.
* You needn't have used the static IP example but, assuming you did, you now have a HypriotOS box with static IP.
