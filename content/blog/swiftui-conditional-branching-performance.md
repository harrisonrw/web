+++
title = "Performance of SwiftUI Views with Conditional Branching"
date = 2024-11-22T13:03:00-07:00
tags = ["SwiftUI"]
+++
Improve the performance of your SwiftUI views by replacing **if-else** and **switch** statements with the **ternary** operator. 

To illustrate the issue, let’s start with the following code that uses an if-else statement to set the foreground color of an image:

```
struct ContentView: View {
    @State private var isFavorite = true

    var body: some View {
        if isFavorite {
            Image(systemName: "star.fill")
                .foregroundStyle(Color.yellow)
        } else {
            Image(systemName: "star.fill")
                .foregroundStyle(Color.black)
        }
    }
}
```

The above code has two issues. First, there is some duplicate code. Second, toggling **isFavorite** between true and false causes SwiftUI to tear down and recreate the entire view. SwiftUI treats the if-else paths as separate Views and will do extra work to process the if and else paths. The same performance issue occurs with switch statements.

A quick solution to both the duplicate code and performance issue is to replace the if-else statement with a ternary operator:

```
Image(systemName: "star.fill")
	.foregroundStyle(isFavorite ? Color.yellow : Color.black)
```