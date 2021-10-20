const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="subtitle">Dodaj produkt</h1>

          <form method="POST" enctype="multipart/form-data">
            <div class="field">
              <label class="label">Nazwa</label>
              <input class="input" placeholder="Nazwa" name="title">
              <p class="help is-danger">${getError(errors, 'title')}</p>
            </div>
            
            <div class="field">
              <label class="label">Cena</label>
              <input class="input" placeholder="Cena" name="price">
              <p class="help is-danger">${getError(errors, 'price')}</p>
            </div>
            
            <div class="field">
              <label class="label">Zdjęcie</label>            
              <input type="file" name="image" />
            </div>

            <div class="field">
            <label class="label">Informacje o produkcie</label>
            <textarea class="input" name="information" row="150" column="150" /></textarea>
            <p class="help is-danger">${getError(errors, 'information')}</p>
          </div>
            <div class="field">
            <label class="label">Dodaj do polecanych</label>  
            <input type="checkbox" class="" name="favorites" value="true">
              <label for="favorites"> Tak </label><br>
              <input type="checkbox" class="" name="favorites" value="false">
              <label for="favorites"> Nie </label><br>
          </div>

            <br />
            <button class="button is-primary">Utwórz</button>
          </form>
        </div>
      </div>
    `
  });
};
