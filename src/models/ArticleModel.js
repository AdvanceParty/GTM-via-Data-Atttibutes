class ArticleModel {
  constructor(json = null) {
    if (json) this.deserialise(json);
  }

  get title() {
    return this._title;
  }
  get author() {
    return this._author;
  }
  get body() {
    return this._body;
  }
  get image() {
    return this._image ? { ...this._image } : null;
  }

  deserialise = json => {
    this._title = json.title;
    this._author = json.author;
    this._body = json.body;
    this._image = {
      href: json.image.href,
      caption: json.image.caption,
      alt: json.image.alt
    };
  };
}

export default ArticleModel;
