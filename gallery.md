---
title: Gallery
permalink: /gallery
---


Solution:

.d-block.w-100 { height:100vh; width:auto; object-fit:cover; }

<style>

.chulapa-carousel {
  height: 66vh;
}

</style>

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

{% include_cached snippets/carousel.html indicators="true" external=externalgallery %}


