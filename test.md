---
title: Syntax highlighting demo
---


  {% assign sort =  "modified_time" %}
  {%- assign bricks = site.static_files | where: "image_col", "gallery" -%}

    {%- assign bricks = bricks | sort: "{{sort}}" | reverse | map: "path" -%}
    
 {{ bricks }}