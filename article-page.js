/* Renders the selected article from articles.js into article.html. */
(() => {
  const list = window.CONNECT_ARTICLES || [];
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const article = list.find(item => item.slug === slug);
  const root = document.getElementById("article-root");

  const esc = value => String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
  const link = item => "article.html?slug=" + encodeURIComponent(item.slug);

  if (!article) {
    document.title = "Article not found | Connect-Consulting Company Ltd";
    root.innerHTML = '<div class="wrap" style="padding:80px 0 95px"><div class="eyebrow">Articles from Connect-Consulting</div><h1 style="margin:15px 0">We couldn’t find that article.</h1><p style="color:var(--muted);max-width:560px">The article may have moved or the link may be incomplete. Return to Articles to explore the available articles.</p><a class="button button-primary" href="insights.html" style="margin-top:15px">Back to Articles <span class="arrow">→</span></a></div>';
    return;
  }

  document.title = article.title + " | Connect-Consulting Company Ltd";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", article.excerpt);
  const categoryLink = "insights.html#" + article.key;
  const articleSections = article.sections.map(section => {
    const paragraphs = (section.paragraphs || []).map(text => "<p>" + esc(text) + "</p>").join("");
    const bullets = section.bullets && section.bullets.length
      ? "<ul>" + section.bullets.map(item => "<li>" + esc(item) + "</li>").join("") + "</ul>" : "";
    return "<section><h2>" + esc(section.heading) + "</h2>" + paragraphs + bullets + "</section>";
  }).join("");

  const sources = article.sources && article.sources.length
    ? '<section class="article-sources"><h2>Sources &amp; further reading</h2><ul>' +
      article.sources.map(source => '<li><a href="' + esc(source.url) + '" target="_blank" rel="noopener noreferrer">' + esc(source.label) + '</a>' +
        (source.note ? " — " + esc(source.note) : "") + "</li>").join("") +
      "</ul></section>"
    : "";

  const related = list.filter(item => item.slug !== article.slug && item.key === article.key).slice(0, 3);
  const relatedCards = related.map(item =>
    '<article class="related-card"><a href="' + link(item) + '">' +
      '<img src="' + item.image + '" alt="' + esc(item.alt) + '" loading="lazy">' +
      '<div class="related-card-copy"><small>' + esc(item.category) + " · " + esc(item.readTime) + "</small>" +
      "<h3>" + esc(item.title) + '</h3><span>Read article <span class="arrow" aria-hidden="true">→</span></span></div></a></article>'
  ).join("");

  root.innerHTML =
    '<div class="article-breadcrumbs"><div class="wrap"><a href="index.html">Home</a><span>/</span><a href="insights.html">Articles</a><span>/</span><a href="' + categoryLink + '">' + esc(article.category) + "</a></div></div>" +
    '<section class="article-hero"><div class="wrap article-hero-inner">' +
      '<span class="article-category">' + esc(article.category) + "</span>" +
      '<div class="article-meta"><span>' + esc(article.date) + '</span><i class="dot"></i><span>' + esc(article.readTime) + "</span></div>" +
      "<h1>" + esc(article.title) + "</h1><p class=\"article-deck\">" + esc(article.excerpt) + "</p>" +
      '<img class="article-cover" src="' + article.image + '" alt="' + esc(article.alt) + '">' +
    "</div></section>" +
    '<div class="wrap article-reading-layout"><article class="article-body">' + articleSections + sources + "</article>" +
      '<aside class="article-side"><small>Connect-Consulting perspective</small><strong>Practical insight. Purposeful progress.</strong><p>Use these ideas as a starting point for discussion. Every organisation’s context, customers and constraints are different.</p></aside>' +
    "</div>" +
    '<p class="wrap article-disclaimer">This article is for general information and discussion. It is not a substitute for professional accounting, tax, legal, investment or other regulated advice. Confirm requirements and decisions with appropriately qualified advisers in the relevant jurisdiction.</p>' +
    (related.length ? '<section class="related-section"><div class="wrap"><div class="related-heading"><div><div class="eyebrow">Continue reading</div><h2>Related articles</h2></div><a href="insights.html">Browse all articles <span class="arrow" aria-hidden="true">→</span></a></div><div class="related-grid">' + relatedCards + "</div></div></section>" : "") +
    '<section class="article-cta"><div class="wrap article-cta-inner"><div><div class="eyebrow">Put insight into practice</div><h2>Have a business question you would like to explore?</h2><p>Tell us about your priorities. Connect-Consulting can help you consider practical next steps across business development, finance and customer experience.</p></div><a class="button button-light" href="contact.html">Start a conversation <span class="arrow" aria-hidden="true">→</span></a></div></section>';
})();