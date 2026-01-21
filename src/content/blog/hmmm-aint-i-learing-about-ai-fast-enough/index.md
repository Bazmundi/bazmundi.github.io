---
title: "Hmmm, AIn't I learing about AI fast enough?"
pubDate: 2025-01-25 07:35:55
categories:
  - agent
  - ai
tags:
  - animation
  - technology
---
So, my dabblings using ChatGPT to write blender addons has had mixed success. Things I dabble with to date include:



* Hooked a tool into [RLPS](https://github.com/Premik/blender_rhubarb_lipsync_ng) to borrow the json file it outputs, to [import an image list](https://github.com/OrganicMonkeyMotion/mouth_shape_animator) to act as an animated mouth of the character. You need to shrink wrap a mouth "plane" onto the characters face.
* I thought it might make sense to optionally add [joint rotation limits](https://github.com/OrganicMonkeyMotion/mixamo-rig-joint-constraint) onto mixamo rigs. The joint rotation limits were a means to help avoid collisions caused when animating bipeds that don't have human proportions. I am playing with an addtion to that which will update the control bone keyframes so you can relax the joint constraints, but that is in the background.
* Another addon, still to be posted, deals with the zillions of keyframes the MOCAP creates, to best fit fewer bezier curves to the animation. The reason is that trying to fix collisions due to character proportions, with zillions of keyframes, is NOT FUN! I may release that as an example code thingy. I have also come across [AniMatePro](https://blendermarket.com/products/animatepro), so jump onto that. I had thought of a "brush", and was tickled that a F-Curve "brush" comes with AniMatePro.
* The other thing I did was update my local copy of [AnimExtras onion skinning tool](https://github.com/iBrushC/animextras) to optioning onion a vertex group on the selected mesh. I found having the entire mesh onionskinned was often too "busy". It was a fun hack!
* Last but not least, because hand especially are a source of collisions, post mixamo animation assignment to characters without human proportions, I have been playing with working out where the collision zones are in the timeline. Works a hoot using BVHTrees based upon your vertex groups it turns out. I am playing with some form of "repulsion" to gently keep the hands apart as they enter the collision zones. Still scratching me head there with the geometry.



Now, lets not give ChatGPT too much credit. It is crap unless you work out a rigorous means to work with it.



So, I was looking around for how to set up properly for coding support. I am looking in the first instance at GroundCrew but am also looking at how CodeBERT might also heighten that approach, as I get the sense CodeBERT may be for building GroundCrew tools??! Dunna, I am talking literally outta me hat at the mo.



At the mo, I am dumping blender and its addon source into a folder to get GroundCrew to parse it in to them see what that gives me, since ChapGPT is needing a RAG it seems.
