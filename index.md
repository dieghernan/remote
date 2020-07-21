---
layout: default
title: Chulapa on remote
header_type: hero
subtitle: Remote test
---

## Markdown cheatsheet

```markdown
Text can be **bold**, _italic_, or ~~strikethrough~~.
```

Text can be **bold**, _italic_, or ~~strikethrough~~.


```markdown
[Link to another page](./another-page.html).
```

[Link to another page](./another-page.html).

```markdown
There should be whitespace between this paragraph

and this paragraph.
```

There should be whitespace between this paragraph

and this paragraph.

```markdown
# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6
```

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6


```markdown
> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.
```

> This is a blockquote.
>
> When something is important enough, you do it even if the odds are not in your favor.


~~~ markdown
```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

```html
<!--HTML code syntax highlighter-->
<!DOCTYPE html>
<html>
<body>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

</body>
</html>
```
~~~

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

```html
<!--HTML code syntax highlighter-->
<!DOCTYPE html>
<html>
<body>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

</body>
</html>
```

```markdown
* This is an unordered list.
* This is an unordered list.
* This is an unordered list.

An a two-level ordered list:

1.  This is an ordered list.
2.  This is an ordered list.
    * Unordered sub-list.
    * Unordered sub-list. 
12. Actual numbers don't matter, just that it's a numbet or not.
4.  And another item.

    You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces.

    # And a header
    
Unordered list can use asterisks:

* Like this
- Or minuses
   -  Minus
      1. One
      2. Two
         + Or pluses
         
And a task list:

- [x] This is a complete item
- [ ] This is an incomplete item

```

* This is an unordered list.
* This is an unordered list.
* This is an unordered list.

An a two-level ordered list:

1.  This is an ordered list.
2.  This is an ordered list.
    * Unordered sub-list.
    * Unordered sub-list. 
12. Actual numbers don't matter, just that it's a numbet or not.
4.  And another item.

    You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces.

    # And a header
    
Unordered list can use asterisks:

* Like this
- Or minuses
   -  Minus
      1. One
      2. Two
         + Or pluses

And a task list:

- [x] This is a complete item
- [ ] This is an incomplete item

```markdown

Use an emoji here: 👍🏻⭐️🏆

```

Use an emoji here: 👍🏻⭐️🏆

```markdown
To quickly turn a URL or email address into a link, enclose it in angle brackets.

<https://www.markdownguide.org>
<fake@example.com>

```

To quickly turn a URL or email address into a link, enclose it in angle brackets.

<https://www.markdownguide.org>
<fake@example.com>

```markdown
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

```markdown

| ISO_3166_1 | ISO_3166_2 | ISO_3166_3 | ISO_Official | FIPS_GEC | STANAG | M49 | NUTS | geonameId | continentcode | regioncode | interregioncode | subregioncode | currency | independent | sovstatus  | ISO_3166_3.sov | NAME.EN       | CONTINENT.EN | REGION.EN | INTERREGION.EN | SUBREGION.EN    | CAPITAL.EN | NAME.ES     | CONTINENT.ES | REGION.ES | INTERREGION.ES | SUBREGION.ES         | CAPITAL.ES | pop      | area_km2  | Developed  |
|------------|:----------:|-----------:|--------------|----------|--------|-----|------|-----------|---------------|------------|-----------------|---------------|----------|-------------|------------|----------------|---------------|--------------|-----------|----------------|-----------------|------------|-------------|--------------|-----------|----------------|----------------------|------------|----------|-----------|------------|
| 4          | AF         | AFG        | TRUE         | AF       | AFG    | 004 |      | 1149361   | AS            | 142        |                 | 034           | AFN      | TRUE        |            |                | Afghanistan   | Asia         | Asia      |                | Southern Asia   | Kabul      | Afganistán  | Asia         | Asia      |                | Asia meridional      | Kabul      | 29121286 | 647500.0  | Developing |
| 248        | AX         | ALA        | TRUE         |          |        | 248 |      | 661882    | EU            | 150        |                 | 154           | EUR      | FALSE       | Part of FI | FIN            | Åland Islands | Europe       | Europe    |                | Northern Europe | Mariehamn  | Islas Åland | Europa       | Europa    |                | Europa septentrional | Mariehamn  | 26711    | 1580.0    | Developed  |
| 8          | AL         | ALB        | TRUE         | AL       | ALB    | 008 | AL   | 783754    | EU            | 150        |                 | 039           | ALL      | TRUE        |            |                | Albania       | Europe       | Europe    |                | Southern Europe | Tirana     | Albania     | Europa       | Europa    |                | Europa meridional    | Tirana     | 2986952  | 28748.0   | Developed  |
| 12         | DZ         | DZA        | TRUE         | AG       | DZA    | 012 |      | 2589581   | AF            | 002        |                 | 015           | DZD      | TRUE        |            |                | Algeria       | Africa       | Africa    |                | Northern Africa | Algiers    | Argelia     | África       | África    |                | África septentrional | Argel      | 34586184 | 2381740.0 | Developing |

```

| ISO_3166_1 | ISO_3166_2 | ISO_3166_3 | ISO_Official | FIPS_GEC | STANAG | M49 | NUTS | geonameId | continentcode | regioncode | interregioncode | subregioncode | currency | independent | sovstatus  | ISO_3166_3.sov | NAME.EN       | CONTINENT.EN | REGION.EN | INTERREGION.EN | SUBREGION.EN    | CAPITAL.EN | NAME.ES     | CONTINENT.ES | REGION.ES | INTERREGION.ES | SUBREGION.ES         | CAPITAL.ES | pop      | area_km2  | Developed  |
|------------|:----------:|-----------:|--------------|----------|--------|-----|------|-----------|---------------|------------|-----------------|---------------|----------|-------------|------------|----------------|---------------|--------------|-----------|----------------|-----------------|------------|-------------|--------------|-----------|----------------|----------------------|------------|----------|-----------|------------|
| 4          | AF         | AFG        | TRUE         | AF       | AFG    | 004 |      | 1149361   | AS            | 142        |                 | 034           | AFN      | TRUE        |            |                | Afghanistan   | Asia         | Asia      |                | Southern Asia   | Kabul      | Afganistán  | Asia         | Asia      |                | Asia meridional      | Kabul      | 29121286 | 647500.0  | Developing |
| 248        | AX         | ALA        | TRUE         |          |        | 248 |      | 661882    | EU            | 150        |                 | 154           | EUR      | FALSE       | Part of FI | FIN            | Åland Islands | Europe       | Europe    |                | Northern Europe | Mariehamn  | Islas Åland | Europa       | Europa    |                | Europa septentrional | Mariehamn  | 26711    | 1580.0    | Developed  |
| 8          | AL         | ALB        | TRUE         | AL       | ALB    | 008 | AL   | 783754    | EU            | 150        |                 | 039           | ALL      | TRUE        |            |                | Albania       | Europe       | Europe    |                | Southern Europe | Tirana     | Albania     | Europa       | Europa    |                | Europa meridional    | Tirana     | 2986952  | 28748.0   | Developed  |
| 12         | DZ         | DZA        | TRUE         | AG       | DZA    | 012 |      | 2589581   | AF            | 002        |                 | 015           | DZD      | TRUE        |            |                | Algeria       | Africa       | Africa    |                | Northern Africa | Algiers    | Argelia     | África       | África    |                | África septentrional | Argel      | 34586184 | 2381740.0 | Developing |



### There's a horizontal rule below this.

* * *



**Small image**

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

**Large image**

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```

