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
        <div class="cart-item message" >
          <h3 class="subtitle">${item.product.title} ${item.product.model} <img class="cartImg" src="data:image/png;base64, ${item.product.image}"/></h3>
          <div class="cart-right">
            <div><span> ${item.product.price.toFixed(2)} zł</span></div>
              <div class="changeQuantity">
                <form method="POST" action="/cart/products/quantityPlus">
                  <input hidden value="${item.id}" name="itemId"/>
                    <button class="button is-danger"><span class="icon is-small"><i class="fas fa-plus"></i></span></button></form>
                    <span class="numQ">${item.quantity}</span>
                    <form method="POST" action="/cart/products/quantityMinus"> 
                    <input hidden value="${item.id}" name="itemId"/>
                  <button class="button is-danger"><span class="icon is-small"><i class="fas fa-minus"></i></span></button>
                </form>
            </div>
          </div>
          <div class="price is-size-4">
             ${item.product.price*item.quantity} zł
          </div>
          <div class="remove">
            <form method="POST" action="/cart/products/delete">
              <input hidden value="${item.id}" name="itemId" /><button class="button is-danger"><span class="icon is-small"><i class="fas fa-times"></i></span></button>
            </form>
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
            <h2 class="subtitle">Koszyk</h2>
            <div class = "itemsCart" value="button">
              ${renderedItems}
            </div>
            <div class="total message is-info">
              <div class="message-header">
               <h2 class="subtitle"> Razem ${totalPrice.toFixed(2)} zł </h2>
              </div>
              
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
