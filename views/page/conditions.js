const layout = require('../layout');

module.exports =  () => {
    return layout({
    content: `
     <section class="allDelivery">
<article>
<h1>Formy i czasy dostawy </h1>
<table id="delivery">
   <thead>
   <tr>
   <td colspan="2" rowspan="2"></td>
   <th colspan="2" >Dostawa kurierem <br> <i class="fas fa-dolly"></i></th>
   <th colspan="2" >Dostawa do punktu odbioru<br> <i class="fas fa-map-marked-alt"></i></th>
   <th rowspan="2" >Odbiór osobisty<br> <i class="fas fa-people-carry"></i></th>
   </tr>
   <tr>
  <th><img class="deliveryMan"src="/images/layout/dpd.png" alt=""></th>
   <th><img class="deliveryMan"src="/images/layout/inpost.png" alt=""></th>
   <th><img class="deliveryMan"src="/images/layout/ruchu.jpg" alt=""></th>
   <th><img class="deliveryMan"src="/images/layout/paczkomat.png" alt=""></th>
   </tr>
   </thead>
<tbody>
<tr>
<th colspan="2"> Czas dostawy</th>
<td>1-5 dni</td>
<td>1-5 dni</td>
<td>1-5 dni</td>
<td>1-5 dni</td>
<td>1-3 dni</td>
</tr>
<tr>
<th rowspan="2" scope="rowgroup">Koszt wysyłki</th>
<th scope="row">poniżej 500 zł</th>
<td>20.00 zł</td>
<td>15.00 zł</td>
<td>9.90 zł</td>
<td>11.00 zł</td>
<td> 0 zł</td>
</tr>
<tr>

<th scope="row">powyżej 500 zł</th>
<td>gratis</td>
<td>gratis</td>
<td>gratis</td>
<td>gratis</td>
<td>-</td>
</tr>


    </tbody>
    </table>
    
</article>
</section>
<section class="allPayment">
<article>
<h1>Sposoby płatności</h1>
<h2>Karta kredytowa<img class="deliveryMan"src="/images/layout/visa.png" alt=""></h2>
<p>Jeśli chcesz zapłacić za zakupy kartą kredytową, zaznacz płatność „karta kredytowa lub debetowa”. Następnie przepisz numer swojej karty, datę ważności oraz kod CCV i zaakceptuj transakcję przyciskiem „Zapłać”. Kwota zostanie odpisana z Twojej karty Visa lub Mastercard.</p>

<h2>Płatność PayU<img class="deliveryMan"src="/images/layout/payU.png" alt=""></h2>
<p>Zaznacz płatność PayU, aby dokonać przelewu bankowego, a po przekierowaniu na kolejną stronę wybierz opcję PayU. Następnie wybierz swój bank spośród listy i dokonaj przelewu zgodnie z wytycznymi Twojego banku. Nie udostępniamy numeru konta do płatności poza PayU.</p>

<h2>BLIK<img class="deliveryMan"src="/images/layout/blik.png" alt=""></h2>
<p>Aby zapłacić BLIKIEM, wybierz tę opcję płatności i po przekierowaniu na kolejną stronę przepisz kod BLIK w aplikacji banku. Kliknij „zapłać”, potwierdź transakcję PINem w aplikacji banku i gotowe. Kwota zostanie automatycznie pobrana z Twojego rachunku bankowego.</p>

<h2>Płatność przy odbiorze<img class="deliveryMan"src="/images/layout/cash.png" alt=""></h2>
<p>Jeśli wolisz zapłacić za zamówienie kurierowi podczas odbioru przesyłki lub podczas odbioru zamówienia z magazynu sklepu, wybierz opcję „Płatność przy odbiorze”.</p>
<p>W przypadku odbioru osobistego płatność wyłacznie gotówką !<p>
</article>

 </section>
    `
  });
};
