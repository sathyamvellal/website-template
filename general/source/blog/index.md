---
layout: default
title: Sathyam Vellal / Posts
description: Personal Blog
published: true
---

<div class="blog">
  <div class="pl-0">
    {% assign nPosts = site.categories.blog | size %}
    {% if nPosts == 0 %}
    {% else %}
      {% for post in site.categories.blog %}
        {% include post_excerpt.html post=post %}
      {% endfor %}
    {% endif %}
    <br/>
    <hr>
  </div>
</div>
