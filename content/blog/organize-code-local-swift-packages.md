+++
title = "Organize Code with Local Swift Packages"
date = 2024-09-25T09:17:00-07:00
tags = ["Swift", "Xcode"]
+++
There are several benefits to organizing your code into modules:
* Readability
* Testability
* Reusability
* Maintainability
* And more ...

By using an Xcode Workspace and Swift Packages, a monolithic project can be split up and organized, into smaller modules or packages. Utilities, for example, can go in one package, and the Data Layer can go in another package.

Swift Packages can be local or remote. If the module can be used by other projects or teams, then consider using a **remote** package. In which case, the remote package will require its own git repository. If the module is only usable by the main application, then use a **local** package. The local package will live within the git repository of the main application. In this article, we’re going to use a **local** package.

## The Steps

The following steps describe how to add a local “MyLibrary” package to an “Example” project.

**Using Xcode 16**

1. Checkout the `starter-project` on GitHub:
https://github.com/harrisonrw/swift-local-package-example

The example project is a simple SwiftUI app. 

![SwiftUI App](/images/blog/organize-code-local-swift-packages/swiftui-app.png)

Using the Project Navigator, make note of the initial project structure.

![Project Navigator](/images/blog/organize-code-local-swift-packages/project-navigator-1.png)

`Foo.swift` contains a struct that will be moved to a Swift Package.
```
struct Foo {
    var bar = 0
}
```

`ContentView.swift` defines the UI in a SwiftUI View. There is a state property for `Foo`. A button displays the current value of `foo.bar`. When the button is pressed, the value of `foo.bar` is incremented.
```
// ...
struct ContentView: View {
    @State var foo = Foo()
    // ...
    Button("Counter = \(foo.bar)") {
        foo.bar += 1
    }
//...
```

2. Create a Workspace. Name it `Example.xcworkspace` and save it in the same directory as the `.xcodeproj` file. See [Manage Multiple Projects with an Xcode Workspace](/blog/manage-multiple-projects-xcode-workspace) to learn how to create an Xcode Workspace. 

3. Create a Swift Package by clicking `File > New > Package`.

4. Choose a Template (Multiplatform > Library). Click **Next**.

![Package Template](/images/blog/organize-code-local-swift-packages/package-template.png)

5. Choose a Testing System. Click **Next**.

![Testing System](/images/blog/organize-code-local-swift-packages/testing-system.png)

6. Set **Save As** to “MyLibrary” in the same directory as the `.xcodeproj` and `.xcworkspace` files.

![Save As](/images/blog/organize-code-local-swift-packages/save-as.png)

7. Set **Add to**, to the name of the workspace: “Example”.

![Add To](/images/blog/organize-code-local-swift-packages/add-to.png)

8. Verify your configuration matches the screenshot below and then click **Create**.

![Package Save As Panel](/images/blog/organize-code-local-swift-packages/package-save-as-panel.png)

9. In Project Navigator, the file structure should look something like this:

![Project Navigator](/images/blog/organize-code-local-swift-packages/project-navigator-2.png)

10. Move `Foo.swift` to MyLibrary:

![Project Navigator](/images/blog/organize-code-local-swift-packages/project-navigator-3.png)

11. Try to build the Example app. It should fail with `Cannot find 'Foo' in scope`.

12. Since `Foo` is in a separate package, we need to add the package dependency to the “Example” project. Under `Project > Package Dependencies`, click on the **+** button.

![Package Dependencies](/images/blog/organize-code-local-swift-packages/package-dependencies.png)

13. Click **Add Local**.

14. Select the folder that contains the package: “MyLibrary”. Click **Add Package**.

![Add Package](/images/blog/organize-code-local-swift-packages/add-package.png)

15. Click **Add Package** again.

![Add Package](/images/blog/organize-code-local-swift-packages/add-package-2.png)

16. MyLibrary should added to the Example project:

![Package Dependencies](/images/blog/organize-code-local-swift-packages/package-dependencies-2.png)

17.  Add this line to `ContentView.swift` to import MyLibrary:
```
import MyLibrary
```

18. Try to build the Example app again. It should still fail with `Cannot find 'Foo' in scope`. We need to make `Foo` accessible to callers outside of the package.

19. In `Foo.swift`, mark the struct and property as `public`. Also create a public initializer because the default init has `internal` protection level.
```
public struct Foo {
    public var bar = 0
    public init() { }
}
```

20. Build the Example app again. This time it should succeed.

For reference, you can checkout the final project on GitHub:
https://github.com/harrisonrw/swift-local-package-example

## Conclusion

Now you can apply these same steps to organize and improve the modularity of your own projects. Thank you for reading.