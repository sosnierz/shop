const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
      <tr>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.information}</td>
        <td>
          <a href="/admin/products/${product.id}/edit">
            <button class="button is-link">
              Edytuj
            </button>
          </a>
        </td>
        <td>
          <form method="POST" action="/admin/products/${product.id}/delete">
            <button class="button is-danger">Usuń</button>
          </form>
        </td>
        <td>${product.favorites}</td>
      </tr>
    `;
    })
    .join('');

  return layout({
    content: `
      <div class="control">
        <h1 class="subtitle">Produkty</h1>  
        <a href="/admin/products/new" class="button is-primary">Nowy produkt</a>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Opis</th>
            <th>Edytuj</th>
            <th>Usuń</th>
            <th>Ulubione</th>
          </tr>
        </thead>
        <tbody>
          ${renderedProducts}
        </tbody>
      </table>
    `
  });
};
