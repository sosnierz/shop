const layout = require('../layout');


module.exports =  ({product}) => {
  
   return layout({
    content: `
    <!--Section: Block Content-->
<section class="mb-5">
<main>
  <div class="row details">
    <div class="col-md-6 mb-4 mb-md-0">

      <div id="mdb-lightbox-ui"></div>

      <div class="mdb-lightbox">

        <div class="row product-gallery mx-1">

          <div class="col-12 mb-0">
                  <figure class="view overlay rounded z-depth-1 main-img">
                  <img src="data:image/png;base64, ${product.image}"
                  class="img-fluid z-depth-1" >
                  </figure>
          </div>
        </div>
      </div>

    </div>

   
   
   <div class="col-md-6">
      <h5 class= "subtitle"><span class="family">${product.title} </span>${product.model}</h5>
      <p class="mb-2 text-muted text-uppercase small">${product.category}</p>
      <p><span class="mr-1">Cena: <strong>${product.price.toFixed(2)} zł</strong></span></p>
      <p class="pt-1">${product.information}</p>
      <div class="table-responsive">
        <table class="table table-sm table-borderless mb-0">
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
      </div>
      <hr>
      <div class="table-responsive mb-2">
        <table class="table table-sm table-borderless">
          <tbody>
            <tr>
              <td class="pl-0 pb-0 w-25">Ilość</td>
              
            </tr>
            <tr>
              <td class="pl-0">
                <div class="def-number-input number-input safari_only mb-0">
                  <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                    class="minus"></button>
                  <input class="quantity" min="0" name="quantity" value="1" type="number">
                  <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                    class="plus"></button>
                </div>
              </td>
             
            </tr>
          </tbody>
        </table>
      </div>
      <form id="form" action="/cart/products" method="POST" >
          <input hidden value="${product.id}" name="productId" />
          <button class="button has-icon is-inverted addCart" >Dodaj do
          <i class="fa fa-shopping-cart"></i></button>
        </form>
        
        
        
        <a href="/shop"><button class="button has-icon is-inverted addCart" >Powrtót do sklepu
        </button></a>
    </div>
  </div>
</main>
<article>
<div>
<div class="nextProduct">
<h4>Produkty z serii</h4>
		<p>
				<span class="spanMove">&#139;</span>
				<span class="spanMove">&#155;</span>
       </p> 
</div>
<div class="imagesDiv">
</div>
 </div>
</article>
</section>


<script src="/js/id.js"></script>

   `
})}