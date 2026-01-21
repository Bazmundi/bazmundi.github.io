---
title: "Oh the pain"
pubDate: 2020-01-12 00:23:54
categories:
  - docker
  - home-assistant
  - hypriotos
---
Trying to get Clicksend integrated with Home Assistant appeared to be easier, once you find all the goss, but its finding the goss.



The [clicksend config](https://www.home-assistant.io/integrations/clicksend) is at Home Assistant site. Straight forward enough.



To set up an action the trick turned out to be use a "Call Service" with:



```
alias: ''  
data:  
message: Zone 1 turned on  
service: notify.clicksend
```



Now the hint was at the [Clicksend integration page for Home Assistant.](https://help.clicksend.com/article/9cutal9xmg-home-assistant) That it, it was a service call.



That pieced together something for me that didn't stand out from the mess of help at Home Assistant. That is:



```
notify:
   - platform: clicksend
     name: ClickSend
     username: CLICKSEND_USERNAME
     api_key: CLICKSEND_API_KEY
     recipient: PHONE_NO 
```



Leads to a service call, in the actions and likely scripts, of:



```
notify.clicksend
```



Makes eminent sense.
