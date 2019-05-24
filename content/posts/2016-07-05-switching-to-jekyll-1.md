+++
date = 2016-07-05T18:28:34-07:00
title = "Switching to Jekyll"
tags = ["jekyll"]
+++
I’m switching this site to use [Jekyll][jekyll-home], a static web site generator.  Jekyll takes as input, a configuration file, any templates you define, and blog posts in the form of markdown.  Then it runs the files through a converter and outputs a complete web site in HTML and CSS.  Then you can upload the website files to your web server.  

Since the late 90s, this site has had a number of different designs.  My favorite design was a blog of my programming notes.  It provided a useful resource to visitors to my site and for myself (I often used the site to quickly look stuff up).  

My programming notes blog was first implemented in plain HTML.  To improve the maintainability of the site, I implemented a custom CMS in PHP and MySQL, and later switched to WordPress.

WordPress installations require frequent maintenance to stay secure.  The update process involves backing up the database and content, installing the latest version of WordPress, updating plugins, updating themes, and fixing any issues that arise.  I didn’t (and still don’t) have time to maintain a WordPress install, so eventually I stopped posting my notes.  I never stopped keeping notes.  That information is stuck in various note taking applications.

I would like to once again share my programming notes, but I don’t want the headache of maintaining a CMS.  My main requirement is a lightweight system with easy to manage templates to separate the content from the design.

Jekyll looks like an ideal solution.  Benefits of a site built with Jekyll:

* Content is separated from the design.
* No database to maintain.
* No security issues related to running a dynamic site.
* Easy to view the web site locally.
* Source Code Version Control.
* Supports Markdown.
* Code syntax highlighting.

This is my first post with Jekyll.  The site is currently using the basic Jekyll design.  I’ll be making a series of posts to document each step of customizing the site.  The source code for the site is on [GitHub][my-github], so please check it out.

[jekyll-home]: http://jekyllrb.com
[my-github]:   https://github.com/harrisonrw/web