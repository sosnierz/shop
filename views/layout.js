module.exports = ({ content }) => {
 
  return `
    <!DOCTYPE html>
      <html lang="pl">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PLM LedLight</title>
        
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link href="/css/contact.css" rel="stylesheet">
        <link href="/css/shop.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
      </head>

      <body>
      <div class="grid-container">
      <header class="header-top">
        <nav class="navbar navbar-top">
          <div class="container navbar-container">
            <div>
            
              <ul class="social">
             
                <li>
                <a href="tel:+48 796 545 585"><i class="fa fa-phone"></i><span>+48 796 545 585</span></a>
              </li>
              <li>
                <a href="mailto:biuro.plmledlight@gmail.com"><i class="fa fa-envelope"></i> <span>biuro.plmledlight@gmail.com</span></a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="social">
              <li><a href=""><i class="fab fa-facebook"></i></a></li>
              <li><a href=""><i class="fab fa-linkedin"></i></a></li>
              <li><a href="/"><i class="fas fa-home"></i></a></li>
              <li><a href="/shop"><i class="fas fa-store"></i></a></li>
              <li> <a href="/cart"><i class="fa fa-shopping-cart"></i><span class="item_shop"></span></a></li>
            </ul>
              
            </div>
          </div>
      </nav>
      </header>
     
        ${content}
         
       <footer class="footer">
          <h2>PLM Led-Light</h2>
              <div class="row justify-content-around">
                <div class="col-sm">
                <ul class="ulFooter">
                      <h4>PLM Led-Light</h4>
                      <li><a href="/">Strona główna</a></li>
                      <li><a href="/statute">Regulamin sklepu</a></li>
                      <li><a href="#">Polityka prywatności</a></li>
                </ul>
                </div>
                <div class="col-sm">
                <ul class="ulFooter">
                      <h4>Zakupy</h4>
                      <li><a href="/shop">Sklep</a></li>
                      <li><a href="/conditions">Dostawa i płatność</a></li>
                      <li><a href="/giveback">Zwrot i reklamacja</a></li>
                    </ul>
                </div>
                <div class="col-sm">
                    <ul class="ulFooter">
                      <h4>Obsługa klienta</h4>
                      <li><a href="/contact">Skontaktuj się z nami</a></li>
                      <li><a href="tel:+48 796 545 585"> +48 796 545 585</a></li>
                      <li>Otwarte w godzinach od 8:00 do 18:00</li>
                    </ul>
                </div>
              </div>    
              <div class="row justify-content-center">
              <div class="copy">
              <p>&copy; 2021 Plm Led-Light Sp. z o.o. </p>
              </div>
            
                          </div>
                 </div>
       </footer>
       
      
    </div>
   

 
      </body>
    
    </html>
  `;
};

