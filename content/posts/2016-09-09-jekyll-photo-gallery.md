+++
title = "Jekyll Photo Gallery"
date = 2016-09-09T8:07:00-07:00
tags = ["jekyll"] 
+++
Welcome to Part 4 of my Switching to Jekyll series!  In this post we will create a photo gallery of projects.

<h4>Step 1: Create a photo-gallery stylesheet.</h4>

In the **/css** folder, create a **custom.css** file with the following contents:

```
photo-gallery, .photo-gallery li {
  list-style: none;
  padding: 0;
  text-align: center;
}

.photo-gallery li {
  display: inline-block;
  width: 32%;
}

.photo-gallery li img {
  width: 100%;
}

a, figure {
  display: inline-block;
}
``` 

Modify the custom.css file to suit your needs.

<h4>Step 2: Add a reference to the custom.css file.</h4>

Edit **/_includes/head.html** and add the following to the **<head>** section:
```
<head>
  ...
  <link rel="stylesheet" href="{{ "/css/custom.css" | prepend: site.baseurl }}">
</head>
```

<h4>Step 3: Copy the images somewhere.</h4>

For each project, I have a 388 x 288 png image.  I'm storing them in **/projects/img**

<h4>Step 4: Define the images in the page's front matter.</h4>

```
---
layout: page
title: Projects
permalink: /projects/
images:
  - image_path: /projects/img/speakcolors.png
    title: SpeakColors
    link: /projects/speakcolors/
  - image_path: /projects/img/speechcards.png
    title: Speech Cards
    link: /projects/speech-cards/
  - image_path: /projects/img/beat-tracker.png
    title: Beat Tracker
    link: /projects/beat-tracker/
---
```

<h4>Step 5: Add the photo-gallery to the page.</h4>

```
{% raw %}
<ul class="photo-gallery">
  {% for image in page.images %}
    <li>
      <figure>
        <a href="{{ image.link }}"><img src="{{ image.image_path  }}" alt="{{ image.title }}" border="0"/></a>
        <figcaption><a href="{{ image.link }}">{{ image.title }}</a></figcaption>
      </figure>
    </li>
  {% endfor %}
</ul>
{% endraw %}
```

Checkout the the <a href="/projects">Projects</a> page for the complete version of this photo gallery.  The commit for adding the projects photo gallery can be found on [GitHub][github-commit].  More information about about creating a Jekyll Photo Gallery can be found on [Jekyll Tips][jekyll-tips].

[github-commit]:        https://github.com/harrisonrw/web/commit/1a19a36ddc4914aab662b0ec716e643d71e8ed8f
[jekyll-tips]: http://jekyll.tips/jekyll-casts/photo-gallery/



