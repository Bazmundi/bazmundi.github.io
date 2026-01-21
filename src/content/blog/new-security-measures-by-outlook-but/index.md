---
title: "New Security Measures by Outlook but ..."
pubDate: 2014-03-01 23:15:05
---
... what about the Use Cases?
So, I go to log into Outlook (formally Hotmail) and get a "You can't get in until you go through a new security setup".
Not something I wanted to do in a rush to get of Uni emails.
There was a vague warning about your account being locked for 30 days as part of the process.
Just that, locked out for 30 days.  Ominous yes?  I am checking URL at this stage to see if my account is being hacked and this is a phish.
Then it requires you to use email backup email addresses attached to your account for verification.
Go figure both email backups on my account were @hotmail.com and subject to the same lock out yes.
Now one of those emails accounts had actually expired as I hadn't used it for yonks AND it was also the first in the drop down list SO sort of kinda became the default backup email address.
Anyway, option to use something other than the attached backup email address so I type in a gmail account and it sends me a 4 digit code.
So, still a little confused about the claimed 30 day lockout I go back in to use the 4 digit code.  It balks of course with a request for a 7 digit code?!
Thinking now they are really locking you out for 30 days as part of the security check.  Nah, they wouldn't would they?
So, because mainly I spent my formative career in software maintenance thence onto CSCI and system testing and integration my bug/unfortunate\_feature decoding gland kicks in.
Going back to the stage the security check is at there are those pesky backup emails with asterisk masking out some of the address name.  Where I was entering the four digit code, and getting the error response, was actually an email address verification field so it turned out that you had to select one of the alternate email addresses in the drop down and type out that email address as a verification (and not the 4 digit code you got).
This sent a 7 digit code to the email address you selected.
Go figure, I selected the first one in the drop down, the expired one.  The system happily told me it "sent" the email even though errors in existance of email addresses are detectable - and go figure it was a hotmail address so either they didn't check the livedness of the email address or they aren't really deleting accounts yadda.
Anyway, small amount of angst now arising because I realized if it thinks it sent my details to the non existent account then if I tried using the second account account, to get a second email sent (to a potentially locked hotmail account) will it have already lock me out by going to the next security step.
Phew! It actually let me resend to the second email address and I got a code.  Now think about this, it has locked one of my hotmail accounts and not the other???  Good for me but WTFO.
All good yes. But what if the second email address had also expired? Why wouldn't you let me do the transaction via the option I used in the first step (to use the email alternate email address that wasn't attached to the account as a backup).
The greatest fear was having to ring Microsoft to sort it out, or worse use there help website.  You've seen their help site right?  You need to do a 12 week community based course to get a handle on that sucker - which is no help at all.
[polldaddy poll=7842255]
