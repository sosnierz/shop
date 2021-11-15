const layout = require('../layout');


module.exports =  ({product}) => {
    return layout({
    content: `
    <div>  
    <img class="" src="data:image/png;base64, ${product.image}"/>
    <h3 >${product.title} ${product.model}</h3>
    <h5 >${product.price.toFixed(2)} zł</h5>
    <p>Regulacja kąta świecenia: <span>${product.shine}</span></p>
    <p>Wymiar lampy (wysokość x szerokość): <span>${product.size}</span></p>
    <p>Ilość punktów świetlnych<span>${product.bulb}</span></p>
     <p>${product.information}</p>
    
    
    <form action="/cart/products" method="POST">
      <input hidden value="${product.id}" name="productId" />
      <button class="button has-icon is-inverted addCard">Dodaj do
      <i class="fa fa-shopping-cart"></i></button>
    </form>
   
 </div>`
    })}