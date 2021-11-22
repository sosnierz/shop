let images = document.querySelector(".imagesDiv");



   
   const createLiElements = () => {
        
       for (let i = 0; i < 5; i++ ){
       const div = document.createElement("div");
       div.innerHTML = `<div class="" > 
       <a href="#"><img class=""src="/images/lamps/7-DIANA/326.png"/>
       <h3 class="subtitle">Nazwa<br>Model</h3>
       <h5 >150.00 zł</h5></a></form>
       <form id="form" action="/cart/products" method="POST" >
         <input hidden value="" name="productId" />
         <button class="button has-icon is-inverted addCart" >Dodaj do
         <i class="fa fa-shopping-cart"></i></button>
       </form>
      
    </div>`;
         images.appendChild(div);
       }
       
   }
  
   createLiElements()
   
   let span = document.getElementsByTagName('spanMove');
	let images_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (images == 1){l = 0; }
		for(const i of images)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of images){
			if (images_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}