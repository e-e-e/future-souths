// import _ from 'lodash';

function linkResolver(doc) {
  if (doc.type === 'article') return `/${doc.uid}`;
  return '/';
}

const htmlSerializer = () => {
  let footnoteIndex = 0;
  return (element, content) => {
    // Don't wrap images in a <p> tag
    if (element.type === 'image') {
      return `<img src="${element.url}" alt="${element.alt}">`;
    }
    // Add a class to hyperlinks
    if (element.type === 'hyperlink') {
      return `<a target="__blank" href="${element.url}">${content}</a>`;
    }
    if (element.type === 'paragraph') {
      const processed = content.split(/\[\*\]/g)
        .reduce((p, v, i) => {
          if (i === 0) return v;
          footnoteIndex += 1;
          return `${p}<span id="footnote-${footnoteIndex}" class="footnote">${footnoteIndex}</span>${v}`;
        }, '');
      if (element.text[0] === '>') {
        return `<div class="caption">${processed.replace('&gt;', '')}</div>`;
      }
      return `<p>${processed}</p>`;
    }
    // Return null to stick with the default behavior
    return null;
  };
};

export function processArticles(articles) {
  const rendered = articles.results.map((article) => {
    console.log(article);
    return {
      title: article.getStructuredText('article.title').asText(),
      body: article.getStructuredText('article.body').asHtml(linkResolver, htmlSerializer()),
      summary: article.getStructuredText('article.summary').asHtml(),
      footnotes: article.getGroup('article.footnotes').toArray()
        .map(footnote => ({
          content: footnote.getStructuredText('footnote').asHtml(),
          relativeTo: undefined,
          show: false,
        })),
    };
  });
  return rendered;
}

export function processInfoSections(info) {
  const rendered = info.results.map(i => i);
  return rendered;
}
