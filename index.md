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

```yaml
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

```


    <!-- 1. Define some markup -->
    <button class="btn" data-clipboard-text="1">Copy</button>
    <button class="btn" data-clipboard-text="2">Copy</button>
    <button class="btn" data-clipboard-text="3">Copy</button>
    
        <script>
    var clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
    </script>


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