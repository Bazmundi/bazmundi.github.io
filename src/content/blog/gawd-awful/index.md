---
title: "Gawd Awful!~"
pubDate: 2021-02-02 09:36:54
categories:
  - rant
  - the-downside-of-opensource
---
So, a little while ago I had ordered 5 boards based upon the [ESP32 WiFi Robot design](https://hackaday.io/project/163542-esp32-wifi-robot).



I actually just uploaded the Eagle Schematics to my [Osh Park](https://oshpark.com/) account.



Now I was interested in buying the parts. Apparently the BOM was in the Eagle files.



Not having Eagle, I opted to suck the files into KiCad and then use the BOM generation from there.



Don't bother. The BOM generation tool was generating error reports across a range of BOM scripts I tried, including the file suggest by DigiKey's [Mr Smug](https://www.youtube.com/watch?v=I7GUiGoD1w8&t=150s).



In fact I was able to hang KiCad a couple to three times while trying to generate BOM from the imported file.



May have been a problem with the imported file? Maybe. Who knows?



So the $64,000 question, why did I not use Eagle to generate the BOM?



I would love to! Except ...



I downloaded Eagle and tried to register. The Eagle server never did and has never actually EVER sent me a confirmation email needed to finalise a registration. What? Yes I did look in junk emails etc. Nothing. Nada. Nicht. Not a sausage.



So, I tried [KiBOM download](https://github.com/SchrodingersGat/KiBoM). Go figure, the change in PIP is blowing up the install. First I had come across this October 2020 fuck-up. Good one Python weeners. That's up there with the dopey decision not to release JRE past Java 8 and then put the burden on users to build JRE to run code, given the dopey developers don't bother providing a JRE nor a dependencies list. Yes you have tools to find out but who wants to spend every waking moment on our building JRE, to meet the range of dependencies across the multiple java apps you'll want to run. I mean, eventually you might as well have the standard JRE, if you've enough java apps you'll likely pull in a fair collection of the all likely dependencies. Eh? Yeah, I put 2 and 2 together to work out KiBOM is/was the problem in KiCAD.



So, again, no such thing as Users no more. I feel pressganged every time I want to use a open source piece of junk into getting into the internals of the tools instead of just using them.



Came across [KiCost](https://github.com/xesscorp/KiCost). Great, if you have a BOM from KiCAD (insert emoji for "irony" if ever someone feels compelled to craft an emoji for irony, I suspect the substitute is Mr Happy Poo).



Tried downloading KiCost from Github. Don't bother, too many errors when installing using python setup.py install. Some were redeemable by installing missing dependencies (that should have been in the requirements.txt but were not). One did not resolve as I did install the supposed missing dependency but KiCost install kept reporting it missing. Use PyPi instead to get to [documents](https://xess.com/KiCost/docs/_build/singlehtml/index.html#document-installation). I might have said my bad but why have a dopey faulty github "main" version?
