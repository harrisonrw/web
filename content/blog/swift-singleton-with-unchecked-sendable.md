+++
title = "Swift Singleton with @unchecked Sendable"
date = 2025-03-01T14:35:00-07:00
tags = ["Swift","Concurrency"]
+++
A **singleton** is a design pattern that ensures there is only one instance of a class. While convenient, there are drawbacks to using singletons, which are well documented elsewhere. Swift 6 provides some approaches to replacing Singletons, such as Actor. Sometimes, you run into a situation, such as re-using legacy code, where using a Singleton is preferable over refactoring to modern Swift techniques.

Pre-Swift 6, a singleton could be written like so:
```
final class MySingleton {
    static let shared = MySingleton()
    private init() { }
}
```

The above is not Thread-Safe. Swift 6 makes that very clear with the following compiler error:

**Static property 'shared' is not concurrency-safe because non-'Sendable' type 'MySingleton' may have shared mutable state**

A quick fix is to mark the class with `@unchecked Sendable`:
```
final class MySingleton: @unchecked Sendable {
    static let shared = MySingleton()
    private init() {}
}
```

`@unchecked Sendable` will suppress the error message. However, the singleton is still not thread-safe. If you are not confident that the singleton can be used safely, you will need to manually enforce thread safety using a serial dispatch queue.