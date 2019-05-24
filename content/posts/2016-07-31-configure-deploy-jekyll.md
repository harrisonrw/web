+++
date = 2016-07-31T9:43:00-07:00
title = "Configure and Deploy Jekyll"
tags = ["jekyll"]
+++
Welcome! This is part 3 of my Switching to Jekyll series.  In this post, we will configure and deploy the Jekyll we installed in the [previous post][prev-post].

In the root directory of your jekyll install, open the **_config.yml** file in a text editor.

Modify the settings to your liking.  I prefer to use [GitHub Flavored Markdown][gfm-parser] (GFM).  To enable GFM, add the following to **_config.yml**:

```
markdown: kramdown

kramdown:
  input: GFM
```

Modifications to _config.yml require the jekyll server to be restarted.  So restart the jekyll server and verify it works by pointing your web browser to:

```
http://localhost:4000
```

Now we are ready to deploy the generated static files to a web server.  Deploy by uploading the contents of the **_site** directory to your web server.

More information can be found in the [Jekyll Documentation][jekyll-docs].  Also, please checkout this project on [GitHub][my-github].

[prev-post]:      {% post_url 2016-07-11-getting-started-with-jekyll %}
[gfm-parser]:     http://kramdown.gettalong.org/parser/gfm.html
[jekyll-docs]:    https://jekyllrb.com/docs/home/
[my-github]:      https://github.com/harrisonrw/web


