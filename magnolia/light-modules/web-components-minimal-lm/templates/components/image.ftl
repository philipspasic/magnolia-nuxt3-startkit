[#assign imageLink = '#']

[#if content.image?has_content]
  [#assign image = damfn.getAsset(content.image)]
  [#assign imageLink = image.link]
  
  [#if image?has_content && imageLink?has_content]
    [#assign imageLink = imageLink]
  [/#if]
[/#if]

<wc-image src="${imageLink}"></wc-image>