const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
      <tr>
        <td>${product.title}</td>
        <td>${product.model}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${product.category}</td>
        <td>${product.fabric}</td>
        <td>${product.shine}</td>
        <td>${product.bulb}</td>
        <td>${product.size}</td>
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
            <th>Model</th>
            <th>Cena</th>
            <th>Kategoria</th>
            <th>Materia</th>
            <th>Regulacja świecenia</th>
            <th>Ilość żarówek</th>
            <th>Rozmiar</th>
            <th>Opis</th>
            <th>Edytuj</th>
            <th>Usuń</th>
           </tr>
        </thead>
        <tbody>
          ${renderedProducts}
        </tbody>
      </table>
 

    `
  });
};


