---
title: "Whhhhhhhhyyyyyyyyyyyyyy?"
pubDate: 2018-08-24 23:32:07
categories:
  - docker
  - sucky-wucky-raspingbreathburry
  - the-downside-of-opensource
  - thingbox
---
Alright, so I gave up on the OrangePI as my house server because it would clap out after a week and need a reboot.
I swallowed my pride and bought a raspingdoodleburry pi and tried to set up with node-red and mqtt.  Got boring trying to sought problems with install and setup again, after all the crap I went through soughting the OPi.  So, I relented and decided to cheat and use thingbox or TB as it is affectionately euphemised.
Problems so far.

1. It took a prompt from me to get TB owners to eventually build distro that would support rpi 3B+.   That is support is now the TB 3 beta Docker based image.
2. Burnt a SD card with TB 3 beta Docker based image and verified by Etcher, inserted SD card into Pi3B+ and booted rpi,  found the "thingbox.local/" on my network and web browsered in, setup my own server name at initial prompt, fell into node-red editor, and all worked fine until I tried to do more that say hello TB.
3. Tried to download modules using module manager to find most all the google assistant based modules failed to install.  There might be more, who knows.
4. I found one module that installed, but it was lost on reboot which is not supposed to happen.
5. I tried setting up wifi but after reboot the wifi configuration was lost and I had to go back to hardwired ethernet.  TB won't even keep preferred language option after reboot.  Since it saves host name after initial start up, something is likely locking out saving post initial TB setup, before it drops into node-red editor.  Whether that is before or after the Docker daemon is started on first use of TB would be interesting.
6. I find .local only works between rpi and my PC which are both hardwired to a wifi extender.  Local seems to really mean physically local?  The rpi cannot otherwise be seen on the wifi using .local.  It may be seen using raw IP but I got bored with debugging the TB distro.
7. Why use an abbreviation for your product that is also used for Tuberculosis?

Since this is a Docker based image, and you cannot adulterate the Docker session without cracking into Docker session, and I have not ssh'd into the board since it was setup with TB image, therefore I have not touched any settings nor configuration.  It is safe to say there is something funky about the Docker image.  This is safe to say because of the promise Docker provides around container assembly and distribution.
So, I am likely back to having to go through by hand and set up the rpi with node-red and mqtt myself.   I have started playing with Docker so I might as well look at this as my Docker exam.
