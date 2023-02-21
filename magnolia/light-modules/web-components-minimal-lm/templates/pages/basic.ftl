<!doctype html>
<html lang="en">
  <head>
    [@cms.page /]
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="${ctx.contextPath}/.resources/web-components-minimal-lm/webresources/index.css">
    <title>Web Components Minimal Lm!</title>
  </head>
  <body>
    <div class="container">
      <div class="Basic">
        <h1>${content.title!content.@name}</h1>
        <main>[@cms.area name="main" /]</main>
      </div>
    </div>
    <footer>
      Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
      <br />
      Copyright © 2020
    </footer>
    <script type="module" src="${ctx.contextPath}/.resources/web-components-minimal-lm/webresources/index.js"></script>
  </body>
</html>