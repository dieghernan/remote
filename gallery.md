---
title: Gallery
permalink: /gallery
---


Solution:

.d-block.w-100 { height:100vh; width:auto; object-fit:cover; }

<style>

.chulapa-carousel {
  height: 66vh;
  width: auto;
  object-fit:cover;
}

</style>

{% assign externalgallery = "
https://via.placeholder.com/600/1200,
https://via.placeholder.com/130,
https://via.placeholder.com/800/500,
https://via.placeholder.com/800/600,
https://via.placeholder.com/600/800,
https://via.placeholder.com/900/1200,
https://via.placeholder.com/900/1300,
https://via.placeholder.com/750/325,
https://via.placeholder.com/2200,
https://via.placeholder.com/600,
https://via.placeholder.com/700/500" %}

# External not normalised 

{% include_cached snippets/carousel.html indicators="true" controls="true" external=externalgallery %}

# External normalised

{% include_cached snippets/carousel.html indicators="true" external=externalgallery %}


