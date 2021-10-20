const layout = require('../layout');

module.exports =  ({ productsFavorite }) => {
  const renderedFavorites = productsFavorite
    .map(productFavorite => {
      return `
        <div class="column is-one-quarter">
          <div class="card product-card">
            <figure>
              <img src="data:image/png;base64, ${productFavorite.image}"/>
            </figure>
            <div class="card-content">
              <h3 class="subtitle">${productFavorite.title}</h3>
              <h5>${productFavorite.price} zł</h5>
             
            </div>
           
          </div>
        </div>
      `;
    })
    .join('\n');

    return layout({
      content: `
      <section class="banner">
          <img class="slider" src="/images/lamp1.jpg" alt="">
          <img class="slider" src="/images/lamp2.jpg" alt="">
          <img class="slider" src="/images/lamp3.jpg" alt="">
        </section>
        <section class="header-bottom">
         <nav class="navbar navbar-inverse">
            <div class="container-bottom">
              <ul class="nav-bottom">
                <li><a href="/">Start</a></li>
                <li><a href="/shop">Produkty</a></li>
                <li><a href="/conditions">Dostawa i płatność</a></li>
                <li><a href="/contacts">Kontakt</a></li>
              </ul> 
            </div>
          </nav> 
        </section>
        <section class="shop">
        <div class = "products">
        <div  id="firstProduct" class="product">
        <a href="#"> <h1> Polecane </h1></a>
        </div>
        <div class="products">
           ${renderedFavorites}  
        </div> 
        </div>
        </section>
        <section class="conditions">
        <div class="condition">
        <img class="imgCondition" src="/images/freeDelivery.png" alt="">
        <h2>Darmowa dostawa</h2>
        <p>Przy zamówieniach powyżej 500 zł przesyłka gratis.</p>
        </div> 
        <div class="condition">
        <img class="imgCondition" src="/images/timeDelivery.png" alt="">
        <h2>Wysyłka w 48 H</h2>
        <p>Szybka dostawa do domu lub punktu odbioru Inpost.</p>
        </div> 
        <div class="condition">
        <img class="imgCondition" src="/images/return.png" alt="">
        <h2>14 dni na zwrot</h2>
        <p>Możesz zwrócić zakupiony produkt bez podania przyczyny.</p>
        </div> 
        <div class="condition">
        <img class="imgCondition" src="/images/payment.png" alt="">
        <h2>Płatność przyt odbiorze lub przelewem</h2>
        <p>Wykonaj przelew ze swojego konta, prześlij nam potwierdzenie lub zapłać przyt odbiorze</p>
        </div> 
        
       
       
        </section>

      `
    });
};
