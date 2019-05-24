+++
title = "8 Tips for Migrating a Salesforce Mobile SDK Project from Objective-C to Swift"
date = 2019-04-26T11:52:00-08:00
tags = ["iOS","Swift","Obj-C","Salesforce"]
+++
Recently, I migrated parts of an iOS app from Objective-C to Swift. The app is for checking in attendees at events and uses the [Salesforce Mobile SDK](https://github.com/forcedotcom/SalesforceMobileSDK-iOS).  I would like to share with you, some things I learned from the migration to Swift and updating to the latest Salesforce Mobile SDK.

First, the reasons (some are subjective) why I migrated parts of the app from Objective-C to Swift.
1. The existing Objective-C code base contained a lot of [technical debt](https://en.wikipedia.org/wiki/Technical_debt).
2. Salesforce Mobile SDK, which the app is tightly integrate with, is moving to Swift.
3. Swift is a joy to write.
4. Swift is easier to read.
5. Swift is safer to use.

### Tip 1
Before you migrate to Swift, update your Objective-C code to modern syntax and practices. Xcode can really help you, by suggesting changes or making the changes automatically.

### Tip 2
When you are ready to start writing some Swift, start with something small. Perhaps a model or a small view.

### Tip 3
Keep things Swifty. While a straight conversion from Objective-C to Swift, can work, there is often a better way to implement something in Swift. For example, instead of using a `for loop` to iterate an array and do some filtering, use a `compactMap` method.

### Tip 4
Replace the Objective-C `SFRestDelegate` with the Swift `RestClient`. 
In keeping with Single Responsibility Principle, keep your RestClient separate from your View Controller. This will help you avoid massive view controllers.

### Tip 5
To have your Swift code interoperable with your Objective-C code, you will need to prefix Swift class and properties with `@objc`.

### Tip 6
In Swift, you can define optional properties, such as a nullable Integer. Such a type is not available in Objective-C. To access a nullable Integer, you will need a wrapper method. Create a getter or setter method in Swift and remember to prefix it with `@objc`.

### Tip 7
Unit test your code for greater confidence when refactoring Objective-C to Swift. If possible, write unit tests before you start changing things.

### Tip 8
Last, but not least, please keep in mind that you do not need migrate your entire project to Swift.