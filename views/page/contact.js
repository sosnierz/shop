const layout = require('../layout');

module.exports =  () => {
    return layout({
    content: `
    
      <section class="contact">
      <form>
      <h1 class="contactUs">Contact us</h1> 
      <div class="form-group">
      <label for="exampleFormControlInput1">Imię i nazwisko</label>
      <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Jan Kowalski">
    </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Adres E-mail</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Temat wiadomości</label>
        <select class="form-control" id="exampleFormControlSelect1" placeholder="Wybierz temat...">
        <option>Wybierz temat...</option>
        <option>Dostępność towaru</option>
          <option>Zwrot</option>
          <option>Reklamacja</option>
          <option>Realizacja zamówienia</option>
          <option>Inne</option>
        </select>
      </div>
         <div class="form-group">
        <label for="exampleFormControlTextarea1">Twoja wiadomość</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Wyślij
</button>
    </form>
      </section>
  <section class="map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9727.699560770185!2d16.725590343933103!3d52.44427536040253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470447302fbc540f%3A0x52885596db06bdc1!2sLudowa%2011a%2C%2062-080%20Sady!5e0!3m2!1sen!2spl!4v1635853767818!5m2!1sen!2spl" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </section>

    `
  });
};
