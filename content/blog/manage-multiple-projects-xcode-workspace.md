+++
title = "Manage Multiple Projects with an Xcode Workspace"
date = 2024-09-23T15:38:00-07:00
tags = ["Swift", "Xcode"]
+++
Use an **Xcode Workspace** to manage the dependencies between multiple projects. For example, you have an app that is dependent on a library that needs to be compiled and linked. Xcode can use the workspace to compile the library first, then link it to your app. If your project uses [Cocoapods](https://cocoapods.org), then it’s using a Workspace.

How to create a workspace:

1. Open your Xcode Project.
2. Click `File > New > Workspace`.
3. Specify a name for the `.xcworkspace` and Save it.
4. In the Project Navigator, Control-click in the empty space and choose **Add Files to “Workspace Name”**.
5. Select the `.xcodeproj` file and click Add.
6. Leave the **Action** set to “Reference files in place”.
7. Click Finish.
8. Close and re-open the `.xcworkspace` file to force Xcode to load the contents of the project.

