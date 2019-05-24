+++
date = 2016-07-11T16:07:00-07:00
title = "Getting Started With Jekyll"
tags = ["jekyll"]
+++
Welcome! This is part 2 of my Switching to Jekyll series.  In this post, we will create a new repository on GitHub and then initialize a new Jekyll project.

First, you will need to install Jekyll.  On Mac OS X, the latest version of Jekyll requires Ruby v2 (or above) and RubyGems.  Since I already had those two requirements installed, all I had to do was open a terminal window and run the following command:

```
sudo gem install jekyll
```

For more information on installing Jekyll, see the [Jekyll Documentation][jekyll-install].

Next, create a new repository on GitHub.

![New GitHub Repository]({{ site.url }}/assets/jekyll-github-new-repo.png)

Now, open a terminal window, and navigate to the folder where you want to store the repository, and then run the commands below:

```    
git clone https://github.com/[YOUR GITHUB ACCOUNT]/web.git
cd web
```

Next, initialize a new Jekyll project, by running:

```
jekyll new . --force
```

Jekyll includes a development server so you can preview the site locally.  Start the server by running the command:

```
jekyll serve
```

Verify it works by pointing your web browser to:

```
http://localhost:4000
```

![Jekyll New Install - Web Browser]({{ site.url }}/assets/jekyll-new-install-browser.png)

At this point, it is a good idea to commit what you have done to GitHub. Run the following commands:

```
git add -u
git commit -m "Add initial Jekyll project files"
git push -u origin master
```

That's it!  You should now have a basic Jekyll install.  More information can be found in the [Jekyll Documentation][jekyll-docs].  Also, please checkout this project on [GitHub][my-github].

[jekyll-install]: https://jekyllrb.com/docs/installation/ 
[jekyll-docs]:    https://jekyllrb.com/docs/home/
[my-github]:      https://github.com/harrisonrw/web

