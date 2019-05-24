+++
title = "idleTimerDisabled not working"
date = 2019-03-27T14:00:00-08:00
tags = ["iOS","Swift","Obj-C"]
+++
The AppDelegate’s `init` method contained the following line, which should prevent the device from going to sleep:
```
[UIApplication sharedApplication].idleTimerDisabled = YES;
```

As of iOS 12 (maybe earlier), the above code, no longer works to prevent the device from dimming and sleeping.

The solution is to enable/disable the timer in the **view controller**.  Below is my solution in Objective-C and Swift.

**Objective-C**
```
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    // Prevent the device from sleeping.
    [UIApplication sharedApplication].idleTimerDisabled = YES;
}

- (void)viewWillDisappear:(BOOL)animated {
    // Allow the device to sleep.
    [UIApplication sharedApplication].idleTimerDisabled = NO;
    [super viewWillDisappear:animated];
}
```

**Swift**
```
override func viewWillAppear(_ animated: Bool) {
    super.viewWillAppear(animated)
    // Prevent the device from sleeping.
    UIApplication.shared.isIdleTimerDisabled = true
}

override func viewWillDisappear(_ animated: Bool) {
    // Allow the device to sleep.
    UIApplication.shared.isIdleTimerDisabled = false
    super.viewWillDisappear(animated)
}
```