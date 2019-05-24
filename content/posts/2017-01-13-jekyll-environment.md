+++
title = "Jekyll Environment"
date = 2017-01-13T11:01:00-07:00
tags = ["jekyll"]
+++
When you run either of the two commands below, by default, the **Development** environment is used:
```
$ jekyll build
$ jekyll serve
```

To use the **Production** environment, set the **JEKYLL_ENV** parameter.  For example:
```
$ JEKYLL_ENV=production jekyll build
$ JEKYLL_ENV=production jekyll serve
```


