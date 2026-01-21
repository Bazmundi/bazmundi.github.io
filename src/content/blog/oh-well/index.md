---
title: "Oh well."
pubDate: 2023-09-22 12:30:22
categories:
  - the-downside-of-opensource
  - video-technique
---
Where I am with the IP camera for the manual PnP machine(s) is dire.



I found the best IP camera streaming hack to run on the XIAO ESP32S3 Sense setup was [here](https://github.com/Mjrovai/XIAO-ESP32S3-Sense). That code seemed to come up and run, without drop-outs I had seen with code from other sources.



I have now run that code against the OV2640 that came with. I have now also vetted the code against both the 160o 850nm "night vision" camera for my fruit rat hunting experiment, and the long ribboned 66o camera I was planning to use on the PnP machine(s).



A problem arose, however, since I need to set the 66o permanently in place, and that may limit the locations I can do that. I got the long ribbon to allow me to mount the camers essentially vertically, over the location the PnP picker will work. The issue, with a fixed focal length, you need to adjust the camera distance from the mount board to focus.



It occurred, therefore, I should have grabbed an autofocus camera. Hence, an OV5640 50MM Auto Focus FOV 65o is now on its way.



Also wik. I can get the ESP32S3 serving MJPEG to:



* my Chrome browser on me HP Spectre,
* an instance of motioneye running on me home server, from me HP Spectre and
* in the Firefox browser running on my ACER Aspire ONE, which is running Debian 8 etc.



But, I did give up trying to connect VisualPlace to the IP camera from both my HP Scectre and me ACER Aspire ONE, since VisualPlace would not connect at all to the camera served by the ESP32S3 on either hosts. Of note, VisualPlace would also not connect to an IP Camera app running on my android phone.



I've also bought a VGA to RCA converter to see if I can use an old portable DVD player as my second screan for the ACER Aspire ONE. If not, I appear to be able to get a 7" LCD with VGA input from Aliexpress for UAS$70. But, the preference is the get use out of the old DVD player. I may event rip the DVD out of it an see if I can build a lipo into to it, since it still needs a power pack.
