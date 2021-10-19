const layout = require('../layout');

module.exports = ({ favorites }) => {
  const renderedFavorites = favorites
    .map(product => {
      return `
      <tr>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.opis}</td>
        <td>
          <a href="/admin/products/${product.id}/edit">
            <button class="button is-link">
              Edytuj
            </button>
          </a>
        </td>
        <td>
          <form method="POST" action="/admin/products/favorites/${product.id}/delete">
            <button class="button is-danger">Usuń</button>
          </form>
        </td>
     
      </tr>
    `;
    })
    .join('');

  return layout({
    content: `
      <div class="control">
        <h1 class="subtitle">Produkty ulubione</h1>  
        </div>
      <table class="table">
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Opis</th>
            <th>Edytuj</th>
            <th>Usuń</th>
            
          </tr>
        </thead>
        <tbody>
          ${renderedFavorites}
        </tbody>
      </table>
    `
  });
};
