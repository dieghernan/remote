---
title: Syntax highlighting demo
---


  {% assign sort =  "modified_time" %}
  
  {%- assign bricks = site.static_files -%}

{{ bricks  }}

## 2
    {%- assign bricks = bricks | sort: "{{sort}}"  | map: "path" -%}
    
{{ bricks | inspect }}
    
    {%- assign bricks = bricks | sort: "modified_time" | map: "modified_time" %}
    {{ bricks | inspect }}
    
    
{% for item in bricks %}
- {{ item }}
{% endfor %}