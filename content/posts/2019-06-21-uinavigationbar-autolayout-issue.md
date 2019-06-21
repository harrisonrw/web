+++ 
title = "UINavigationBar Autolayout Issue"
date = 2019-06-21T13:48:43-07:00
tags = ["iOS"]
+++
Some autolayout constraints broke when I tested an app on an iPad Pro 12.9-inch (3rd generation) running iOS 12.4.1. The issue did not occur when I tested on an iPad Pro 9.7-inch.

```
[LayoutConstraints] Unable to simultaneously satisfy constraints.
	Probably at least one of the constraints in the following list is one you don't want. 
	Try this: 
		(1) look at each constraint and try to figure out which you don't expect; 
		(2) find the code that added the unwanted constraint or constraints and fix it. 
(
    "<NSLayoutConstraint:0x600001effa20 UILabel:0x7ff4aa4316c0'Select Department'.top >= UILayoutGuide:0x6000004abaa0'TitleView(0x7ff4ac052920)'.top   (active)>",
    "<NSLayoutConstraint:0x600001eff930 UILabel:0x7ff4aa4316c0'Select Department'.firstBaseline == UILayoutGuide:0x6000004abaa0'TitleView(0x7ff4ac052920)'.top + 28   (active)>"
)

Will attempt to recover by breaking constraint 
<NSLayoutConstraint:0x600001effa20 UILabel:0x7ff4aa4316c0'Select Department'.top >= UILayoutGuide:0x6000004abaa0'TitleView(0x7ff4ac052920)'.top   (active)>

Make a symbolic breakpoint at UIViewAlertForUnsatisfiableConstraints to catch this in the debugger.
The methods in the UIConstraintBasedLayoutDebugging category on UIView listed in <UIKitCore/UIView.h> may also be helpful.
```

The references to `TitleView` and the `UILabel`’s title are clues that the source of the issue was the title in the `UINavigationBar`. The autolayout constraints for `UINavigationBar` and it’s child views are all handled by UIKit. However, the app did set a custom font in the `UINavigationBar`’s title.

The size of the font for the title in the `UINavigationBar` was too large and caused the issue.
```
navigationBar.titleTextAttributes = [
  .font: UIFont(name: "American Typewriter", size: 32.0)!
]
```

Reducing the size of the font, resolved the issue.
```
navigationBar.titleTextAttributes = [
	.font: UIFont(name: "American Typewriter", size: 30.0)!
]
```
