+++
title = "Full Width Separator Lines in UITableView"
date = 2017-01-27T09:55:00-07:00
tags = ["iOS","Obj-C"]
+++
Set the following in your **tableView:cellForRowAtIndexPath:**

**Objective-C**
```
cell.preservesSuperviewLayoutMargins = NO;
cell.separatorInset = UIEdgeInsetsZero;
cell.layoutMargins = UIEdgeInsetsZero;
```
