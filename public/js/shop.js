
  

const allA = document.querySelectorAll('.category');
const shopProduct = document.querySelectorAll('.shopProduct');



for (i = 0; i < allA.length; i++) {

    allA[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        shopProduct.forEach((product)=> {
            if (filter === 'Wszystkie produkty'){
                product.style.display = 'block'
            } else {
                if (product.category == filter){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};
        