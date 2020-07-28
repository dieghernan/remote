---
layout: landingpage
title: Landing page
subtitle: First impression is the last impression
categories: [demo, landingpage]
header_type: hero
tags: [layout-landingpage,header-hero, social-links, tags, categories, bottom-navs, date, comments, image, author]
date: 2020-01-04
show_date         : true
show_sociallinks  : true
show_tags         : true
show_categories   : true
show_bottomnavs   : true
show_comments     : true
show_author       : true
---

{%- if site.chulapa-skin.skin == 'preptor' -%}
	{%- assign name = 'Preptor' - %}
	{%- assign author = 'Tophat' - %}
	{%- assign url = 'https://themesguide.github.io/top-hat/dist/' - %}
{%- elsif site.chulapa-skin.skin == 'lymcha' -%}
	{%- assign name = 'Lymcha' - %}
	{%- assign author = 'Tophat' - %}
	{%- assign url = 'https://themesguide.github.io/top-hat/dist/' - %}
{%- elsif site.chulapa-skin.skin == 'hootstrap' -%}
	{%- assign name = 'Hootstrap' - %}
	{%- assign author = 'Tophat' - %}
	{%- assign url = 'https://themesguide.github.io/top-hat/dist/' - %}
{%- elsif site.chulapa-skin.skin == 'deeply' -%}
	{%- assign name = 'Deeply' - %}
	{%- assign author = 'Tophat' - %}
	{%- assign url = 'https://themesguide.github.io/top-hat/dist/' - %}
{%- elsif site.chulapa-skin.skin == 'graymor' -%}
	{%- assign name = 'Graymor' - %}
	{%- assign author = 'Tophat' - %}
	{%- assign url = 'https://themesguide.github.io/top-hat/dist/' - %}
{%- elsif site.chulapa-skin.skin == 'wandoo' -%}
	{%- assign name = 'Wandoo' - %}
	{%- assign author = 'Tophat' - %}
	{%- assign url = 'https://themesguide.github.io/top-hat/dist/' - %}
{%- elsif site.chulapa-skin.skin == 'sketchy' -%}
	{%- assign name = 'Sketchy' - %}
	{%- assign author = 'Bootswatch' - %}
	{%- assign url = 'https://bootswatch.com/' - %}
{%- elsif site.chulapa-skin.skin == 'lux' -%}
	{%- assign name = 'Lux' - %}
	{%- assign author = 'Bootswatch' - %}
	{%- assign url = 'https://bootswatch.com/' - %}
{%- elsif site.chulapa-skin.skin == 'journal' -%}
	{%- assign name = 'Journal' - %}
	{%- assign author = 'Bootswatch' - %}
	{%- assign url = 'https://bootswatch.com/' - %}
{%- elsif site.chulapa-skin.skin == 'minty' -%}
	{%- assign name = 'Minty' - %}
	{%- assign author = 'Bootswatch' - %}
	{%- assign url = 'https://bootswatch.com/' - %}
{%- elsif site.chulapa-skin.skin == 'twitter' -%}
	{%- assign name = 'Twitter' - %}
	{%- assign author = 'dieghernan' - %}
	{%- assign url = 'https://github.com/dieghernan' - %}
{%- elsif site.chulapa-skin.skin == 'twitter-dim' -%}
	{%- assign name = 'TwitterDim' - %}
	{%- assign author = 'dieghernan' - %}
	{%- assign url = 'https://github.com/dieghernan' - %}
{%- elsif site.chulapa-skin.skin == 'twitter-lights-out' -%}
	{%- assign name = 'TwitterLightsOut' - %}
	{%- assign author = 'dieghernan' - %}
  	{%- assign url = 'https://github.com/dieghernan' - %}
  {%- elsif site.chulapa-skin.skin == 'chulapa' -%}
  	{%- assign name = 'Chulapa' - %}
  	{%- assign author = 'dieghernan' - %}
  	{%- assign url = 'https://github.com/dieghernan' - %}
  {%- elsif site.chulapa-skin.skin == 'pear' -%}
  	{%- assign name = 'Pear' - %}
  	{%- assign author = 'dieghernan' - %}
  	{%- assign url = 'https://github.com/dieghernan' - %}
  {%- elsif site.chulapa-skin.skin == 'sunset' -%}
  	{%- assign name = 'Sunset' - %}
	{%- assign author = 'Tophat' - %}
	{%- assign url = 'https://themesguide.github.io/top-hat/dist/' - %}  {%- else -%}
  {%- endif -%}
  
  
  {{ name }} {{ author }}





<img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/dieghernan/remote?color=green&include_prereleases&style=plastic">

Click [**Use this template**](https://github.com/dieghernan/chulapa-101/generate) button above for cloning this repo and get started with [Chulapa Jekyll theme](https://github.com/dieghernan/chulapa).

Contains basic configuration to get you a site with:

- Sample posts and [paginated blog index](./blog/).
- Sample collection with Markdown and kramdown cheatsheets and [collection index](./cheatsheets).
- Archive pages for posts grouped by year, category, and tag.
- Demo page with the different Bootstrap components and how they look with the actual skin settings.
- Sample 404 page.
- Site search with Lunr.
- Sample `_config` with minimal configuration.
- Sample `.travis.yml` for using Algolia+Travis CI.
- Sample files for extending the theme with your own scripts and css.

On addition, `jekyll-sitemap` generates your sitemap on [./sitemap.xml](./sitemap.xml), and Chulapa generates an Atom feed on [./atom.xml](./atom.xml) and a RSS 2.0 feed on [./rss.xml](./rss.xml).

[Configure as necessary](https://dieghernan.github.io/chulapa/docs/02-config) and replace sample content with your own.