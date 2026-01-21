---
title: "Hypriot 1.12.3 and static ip"
pubDate: 2020-08-30 09:11:49
---
The solution for static IP on [HypriotOS 1.12.3](https://github.com/hypriot/image-builder-rpi/releases/download/v1.12.3/hypriotos-rpi-v1.12.3.img.zip) is:



* flash hypriot 1.12.3 image
* boot
* login
* create file /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
* modify file /etc/network/interfaces.d/50-cloud-init.cfg
* reboot



99-disable-network-config.cfg should contain only:



`#99-disable-network-config.cfg  
network: {config: disabled}`



50-cloud-init.cfg should be modified for static IP. Below is my setup (substitute your own address, netmask, gateway and dns-nameservers):



`#50-cloud-init.cfg  
auto lo  
iface lo inet loopback  
  
auto eth0  
iface eth0 inet static  
address 192.168.0.100/24  
netmask 255.255.255.0  
gateway 192.168.0.1  
dns-nameservers 61.9.226.33 61.9.226.1 8.8.8.8`



Note, most suggestions for static IP fixes are because, as of some version before 1.12.3, the use of flash -u [static.yml](https://github.com/hypriot/flash/blob/master/sample/static.yml) don't work no more no more it don't work no more. So, examples are stale. It seems there has been a change in cloud-init that breaks this process. There is otherwise no fix currently other than the above.
