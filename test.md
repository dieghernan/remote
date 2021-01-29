---
title: Syntax highlighting demo
---


{% assign image_files = site.static_files %}
{% for myimage in image_files %}
 - {{ myimage.modified_time }}
{% endfor %}

{{ image_files[1] | inspect }}