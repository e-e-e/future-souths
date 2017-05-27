// import _ from 'lodash';

function linkResolver(doc) {
  if (doc.type === 'dialogue') return `/${doc.uid}`;
  return '/';
}

const htmlSerializer = () => {
  let footnoteIndex = 0;
  return (element, content) => {
    // Don't wrap images in a <p> tag
    if (element.type === 'image') {
      const { width, height } = element.dimensions;
      if (!width) return '';
      const ratio = (height / width) * 100;
      return `<img src="${element.url}" alt="${element.alt}" style="height:${ratio.toFixed(0)}%">`;
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

export function processDialogues(dialogues) {
  if (!dialogues) return [];
  if (!Array.isArray(dialogues.results)) return [];
  const rendered = dialogues.results.map((dialogue) => {
    const author = dialogue.getStructuredText('dialogue.author');
    const participantsGroup = dialogue.getGroup('dialogue.participants');
    const title = dialogue.getStructuredText('dialogue.title');
    const time = dialogue.getTimestamp('dialogue.time');
    const blurb = dialogue.getStructuredText('dialogue.blurb');
    const image = dialogue.getImage('dialogue.feature-image');
    const caption = dialogue.getStructuredText('dialogue.feature-image-caption');
    return {
      title: title ? title.asText() : 'Untitled',
      author: author ? author.asText() : 'Anonymous',
      time: new Date(time),
      participants: participantsGroup.toArray()
        .map((el) => {
          const p = el.getStructuredText('participant');
          return p ? p.asText() : null;
        })
        .filter(p => !!p),
      image: image ? image.asHtml(linkResolver, htmlSerializer()) : null,
      caption: caption ? caption.asHtml(linkResolver, htmlSerializer()) : '',
      blurb: blurb ? blurb.asHtml(linkResolver, htmlSerializer()) : '',
    };
  });
  return rendered;
}

export function processContributors(contributors) {
  if (!contributors) return [];
  if (!Array.isArray(contributors.results)) return [];
  return contributors.results.map((contributor) => {
    const name = contributor.getStructuredText('contributor.name');
    const biography = contributor.getStructuredText('contributor.biography');
    return {
      name: name ? name.asText(linkResolver, htmlSerializer()) : '',
      biography: biography ? biography.asHtml(linkResolver, htmlSerializer()) : '',
    };
  });
}

export function processAbout(about) {
  if (!about) return {};
  if (!Array.isArray(about.results)) return {};
  if (about.results.length === 0) return {};
  const heading = about.results[0].getStructuredText('about.heading');
  const content = about.results[0].getStructuredText('about.content');
  return {
    heading: heading ? heading.asText() : '',
    content: content ? content.asHtml(linkResolver, htmlSerializer()) : '',
  };
}

export function processFooter(footer) {
  if (!footer) return '';
  if (!Array.isArray(footer.results)) return '';
  if (footer.results.length === 0) return '';
  const description = footer.results[0].getStructuredText('footer.footer-description');
  return description ? description.asHtml(linkResolver, htmlSerializer()) : '';
}

export function processSchedule(schedule) {
  if (!schedule) return {};
  if (!Array.isArray(schedule.results)) return {};
  if (schedule.results.length === 0) return {};
  const title = schedule.results[0].getStructuredText('schedule.title');
  const subtitle = schedule.results[0].getStructuredText('schedule.subtitle');
  const description = schedule.results[0].getStructuredText('schedule.description');
  return {
    title: title ? title.asText() : '',
    subtitle: subtitle ? subtitle.asText() : '',
    description: description ? description.asHtml(linkResolver, htmlSerializer()) : '',
  };
}

export function processLiveDialogues(live) {
  if (!live) return {};
  if (!Array.isArray(live.results)) return {};
  if (live.results.length === 0) return {};
  const title = live.results[0].getStructuredText('live-discussions.title');
  const content = live.results[0].getStructuredText('live-discussions.content');
  return {
    title: title ? title.asText() : '',
    content: content ? content.asHtml(linkResolver, htmlSerializer()) : '',
  };
}
