function setCard(article) {
  const dateModified = new Date(article.dateModified);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateModified.toLocaleDateString("pt-BR", options);

  let htmlSnippet = `
<div class="article-card">
  <a href="artigo/${article.slug}" class="article-card-link">
    <img src="${article.image}" alt="foto do artigo"/>
  </a>
  <div class="card-content">
    <h2>${article.title}</h2>
    <h3>${article.category}</h3>
    <p>${article.description}</p>
    <h4>${formattedDate}</h4>
  </div>
</div>
  `;

  return htmlSnippet;
}
