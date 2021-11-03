const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ product, errors }) => {
  return layout({
    content: `
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="subtitle">Edytuj produkty</h1>

          <form method="POST" enctype="multipart/form-data">
            <div class="field">
              <label class="label">Nazwa</label>
              <input value="${
                product.title
              }" class="input" placeholder="Nazwa" name="title">
              <p class="help is-danger">${getError(errors, 'title')}</p>
            </div>
            
            <div class="field">
              <label class="label">Cena</label>
              <input value="${
                product.price
              }" class="input" placeholder="Cena" name="price">
              <p class="help is-danger">${getError(errors, 'price')}</p>
            </div>
            
            <div class="field">
              <label class="label">Zdjęcie</label>            
              <input type="file" name="image" />
            </div>

         

             <div class="field">
            <label class="label">Kategoria</label>  
                       
            <input type="checkbox" class="" name="category" value="klasyczne">  
            <label for="category"> Klasyczne </label><br>
            

              <input type="checkbox" class="" name="category" value="nowoczesne">
              <label for="category"> Nowoczesne </label><br>

              <input type="checkbox" class="" name="category" value="sufitowe">
              <label for="category"> Sufitowe </label><br>
            

              <input type="checkbox" class="" name="category" value="stojace">
              <label for="category"> Stojące </label><br>
              

              <input type="checkbox" class="" name="category" value="dzieciece">
              <label for="category"> Dziecięce </label><br>
            

              <input type="checkbox" class="" name="category" value="stolowe">
              <label for="category"> Stołowe </label><br>
             

              <input type="checkbox" class="" name="category" value="kinkietowe">
              <label for="category"> Kinkietowe </label><br>
              
          </div>

            <div class="field">
            <label class="label">Materiał</label>  
            
            <input type="checkbox" class="" name="fabric" value="white">  
            <label for="fabric"> Biały </label><br>
             

              <input type="checkbox" class="" name="fabric" value="black">
              <label for="fabric"> Czarny </label><br>
             

              <input type="checkbox" class="" name="fabric" value="silver">
              <label for="fabric">Srebny  </label><br>
             

              <input type="checkbox" class="" name="fabric" value="gold">
              <label for="fabric"> Złoty </label><br>
             

              <input type="checkbox" class="" name="fabric" value="grey">
              <label for="fabric"> Szary </label><br>
            

              <input type="checkbox" class="" name="fabric" value="copper">
              <label for="fabric"> Miedziany </label><br>
              

              <input type="checkbox" class="" name="fabric" value="beech">
              <label for="fabric"> Buk </label><br>
             
              
              <input type="checkbox" class="" name="fabric" value="oak">
              <label for="fabric"> Dąb </label><br>
                          
              <input type="checkbox" class="" name="fabric" value="venge">
              <label for="fabric"> Venge </label><br>
              
              <input type="checkbox" class="" name="fabric" value="glass">
              <label for="fabric"> Szkło </label><br>
              
              <input type="checkbox" class="" name="fabric" value="multiColor">
              <label for="fabric"> Kolorowe </label><br>
              
          </div>

          <div class="field">
            <label class="label">Regulacja kąta świecenia</label>  
            <input type="checkbox" class="" name="shine" value="true">
              <label for="shine"> Tak </label><br>
              <input type="checkbox" class="" name="shine" value="false">
              <label for="shine"> Nie </label><br>
          </div>

          <div class="field">
              <label class="label">Rozmiar</label>
              <input value="${product.size}" class="input" placeholder="Rozrmiar" name="size">
              <p class="help is-danger">${getError(errors, 'size')}</p>
            </div>
            <div class="field">
              <label class="label">Ilość żarówek</label>
              <input value="${product.bulb}" class="input" placeholder="Liczba" name="bulb">
              <p class="help is-danger">${getError(errors, 'bulb')}</p>
            </div>
            <div class="field">
            <label class="label">Informacje o produkcie</label>
            textarea  value="${product.information}" class="input" name="information" row="150" column="150" /></textarea>
            <p class="help is-danger">${getError(errors, 'information')}</p>
                      </div>
          </div>
          
            <br />
            <button class="button is-primary">Edytuj</button>
          </form>
        </div>
      </div>
    `
  });
};
