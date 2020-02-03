import React from 'react';

function Article(props) {
  const content = new Model(props.content);

  return (
    <article data-gtm-content='article' title={content.title}>
      <header>
        <h1>{content.title}</h1>
        <h2>{content.author}</h2>
      </header>
      <figure className='image'>
        <img src={content.image.href} alt={content.image.alt} />
        <figcaption>{content.image.caption}</figcaption>
      </figure>
      <section className='body'>{content.body}</section>
      <section className='children'>{props.children}</section>
    </article>
  );
}
export default Article;

class Model {
  constructor({ title = '', author = '', body = '', image = null } = {}) {
    this._title = title;
    this._author = author;
    this._body = body;
    this._image = image;
  }

  get title() {
    return this._title || '';
  }
  get author() {
    return this._author || '';
  }
  get body() {
    return this._body || '';
  }
  get image() {
    return this._image ? { ...this._image } : null;
  }
}

const deserialise = json => {
  const { title, author, body } = json;
  const image = deserialiseImageNode(json.image);
  return new Model({ title, author, body, image });
};

const deserialiseImageNode = json => {
  const { href, alt, caption } = json;
  return href
    ? {
        href,
        caption: caption || alt || null,
        alt: alt || caption || null
      }
    : {};
};
