+++
title = "CocoaPods: Unable to find host target(s) for MessagesExtension"
date = 2017-01-04T12:47:00-07:00
tags = ["iOS"]
+++
I was trying to add Google Analytics to a MessagesExtension.  As follows is an example of my Podfile:


```
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'
use _frameworks!

target 'SampleApp' do
  #various pods
end

target ‘MessagesExtension’ do
  pod ‘Google/Analytics’
end
```

When I ran `pod install`, I received the following error:
>[!] Unable to find host target(s) for MessagesExtension.  Please add the host targets for the embedded targets in the Podfile.

I confirmed that the MessagesExtension was spelled correctly in both the Podfile and in Xcode.

### Solution

**1. Backup the Podfile.**
```
$ mv Podfile Podfile.bak
```

**2. Create a new Podfile.**
```
$ pod init
```

**3. Copy and paste the target configuration from the Podfile.bak to the new Podfile.**

**4. Install the pods.**
```
$ pod install
```