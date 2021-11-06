const shopProduct = document.querySelectorAll('.shopProduct');
const allA = document.querySelectorAll('.category');


for (i = 0; i < allA.length; i++) {
    allA[i].addEventListener('click', (e) => {
        e.preventDefault()
        const filter = e.target.dataset.filter;
        console.log(filter);
            shopProduct.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};
const search = document.querySelector(".form-control");
const productName = document.querySelectorAll(".subtitles h3");
       
search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.style.display = "none"
        }
    })
}       
           