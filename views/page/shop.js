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
        </div>
        <footer class="card-footer">
          <form action="/cart/products" method="POST">
            <input hidden value="${product.id}" name="productId" />
            <button class="button has-icon is-inverted">
              <i class="fa fa-shopping-cart"></i> Kup
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
   <aside class="shopFiltres">
        <h3>Filtry</h3>
          <div>
           <h4>Kategorie lamp</h4>
             <ul>
                <li data-filter="wszystkie"><a href="#"> Wszystkie produkty</a></li>
                <li data-filter="nowoczesne"><a href="#"> Nowoczesne</a></li>
                <li data-filter="klasyczne"><a href="#"> Klasyczne</a></li>
                <li data-filter="dzieciece"><a href="#"> Dziecięce</a></li>
                <li data-filter="sufitowe"><a href="#"> Sufitowe</a></li>
                <li data-filter="kinkietowe"><a href="#"> Kinkietowe</a></li>
                <li data-filter="stojace"><a href="#"> Stojące</a></li>
                <li data-filter="stolowe"><a href="#"> Stołowe</a></li>
              </ul>
          </div>
          <div>
            <h4>Cena</h4>
              <ul>
                <li data-filter="till50"><a href="#">poniżej 50,00 zł</a></li>
                <li data-filter="till100"><a href="#"> od 50,00 do 100,00 zł</a></li>
                <li data-filter="till200"><a href="#"> od 100,00 do 200,00 zł</a></li>
                <li data-filter="till300"><a href="#"> od 200,00 do 300,00 zł</a></li>
                <li data-filter="till500"><a href="#"> od 300,00 do 500,00 zł</a></li>
                <li data-filter="over500"><a href="#"> powyżej 500,00 zł</a></li>
              </ul>
          </div>
          <div>
            <h4>Kolor</h4>
              <ul>
              <div>
                <input type="checkbox" data-filter="white" name="white">
                <label for="white">Biały</label>
              </div>
              <div>
                <input type="checkbox" data-filter="black" name="black">
                <label for="black">Czarny</label>
              </div>
              <div>
                <input type="checkbox" data-filter="silver" name="silver">
                <label for="silver">Srebny</label>
              </div>
              <div>
                  <input type="checkbox" data-filter="gold" name="gold">
                  <label for="gold">Żłoty</label>
              </div>
              <div>
                  <input type="checkbox" data-filter="grey" name="grey">
                  <label for="grey">Szary</label>
              </div>
              <div>
                  <input type="checkbox" data-filter="copper" name="copper">
                  <label for="copper">Miedziany</label>
              </div>
              <div>
                  <input type="checkbox" data-filter="beech" name="beech">
                  <label for="beech">Buk</label>
              </div>
              <div>
                  <input type="checkbox" data-filter="oak" name="oak">
                  <label for="oak">Dąb</label>
              </div>
              <div>
                  <input type="checkbox" data-filter="venge" name="venge">
                  <label for="venge">Venge</label>
              </div>
              <div>
                  <input type="checkbox" data-filter="glass" name="glass">
                  <label for="glass">Szkło</label>
              </div>
              <div>
                  <input type="checkbox" data-filter="multiColor" name="multiColor">
                  <label for="multiColor">Kolorowe</label>
              </div>
              </ul>
           </div>

       <div>
          <h4>Ilość punktów świetlnych</h4>
            <select class="lightingPoint">
                <option value="none">...</option>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="four">3</option>
                <option value="five">4</option>
                <option value="overFive">>5</option>
              </select>
      </div>
   </aside>
  <section class="shopBanner">
<div class="field">
<h1>Sklep firmowy</h1>
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Szukaj</button>
  <input type="text" class="form-control" placeholder="Wyszukaj" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>

</div>
  </section>
  <main class="allShop">
    <div class="container">
            <div class="columns">
              <div class="column is-four-fifths">
                <div class="columns products">
                    ${renderedProducts}  
                </div>
              </div> 
            </div>
      </div>   
  </main>
</section>
              `
    });
};
