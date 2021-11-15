const layout = require('../layout');

module.exports =  () => {
  
      return layout({
      content: `
      <section class="banner">
                  <img class="slider" src="/images/layout/lamp1.jpg" alt="">
                
      </section>
       
      <section class="header-bottom">
                 <nav class="navbar navbar-inverse">
                <div class="container-bottom">
                <button id='burger' class="myHamburger">
                  <i class="fas fa-bars show"></i>
                  </button>
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
                <img class="imgCondition" src="/images/layout/freeDelivery.png" alt="">
                <h2>Darmowa dostawa</h2>
                <p>Przy zamówieniach powyżej 500 zł przesyłka gratis.</p>
                </div> 
                <div class="condition">
                <img class="imgCondition" src="/images/layout/timeDelivery.png" alt="">
                <h2>Wysyłka w 48 H</h2>
                <p>Szybka dostawa do domu lub punktu odbioru Inpost.</p>
                </div> 
                <div class="condition">
                <img class="imgCondition" src="/images/layout/return.png" alt="">
                <h2>14 dni na zwrot</h2>
                <p>Możesz zwrócić zakupiony produkt bez podania przyczyny.</p>
                </div> 
                <div class="condition">
                <img class="imgCondition" src="/images/layout/payment.png" alt="">
                <h2>Płatność przy odbiorze lub przelewem</h2>
                <p>Wykonaj przelew ze swojego konta, prześlij nam potwierdzenie lub zapłać przy odbiorze</p>
              </div> 
        </section>
        
        <section class="gallery">
              <div class="images">
                <div class="image">
                  <a href=""><img src="/images/layout/artykul.jpg" alt="">
                  <h2>Wszystkie artykuły</h2></a></div>
                <div class="image">
                  <a href=""><img src="/images/layout/artykul.jpg" alt="">
                  <h2>Lampy nowoczesne</h2></a></div>
                <div class="image">
                  <a href=""><img src="/images/layout/artykul.jpg" alt="">
                  <h2>Lampy klasyczne</h2></a></div>
                <div class="image">
                  <a href=""><img src="/images/layout/artykul.jpg" alt="">
                  <h2>Lampy dziecięce</h2></a></div>
                <div class="image">
                  <a href=""><img src="/images/layout/artykul.jpg" alt="">
                  <h2>Lampy stołowe</h2></a></div>
                <div class="image">
                  <a href=""><img src="/images/layout/artykul.jpg" alt="">
                  <h2>Lampy podłogowe</h2></a></div>
                <div class="image">
                  <a href=""><img src="/images/layout/artykul.jpg" alt="">
                  <h2>Lampy wiszące</h2></a></div>
                <div class="image">
                  <a href=""><img src="/images/layout/artykul.jpg" alt="">
                  <h2>Kinkiety</h2></a></div>
              </div>
        </section>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="/js/home.js"></script>
        <script src="/js/cart.js"></script>
        
      `
    });
};
