+++
title = "Unit Testing with XCTest and @testable"
date = 2017-02-10T13:11:00-07:00
tags = ["iOS","Swift"]
+++
You no longer need to set the **Target Membership** of files you wish to test.  At the top of the file containing your XCTest, use **@testable** to include your main target.

For example, if **HelloWorld** is the name of your main target:
```
@testable import HelloWorld
```

If your main target contains a space in the name (ex. "Hello World"), then replace the spaces with underscores ("_"):
```
@testable import Hello_World
```


