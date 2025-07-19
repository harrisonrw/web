+++
title = "Swift tip: Properly deprecating code"
date = 2025-07-18T18:00:00-07:00
tags = ["Swift"]
+++
As codebases evolve, we inevitably accumulate functions, classes, and APIs that need to be removed or replaced. Use `@available(*, deprecated, message: "...")` to mark functions as deprecated in your Swift projects:
```
@available(*, deprecated, message: "This function will be removed in a future release.")
func oldFunction() {
    // legacy code
}
```
This gives developers, including your future self, a clear heads-up about upcoming changes while keeping code functional during the transition period. The compiler will show warnings but won't break existing builds.

![Swift Deprecation Warning](/images/blog/swift-deprecating-code/swift-deprecated-function.png)

You can deprecate almost anything in Swift:
* Classes, structs, enums, protocols
* Functions, methods, initializers
* Properties and subscripts
* Enum cases and operators

```
@available(*, deprecated, message: "Use NewUserModel instead")
struct UserModel {
    // ...
}

@available(*, deprecated, message: "Use isEnabled instead")
var isActive: Bool = true

@available(*, deprecated, message: "Use UserRole.admin instead")
enum Status {
    case active
}
```

Swift's deprecation system is comprehensive - you can gradually migrate any part of your API while maintaining backward compatibility and providing clear guidance to developers.

**Pro tip: Include migration guidance in your message for an even better developer experience!**