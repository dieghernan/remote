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

<div class="sourceCode" id="cb1"><pre class="sourceCode r"><code class="sourceCode r"><a class="sourceLine" id="cb1-1" title="1"><span class="kw"><a href="https://rdrr.io/r/base/library.html">library</a></span>(classInt)</a>
<a class="sourceLine" id="cb1-2" title="2"></a>
<a class="sourceLine" id="cb1-3" title="3"><span class="co">#1. Characterization of heavy-tail distributions----</span></a>
<a class="sourceLine" id="cb1-4" title="4"><span class="kw"><a href="https://rdrr.io/r/base/Random.html">set.seed</a></span>(<span class="dv">1234</span>)</a>
<a class="sourceLine" id="cb1-5" title="5"><span class="co">#Pareto distribution a=1 b=1.161 n=1000</span></a>
<a class="sourceLine" id="cb1-6" title="6">sample_par &lt;-<span class="st"> </span><span class="dv">1</span> <span class="op">/</span><span class="st"> </span>(<span class="dv">1</span> <span class="op">-</span><span class="st"> </span><span class="kw"><a href="https://rdrr.io/r/stats/Uniform.html">runif</a></span>(<span class="dv">1000</span>)) <span class="op">^</span><span class="st"> </span>(<span class="dv">1</span> <span class="op">/</span><span class="st"> </span><span class="fl">1.161</span>)</a>
<a class="sourceLine" id="cb1-7" title="7">opar &lt;-<span class="st"> </span><span class="kw"><a href="https://rdrr.io/r/graphics/par.html">par</a></span>(<span class="dt">no.readonly =</span> <span class="ot">TRUE</span>)</a>
<a class="sourceLine" id="cb1-8" title="8"><span class="kw"><a href="https://rdrr.io/r/graphics/par.html">par</a></span>(<span class="dt">mar =</span> <span class="kw"><a href="https://rdrr.io/r/base/c.html">c</a></span>(<span class="dv">2</span>, <span class="dv">4</span>, <span class="dv">3</span>, <span class="dv">1</span>), <span class="dt">cex =</span> <span class="fl">0.8</span>)</a>
<a class="sourceLine" id="cb1-9" title="9"><span class="kw"><a href="https://rdrr.io/r/graphics/plot.html">plot</a></span>(</a>
<a class="sourceLine" id="cb1-10" title="10">  <span class="kw"><a href="https://rdrr.io/r/base/sort.html">sort</a></span>(sample_par, <span class="dt">decreasing =</span> <span class="ot">TRUE</span>),</a>
<a class="sourceLine" id="cb1-11" title="11">  <span class="dt">type =</span> <span class="st">"l"</span>,</a>
<a class="sourceLine" id="cb1-12" title="12">  <span class="dt">ylab =</span> <span class="st">"F(x)"</span>,</a>
<a class="sourceLine" id="cb1-13" title="13">  <span class="dt">xlab =</span> <span class="st">""</span>,</a>
<a class="sourceLine" id="cb1-14" title="14">  <span class="dt">main =</span> <span class="st">"80/20 principle"</span></a>
<a class="sourceLine" id="cb1-15" title="15">)</a>
<a class="sourceLine" id="cb1-16" title="16"><span class="kw"><a href="https://rdrr.io/r/graphics/abline.html">abline</a></span>(<span class="dt">h =</span> <span class="kw"><a href="https://rdrr.io/r/stats/quantile.html">quantile</a></span>(sample_par, <span class="fl">.8</span>) ,</a>
<a class="sourceLine" id="cb1-17" title="17">       <span class="dt">lty =</span> <span class="dv">2</span>,</a>
<a class="sourceLine" id="cb1-18" title="18">       <span class="dt">col =</span> <span class="st">"red3"</span>)</a>
<a class="sourceLine" id="cb1-19" title="19"><span class="kw"><a href="https://rdrr.io/r/graphics/abline.html">abline</a></span>(<span class="dt">v =</span> <span class="fl">0.2</span><span class="op">*</span><span class="kw"><a href="https://rdrr.io/r/base/length.html">length</a></span>(sample_par) ,</a>
<a class="sourceLine" id="cb1-20" title="20">       <span class="dt">lty =</span> <span class="dv">2</span>,</a>
<a class="sourceLine" id="cb1-21" title="21">       <span class="dt">col =</span> <span class="st">"darkblue"</span>)</a>
<a class="sourceLine" id="cb1-22" title="22"><span class="kw"><a href="https://rdrr.io/r/graphics/legend.html">legend</a></span>(</a>
<a class="sourceLine" id="cb1-23" title="23">  <span class="st">"topleft"</span>,</a>
<a class="sourceLine" id="cb1-24" title="24">  <span class="dt">legend =</span> <span class="kw"><a href="https://rdrr.io/r/base/c.html">c</a></span>(<span class="st">"F(x): p80"</span>, <span class="st">"x: Top 20%"</span>),</a>
<a class="sourceLine" id="cb1-25" title="25">  <span class="dt">col =</span> <span class="kw"><a href="https://rdrr.io/r/base/c.html">c</a></span>(<span class="st">"red3"</span>, <span class="st">"darkblue"</span>),</a>
<a class="sourceLine" id="cb1-26" title="26">  <span class="dt">lty =</span> <span class="dv">2</span>,</a>
<a class="sourceLine" id="cb1-27" title="27">  <span class="dt">cex =</span> <span class="fl">0.8</span></a>
<a class="sourceLine" id="cb1-28" title="28">)</a>
<a class="sourceLine" id="cb1-29" title="29"></a>
<a class="sourceLine" id="cb1-30" title="30"><span class="kw"><a href="https://rdrr.io/r/graphics/hist.html">hist</a></span>(</a>
<a class="sourceLine" id="cb1-31" title="31">  sample_par,</a>
<a class="sourceLine" id="cb1-32" title="32">  <span class="dt">n =</span> <span class="dv">100</span>,</a>
<a class="sourceLine" id="cb1-33" title="33">  <span class="dt">xlab =</span> <span class="st">""</span>,</a>
<a class="sourceLine" id="cb1-34" title="34">  <span class="dt">main =</span> <span class="st">"Histogram"</span>,</a>
<a class="sourceLine" id="cb1-35" title="35">  <span class="dt">col =</span> <span class="st">"grey50"</span>,</a>
<a class="sourceLine" id="cb1-36" title="36">  <span class="dt">border =</span> <span class="ot">NA</span>, </a>
<a class="sourceLine" id="cb1-37" title="37">  <span class="dt">probability =</span> <span class="ot">TRUE</span></a>
<a class="sourceLine" id="cb1-38" title="38">)</a>
<a class="sourceLine" id="cb1-39" title="39"><span class="kw"><a href="https://rdrr.io/r/graphics/par.html">par</a></span>(opar)</a></code></pre></div>

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