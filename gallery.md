---
title: Gallery
permalink: /gallery
---


{% assign externalgallery = "
https://picsum.photos/seed/10/600/1200,
https://picsum.photos/seed/20/800/500,
https://picsum.photos/seed/30/900/1200,
https://picsum.photos/seed/40/900/1300,
https://picsum.photos/seed/50/750/325,
https://picsum.photos/seed/60/600,
https://picsum.photos/seed/70/700/500" %}

# External 

{% include_cached snippets/carousel.html indicators="true" controls="true" external=externalgallery %}

# External Random

{% include_cached snippets/carousel.html random="true" indicators="true" external=externalgallery %}

# Internal 

{% include_cached snippets/carousel.html internal="gallery" controls="true" %}


# Internal Random

{% include_cached snippets/carousel.html random="true" indicators="true" internal="gallery" interval="1000" %}



