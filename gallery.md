---
title: Gallery
permalink: /gallery
---


{% assign externalgallery = "
https://picsum.photos/seed/10/600/1200,
https://picsum.photos/seed/20/800/500,
https://picsum.photos/seed/21/800/600,
https://picsum.photos/seed/21/600/800,
https://picsum.photos/seed/30/900/1200,
https://picsum.photos/seed/40/900/1300,
https://picsum.photos/seed/50/750/325,
https://picsum.photos/seed/51/2200,
https://picsum.photos/seed/60/600,
https://picsum.photos/seed/70/700/500" %}

# External not normalised 

{% include_cached snippets/carousel.html indicators="true" controls="true" external=externalgallery %}

# External normalised

{% include_cached snippets/carousel.html random="true" indicators="true" external=externalgallery %}


