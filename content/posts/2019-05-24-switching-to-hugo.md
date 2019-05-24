+++
title = "Switching to Hugo"
date = 2019-05-24T12:49:00-08:00
tags = ["Hugo","Jekyll"]
+++
I'm switching this web site from [Jekyll](https://jekyllrb.com/) to [Hugo](https://gohugo.io/). Like Jekyll, Hugo is a static web site generator. The reason for the switch is that I'm getting tired of troubleshooting my [Ruby](https://www.ruby-lang.org/en/) environment. In addition to Jekyll, I'm dependent on Ruby for [Cocoapods](https://cocoapods.org/) and [Fastlane](https://fastlane.tools/). I manage to break my Ruby environment often. I'm probably doing something wrong, but not sure what that is yet.

Hugo is implemented in [Go](https://golang.org/) and was a breeze to [install](https://gohugo.io/getting-started/quick-start/) with Homebrew:
```
brew install hugo
```