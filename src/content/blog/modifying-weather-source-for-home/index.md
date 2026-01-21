---
title: "Modifying weather source for home"
pubDate: 2024-10-20 08:31:26
tags:
  - iot
---
I have been fracked off by [BOM](http://www.bom.gov.au/) (B B B B Bureau of Meteorology) here in Australia as, while they do send out packets of weather, they keep changing their fracking API and breaking stuff.



So for my home system, I had been sniffing the weather sent out from Adelaide airport, as it's close by. Mostly to add an extra watering cycle to the garden sprinkler system if it was predicting and then got hotter than a certain amount. That code is broken, and it's forth time so no more. I need a buffer from that.



Then a sale on Aliexpress and for a few bob, an ESP32 mitt a 2.8" touch display no less turn up, so I bought two on impulse, and then went looking for coding examples. So, a slew at Random Nerd.




https://randomnerdtutorials.com/cheap-yellow-display-esp32-2432s028r/





https://randomnerdtutorials.com/esp32-cyd-lvgl-weather-station/





https://randomnerdtutorials.com/esp32-cyd-lvgl-digital-clock/





https://randomnerdtutorials.com/touchscreen-on-off-button-cheap-yellow-display-esp32-2432s028r/





https://randomnerdtutorials.com/lvgl-cheap-yellow-display-esp32-2432s028r/





https://randomnerdtutorials.com/esp32-cyd-lvgl-display-image/




Et voila! Random nerds comes to the rescue. Now I want to mix this up and include mqtt outputs to the sprinkler system with weather, a stop-all sprinklers emergency button, maybe a page of manual sprinkler starts etc.



The code is all using Arduino but I'mahgunna use code (I'm just that kinda guy). It'll fill in time while waiting on a few things before other projects can push forward.
