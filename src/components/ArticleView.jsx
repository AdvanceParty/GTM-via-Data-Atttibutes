import React from 'react';

function ArticleView(props) {
  const { content } = props;
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
export default ArticleView;
