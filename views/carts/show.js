const layout = require('../layout');

module.exports = ({ items }) => {
  const totalPrice = items.reduce((prev, item)=> {
    return prev + item.quantity * item.product.price;
  }, 0);
  // const totalQuantity = items.reduce((prev, item)=> {
  //   return prev + item.quantity;
  // }, 0);
  const renderedItems = items
    .map(item => {
      return `
        <div class="cart-item message">
          <h3 class="subtitle">${item.product.title}</h3>
          <div class="cart-right">
            <div><span> ${item.product.price} zł </span>
              <span class="minus" onclick="changeNumberQuantity('minus', ${item.id})">-</span>
              <span class="number">${item.quantity}</span>
              <span class="plus" onclick="changeNumberQuantity('plus', ${item.id})">+</span>           
          </div> 
            </div>
            <div class="price is-size-4">
              ${item.product.price * item.quantity}zł
            </div>
            <div class="remove">
              <form method="POST" action="/cart/products/delete">
              <input hidden value="${item.id}" name="itemId" />
                <button class="button is-danger">                  
                  <span class="icon is-small">
                    <i class="fas fa-times"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  return layout({
    content: `
      <div id="cart" class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-four-fifths">
            <h3 class="subtitle"><b>Koszyk</b></h3>
            <div class = "itemsCart" value="button">
              ${renderedItems}
            </div>
            <div class="total message is-info">
              <div class="message-header">
                Razem
              </div>
              <h1 class="title">Cena: ${totalPrice}zł </h1>
              <button class="button is-primary">Kup</button>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
      <script src="/js/cart.js"></script>
    `
  });
};
