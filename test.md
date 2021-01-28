---
title: Syntax highlighting demo
---


  {% assign sort =  "modified_time" %}
  
  {%- assign bricks = site.static_files -%}

{{ bricks | inspect }}

## 2
    {%- assign bricks = bricks | sort: "{{sort}}" | reverse | map: "path" -%}
    
{{ bricks | inspect }}
    
    
    
{% for item in bricks %}
- {{ item }}
{% endfor %}