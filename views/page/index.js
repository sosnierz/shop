const layout = require('../layout');

module.exports =  () => {
      return layout({
      content: `
      <section class="banner ">
          <img class="slider" src="/images/lamp1.jpg" alt="">
          <div class="dots">
      <span id="one" class="active"></span>
      <span id="two"></span>
      <span id="three"></span>
      <span id="four"></span>
    </div>
         </section>
        <section class="header-bottom">
         <nav class="navbar navbar-inverse">
            <div class="container-bottom">
              <ul class="nav-bottom">
                <li><a href="/">Start</a></li>
                <li><a href="/shop">Produkty</a></li>
                <li><a href="/conditions">Dostawa i płatność</a></li>
                <li><a href="/contact">Kontakt</a></li>
              </ul> 
            </div>
          </nav> 
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
        
        <section class="gallery">
          <div class="images">
            <div class="image">
            <a href=""></a>
            <h2>Wszystkie artykuły</h2></div>
            <div class="image">
            <a href=""><img src="/images/artykul.jpg" alt=""></a>
            <h2>Lampy nowoczesne</h2></div>
            <div class="image">
            <a href=""><img src="/images/artykul.jpg" alt=""></a>
            <h2>Lampy klasyczne</h2></div>
            <div class="image">
            <a href=""><img src="/images/artykul.jpg" alt=""></a>
            <h2>Lampy dziecięce</h2></div>
            <div class="image">
            <a href=""><img src="/images/artykul.jpg" alt=""></a>
            <h2>Lampy stołowe</h2></div>
            <div class="image">
            <a href=""><img src="/images/artykul.jpg" alt=""></a>
            <h2>Lampy podłogowe</h2></div>
          </div>
        </section>
       
        <script src="/js/home.js"></script>
      `
    });
};
