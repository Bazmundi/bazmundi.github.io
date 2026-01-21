---
title: "Edits so far"
pubDate: 2024-12-19 12:54:57
categories:
  - animations-for-the-fun-of-it
tags:
  - animation
  - blender
  - graph-editor
  - key-frames
  - mixamo
---
https://youtu.be/C38CPxgUsf0

Figure 1




The thing with [Mixamo](https://www.mixamo.com/), if'm you're using non-human bipedal characters, is it happily gives you a rigged an animated character, but with a bunch of collisions of body parts that you have to fix (since it does not factor in the exaggerated limb, torso and head shapes).



Figure 1 is half way through fixing the right hand animation. I added a mic (from [BlenderKit](https://www.blenderkit.com/)) to the left hand, and still have to do a pass of fixing the left hand. The fingers on both hands are too "clenched" and passing into the hand (right hand) and mic (left hand).



If you touch anything in the generated animation (rotations, positions), it breaks things downstream. Left had position was set to put the mic in front of the mouth, so rotation still needs'a'fix'n. The right hand was waving all over the place and so was colliding with face, the left hand, and itself.



So, past about half way in Figure 1, look for the kinks in hands angles, collisions etc. in the right hand, but throughout with left hand etc. Some wild contortions due to changes up stream.



The thing with Mixamo animations, they seem to want to jam a keyframe in every frame. So, some of the fixing started out as ALT-O so as to smooth curves. However, there is no alternative to ALT-O to "sharpen" curves. Hmmmmm. Then, it clicked, and I would delete peaks and troughs over an expanse of frames and replace with beziers between inflection points of same, to have more control when tweening frames.



It's a bit like squeezing out a tube of tooth paste. You have to start at one end and just squeeze out along the length.



So, this is a good way to learn about animation, since Mixamo does a lot of the hard work. The tweaking gives you a good feel for how to work the tweening beTWEEN the keyframes.



I found setting up with the top, plan, and elevation views is a must for tweaking. Especially since anything to do especially with rotations really needs all three views to get clarity of which axis (or axes) are best tweaked.



SO MUCH FRACKING FUN! Though it really is slow but as you get better, it is rewarding.



PS, the "GO SLOW" button on my new trackball GOLD!
