---
layout: page.11ty.cjs
title: <lit-gallery> ⌲ Home
---

# &lt;lit-gallery>

`<lit-gallery>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<lit-gallery>` is just an HTML element. You can it anywhere you can use HTML!

```html
<lit-gallery></lit-gallery>
```

  </div>
  <div>

<lit-gallery></lit-gallery>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<lit-gallery>` can be configured with attributed in plain HTML.

```html
<lit-gallery name="HTML"></lit-gallery>
```

  </div>
  <div>

<lit-gallery name="HTML"></lit-gallery>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<lit-gallery>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;lit-gallery&gt;</h2>
  <lit-gallery .name=${name}></lit-gallery>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;lit-gallery&gt;</h2>
<lit-gallery name="lit-html"></lit-gallery>

  </div>
</section>
