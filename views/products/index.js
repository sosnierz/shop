const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products
    .map(product => {
      return `
        <div class="column is-one-quarter">
          <div class="card product-card">
            <figure>
              <img src="data:image/png;base64, ${product.image}"/>
            </figure>
            <div class="card-content">
              <h3 class="subtitle">${product.title}</h3>
              <h5>${product.price} zł</h5>
              <p>${product.opis}</p>
            </div>
            <footer class="card-footer">
              <form action="/cart/products" method="POST">
                <input hidden value="${product.id}" name="productId" />
                <button class="button has-icon is-inverted">
                  <i class="fa fa-shopping-cart"></i> Add to cart
                </button>
              </form>
            </footer>
          </div>
        </div>
      `;
    })
    .join('\n');

    return layout({
      content: `
     
        <section class="shop">
        <div class = "products">
        <div  id="firstProduct" class="product">
        <a href="#"> <h1> Polecane </h1></a>
        </div>
        <div class="products">
           ${renderedProducts}  
        </div> 
        </div>
        </section>
              `
    });
};
