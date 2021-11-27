const layout = require('../layout');


module.exports =  () => {
    return layout({
    content: `
<section class="givebacks">
<article>
 <h1> 14 dni za zwrot</h1>
  <h2> Czy mogę zwrócić zakupiony towar?</h2>
<p>Nasz sklep w pełni respektuje Państwa prawa wynikające z ustawy z dnia 30 maja 2014 r. o prawach konsumenta (Dz.U. 2014 poz 827). Z towaru zakupionego w naszym sklepie mogą Państwo zrezygnować bez podania przyczyny w terminie i na warunkach określonych w powyższej ustawie. Odstąpienie od umowy wolne jest od zapłaty jakiejkolwiek sumy, czyli odstępnego.</p>
<h2>Jak mogę zwrócić towar?</h2>
<p>Upewnij się, że spełniasz dwa poniższe warunki zwrotu zakupionego towaru:</p>
<ol>
<li>nie minęło 14 dni kalendarzowych od dnia otrzymania zamówienia</li>
<li>zakupu dokonałeś jako konsument lub zakup nie miał charakteru zawodowego i korzystasz z równoważnej ochrony zgodnie z art. 27 ustawy o prawach konsumenta</li>
</ol>
<p>Wypełnij poniższy formularz zwrotu towaru i dołącz go do przesyłki.<p/>
<object data="plik.pdf" width="100%" height="300">
   <a href=""/images/layout/returnform.pdf">Pobierz plik</a>
</object>
<br>
<p>Wyślij zwracany produkt wraz z powyższym oświadczeniem na adres:</p>
<p>PLM LedLight Sp. z o.o.<br>
ul. Ludowa 11a<br>
62-080 Sady<br>
</p>
<br>
<h2>Zwrotu towaru możesz dokonać na następujących warunkach:</h2>
<ol>
<li>towar wraz z wypełnionym formularzem zwrotu można zwrócić po okazaniu faktury zakupu lub paragonu</li>
<li>w przypadku gdy płatność za zwracany towar była dokonywana gotówką, zwrot w tej samej formie nastąpi tylko w przypadku zgodności danych na fakturze sprzedaży z okazanym dokumentem tożsamości zawierającego zakup. W innym przypadku rozliczenie następuje w formie przelewu na konto.</li>
</ol>

<h3>Towar można zwrócić w ciągu 14 dni kalendarzowych od daty odbioru towaru.</h3>
<p>Jeżeli okres 14 dni kończy się w weekend lub święto, termin przechodzi na następny dzień roboczy.</p>
<p>Zwrot towaru do sklepu odbywa się na koszt Klienta.</p>
<p>Rozpakowanie towaru nie powoduje wygaśnięcia prawa do zwrotu towaru.</p>
<p>Klient otrzyma zwrot pieniędzy najpóźniej w ciągu 14 dni kalendarzowych od zwrotu towaru, z reguły do 3 dni roboczych od daty dostarczenia towaru do sklepu.</p>
<p>Przed odesłaniem towaru do sklepu należy dobrze go zabezpieczyć.</p>
<p>W przypadku niespełnienia, którejś z powyższych zasad zwrot może nie zostać przyjęty.</p>

<h2>Jak zgłosić reklamację?</h2>
<p>W przypadku pytań lub wątpliwości nasi konsultanci z Biura Obsługi Klienta są do Państwa dyspozycji od poniedziałku do piątku w godzinach 8:00 - 18:00 pod numerem telefonu +48 796 545 585</p>
</article>
</section>
    `
  });
};
