const layout = require('../layout');


module.exports =  ({product}) => {
  
   return layout({
    content: `
    <!--Section: Block Content-->
<section class="allProductInfo">
<main class="info">       
   <img src="data:image/png;base64, ${product.image}" class="infoImg" >
    <div class="productInfo">             
      <h5 class= "subtitle"><span class="family">${product.title} </span>${product.model}</h5>
      <p>${product.category.join(', ')}</p>
      <p>Cena: <strong>${product.price.toFixed(2)} zł</strong></p>
      <p>${product.information}</p>
      <br>
      <table>
      <tbody>
            <tr>
              <th class="" scope="row"><strong>Wymiar lampy (wys x szer): </strong></th>
              <td>${product.size}</td>
            </tr>
            <tr>
              <th class="" scope="row"><strong>Ilość punktów świetlnych:</strong></th>
              <td>${product.bulb}</td>
            </tr>
            <tr>
              <th class="" scope="row"><strong>Regulacja kąta świecenia:</strong></th>
              <td>${product.shine}</td>
            </tr>
          </tbody>
        </table>
     
      <hr>
      <div class="quantities">
                <label class="">Ilość: </label>
                <input min="0" name="quantity" value="1" type="number">
                 
        </div>
      <div class="buttonAddCart clearfix">
      <form id="form" action="/cart/products" method="POST" >
      <input hidden value="${product.id}" name="productId" />
     <button class="button has-icon is-inverted" >Dodaj do <i class="fa fa-shopping-cart"></i></button> </form> 
     <a href="/shop"><button class="button has-icon is-inverted" >Powrót do <i class="fas fa-store"></i></button></a>
    </div>
  </div>
</main>
<article>

<h4>Produkty z serii</h4>
		

<aside>
<div class="imagesDiv">
</div>
</aside>

</article>
</section>


<script src="/js/id.js"></script>

   `
})}

