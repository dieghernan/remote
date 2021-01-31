---
title: Syntax highlighting demo
---

{% assign externalgallery = "
./assets/img/gallery/mario-gutierrez-dH7GC5QqO7Y-unsplash.jpg,
https://picsum.photos/seed/70/700/500,
./assets/img/gallery/patri-k5C0uJ6AIvo-unsplash.jpg,
./assets/img/gallery/city-spain-dense-17658.jpg,
./assets/img/gallery/fran-velasco-2OZrVix-nek-unsplash.jpg" %}

{%- assign bricks =include.external | strip_newlines | replace: " " , "" |split: ","  -%}

{% assign rnd1 = bricks | sample: 1 | size %}

{% assign rnd2 = bricks | sample: 1 | size %}


- {{ rnd1 }}
- {{ rnd2 }}

