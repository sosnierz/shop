const layout = require('../layout');

module.exports = ({ products }) => {
  
  const renderedProducts = products
    .map(product => {
      return `
      <div data-price="" class="image shopProduct ${product.category.join(' ')} ${product.fabric.join(' ')} ${product.bulb}" > <img class="" src="data:image/png;base64, ${product.image}"/>
      <form action="/shop/${product.id}" method="POST"> 
      <a href="/shop/${product.id}">
      <h3 class="subtitle">${product.title} <br>${product.model}</h3>
      <h5 >${product.price.toFixed(2)} zł</h5>
       <input class="addCart" type="button" value="Szczegóły..."/>
       </a></form>
      </div>
      `
    })
    .join('\n');

    return layout({
      content: `
     
<section class="shop">

<div class="burgers">
<i class="burger fas fa-bars show active "></i>
<i class="burger fas fa-times active"></i>
</div>
   <aside class="shopFiltres active">
        <h3>Filtry</h3>
          <div>
           <h4>Kategorie lamp</h4>
             <ul class="categories">
             <div>
             <input class="category" type="checkbox" data-filter="nowoczesne" name="nowoczesne" onchange="change();">
             <label for="category">Nowoczesne</label>
           </div> 
             <div>
             <input class="category" type="checkbox" data-filter="klasyczne" name="klasyczne" onchange="change();">
             <label for="category">Klasyczne</label>
           </div> 
             <div>
             <input class="category" type="checkbox" data-filter="dzieciece" name="dzieciece" onchange="change();">
             <label for="category">Dziecięce</label>
           </div> 
             <div>
             <input class="category" type="checkbox" data-filter="sufitowe" name="sufitowe" onchange="change();">
             <label for="category">Sufitowe</label>
           </div> 
             <div>
             <input class="category" type="checkbox" data-filter="kinkietowe" name="kinkietowe" onchange="change();">
             <label for="category">Kinkietowe</label>
           </div> 
             <div>
             <input class="category" type="checkbox" data-filter="stojace" name="stojace" onchange="change();">
             <label for="category">Stojące</label>
           </div> 
             <div>
             <input class="category" type="checkbox" data-filter="stolowe" name="stolowe" onchange="change();">
             <label for="category">Stołowe</label>
           </div> 
           </ul>
           </div>
          
           <div>
            <h4>Cena</h4>
            <ul>
              <div>
             <input class="price" type="checkbox" data-price="0:50" value="1" name="price" onchange="change();">
             <label for="price">poniżej 50,00 zł</label>
           </div> 
              <div>
             <input class="price" type="checkbox" data-price="50:100" value="2 name="price" onchange="change();">
             <label for="price"> od 50,01 do 100,00 zł</label>
           </div> 
              <div>
             <input class="price" type="checkbox" data-price="100:200" value="3" name="price" onchange="change();">
             <label for="price">od 100,01 do 200,00 zł</label>
           </div> 
              <div>
             <input class="price" type="checkbox" data-filter="200:300" value="4" name="price" onchange="change();">
             <label for="price">od 200,00 do 300,00 zł</label>
           </div> 
              <div>
             <input class="price" type="checkbox" data-price="300:500" value="5" name="price" onchange="change();">
             <label for="price">od 300,00 do 500,00 zł</label>
           </div> 
              <div>
             <input class="price" type="checkbox" data-price="500:@Int32.MaxValue" value="6" name="price" onchange="change();">
             <label for="price">powyżej 500,00 zł</label>
           </div> 
           </ul>
          </div>
         
          <div>
            <h4>Kolor</h4>
              <ul class="fabrics">
              <div>
                <input class="fabric" type="checkbox" data-filter="white" name="white" onchange="change();">
                <label for="fabric">Biały</label>
              </div>
              <div>
                <input class="fabric" type="checkbox" data-filter="black" name="black" onchange="change();">
                <label for="fabric">Czarny</label>
              </div>
              <div>
                <input class="fabric" type="checkbox" data-filter="silver" name="silver" onchange="change();">
                <label for="fabric">Srebny</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="gold" name="gold" onchange="change();">
                  <label for="fabric">Żłoty</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="grey" name="grey" onchange="change();">
                  <label for="fabric">Szary</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="copper" name="copper" onchange="change();">
                  <label for="fabric">Miedziany</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="beech" name="beech" onchange="change();">
                  <label for="fabric">Buk</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="oak" name="oak" onchange="change();">
                  <label for="fabric">Dąb</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="venge" name="venge" onchange="change();">
                  <label for="fabric">Venge</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="wood" name="wood" onchange="change();">
                  <label for="fabric">Drewno w kolorze lampy</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="glass" name="glass" onchange="change();">
                  <label for="fabric">Szkło</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="metal" name="metal" onchange="change();">
                  <label for="fabric">Metal</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="material" name="material" onchange="change();">
                  <label for="fabric">Materiał</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="plastic" name="plastic" onchange="change();">
                  <label for="fabric">Plastik</label>
              </div>
              <div>
                  <input class="fabric" type="checkbox" data-filter="multiColor" name="multiColor" onchange="change();">
                  <label for="fabric">Kolorowe</label>
              </div>
              </ul>
           </div>

       <div>
          <h4>Ilość punktów świetlnych</h4>
            <ul class="lightingPoints">
            <div>
            <input class="bulb" type="checkbox" data-filter="1" name="bulb" onchange="change();">
            <label for="bulb">1</label>
        </div>
            <div>
            <input class="bulb" type="checkbox" data-filter="2" name="bulb" onchange="change();">
            <label for="bulb">2</label>
        </div>
            <div>
            <input class="bulb" type="checkbox" data-filter="3" name="bulb" onchange="change();">
            <label for="bulb">3</label>
        </div>
            <div>
            <input class="bulb" type="checkbox" data-filter="4" name="bulb" onchange="change();">
            <label for="bulb">4</label>
        </div>
            <div>
            <input class="bulb" type="checkbox" data-filter=">5" name="bulb" onchange="change();">
            <label for="bulb">5</label>
        </div>
              </ul>
      </div>
      <div>
      <button type="button" class="btn btn-outline-secondary clear">Wyczyść filtry</button>
      </div>
   </aside>
   

 <section class="shopBanner">
<div class="field">
<h1>Sklep firmowy</h1>
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i class="fas fa-search"></i></button>
  <input type="text" ID = "search" class="form-control" placeholder="Wpisz nazwę produktu" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>
  </div>
  </section>

   <main class="allShop">
  <div>
  <ul class="nav shopMenu">
    <li class="nav-item sort">
    <select class="sorting">
    <option value="Sort">Sortuj według:</option>
    <option value="sortA">Nazwa A-Z</option>
    <option value="sortZ">Nazwa Z-A</option>
    <option value="high">Cena rosnąco</option>
    <option value="low">Cena malejąco</option>
 </select>
    </li>
    <li class="nav-item scroll">
    <ul class="pagination justify-content-center">
    <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1"><</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item disabled"><a class="page-link" href="#" tabindex="1">></a>
    </li>
    </li>
    </ul>
    </li>
    
   
  </ul>
  
</div>
  <div>
    <div class="images">
                
                    ${renderedProducts}  
     </div>
     <nav aria-label="Page navigation example" >
  <ul class="pagination justify-content-center scroll">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1"><</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">></a>
    </li>
  </ul>
</nav>
  </main>
  
</section>
<script src="/js/shop.js"></script>

              `
    });
};
