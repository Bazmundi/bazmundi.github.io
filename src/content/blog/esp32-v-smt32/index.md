---
title: "ESP32 v SMT32"
pubDate: 2021-10-17 00:24:10
---
A late find is that the floating point performance of the [ESP32 is a bit sad](https://blog.classycode.com/esp32-floating-point-performance-6e9f6f567a69). The current design of the bloggie lens based idea, for the MHS-FS2 type lenses, was a long lead ov2640, to snake out from the adapter to a TTGO Camera board (see Figure 1). This will still be viable, and there are examples of this [setup doing image processing](https://github.com/joachimBurket/esp32-opencv). But whether that can be at a rate for converting the bloggie image to a panoramic, and then lay processing over the top as well, is a question.



[![](./draft-1.png)](./draft-1.png)

Figure 1



I have a couple of OpenMV cameras as well, that that the MHS-PM5 lenses might be adapted to.



So, the ESP32 system may be less capable but dependant on what the processing needs are, it will be still a useful option.



Strategies exist, anyway, to get around likely lower frame rates. Including streaming the data without processing up to a server, which is apt for smaller robots.



To get the drift, the PM5 lens has a more or less clip onto lens coaxially approach (Figure 2 and Figure 3), whereas the FS2 has a clip on at 90 degrees approach (Figure 4 and Figure 5).






[![](./sony-bloggie-fisheye.jpg)](./sony-bloggie-fisheye.jpg)

Figure 2


[![](./sony_mhspm5k_l_mhs_pm5_bloggie_camera_kit_684283.jpg)](./sony_mhspm5k_l_mhs_pm5_bloggie_camera_kit_684283.jpg)

Figure 3




[![](./mhsfs2kv.png)](./mhsfs2kv.png)

Figure 4


[![](./sony_mhs-fs2_1.jpg)](./sony_mhs-fs2_1.jpg)

Figure 5




The PM5 lens (Figure 2) thus is a much better mate for the OpenMV M7 I have (Figure 6).



[![](./openmv.jpg)](./openmv.jpg)

Figure 6



To connect the MP5 lens to the OpenMV M7 appears to only need a simple 3D printed adaption (Figure 7 and then Figure 8)



[![](./lens-collar.png)](./lens-collar.png)

Figure 7



![](./openmv-mitt-lens.jpg)

Figure 8



I am finding it works (needs some fiddly focusing), but I will need try a lens with a narrower field of view perhaps (Figure 9).



[![](./success.png)](./success.png)

Figure 9




https://www.youtube.com/watch?v=MhvNBQOFgkw
