// Headline
class Headline extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h2 class="Headline">${this.text}</h2>`;
  }

  get text() {
    return this.getAttribute('text');
  }
}

customElements.define('wc-headline', Headline);

// Paragraph
class Paragraph extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p class="Paragraph">${this.richText}</p>`;
  }

  get richText() {
    return this.getAttribute('richText');
  }
}

customElements.define('wc-paragraph', Paragraph);

// Image
class Image extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<img class="Image" src=${this.src} alt="Etiam Purus" />`;
  }

  get src() {
    return this.getAttribute('src');
  }
}

customElements.define('wc-image', Image);

// List
class List extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<ul class="List">${this.items}</ul>`;
  }

  get items() {
    return this.getAttribute('items');
  }
}

customElements.define('wc-list', List);

// listItem
class listItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<li class="Item">${this.text}</li>`;
  }

  get text() {
    return this.getAttribute('text');
  }
}

customElements.define('wc-list-item', listItem);
