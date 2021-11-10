const shopProduct = document.querySelectorAll('.shopProduct');

const allA = document.querySelectorAll('.category');
const fabrics = document.querySelectorAll(".fabric");
const aPrice = document.querySelectorAll('.input.price');
const bulbs = document.querySelectorAll('.bulb');
const btn = document.querySelector('.clear');
const min = document.querySelector('#min');
const max = document.querySelector('#max');
    
    

// fabric
function change() {
   
    const filters = {
    category: getClassOfCheckedCheckboxes(allA),
     fabric: getClassOfCheckedCheckboxes(fabrics),
     prices:getClassOfCheckedCheckboxes(aPrice),
     bulb:getClassOfCheckedCheckboxes(bulbs)
         };
  
    filterResults(filters);
  }
  
  function getClassOfCheckedCheckboxes(checkboxes) {
    let classes = [];
  
    if (checkboxes && checkboxes.length > 0) {
      for (let i = 0; i < checkboxes.length; i++) {
        var cb = checkboxes[i];
  
        if (cb.checked) {
          classes.push(cb.getAttribute("data-filter"));
        }
      }
    }
  
    return classes;
  }
  
  function filterResults(filters) {
   
    let hiddenElems = [];
  
    if (!shopProduct || shopProduct.length <= 0) {
      return;
    }
  
    for (let i = 0; i < shopProduct.length; i++) {
      let el = shopProduct[i];
//   fabric
      if (filters.fabric.length > 0) {
        let isHidden = true;
  
        for (let j = 0; j < filters.fabric.length; j++) {
          let filter = filters.fabric[j];
  
          if (el.classList.contains(filter)) {
            isHidden = false;
            break;
          }
         
        }
  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }  
    //   category
      if (filters.category.length > 0) {
        let isHidden = true;
  
        for (let z = 0; z < filters.category.length; z++) {
          let filter = filters.category[z];
  
          if (el.classList.contains(filter)) {
            isHidden = false;
            break;
          }
         
        }
          if (isHidden) {
          hiddenElems.push(el);
        }
      } 
    //   bulb
      if (filters.bulb.length > 0) {
        let isHidden = true;
  
        for (let p = 0; p < filters.bulb.length; p++) {
          let filter = filters.bulb[p];
  
          if (el.classList.contains(filter)) {
            isHidden = false;
            break;
          }
          
        }
  
        if (isHidden) {
          hiddenElems.push(el);
        }
      }  
    //   price
   
}
  
               
  
    for (let i = 0; i < shopProduct.length; i++) {
      shopProduct[i].style.display = "block";
    }
  
    if (hiddenElems.length <= 0) {
      return;
    }
  
    for (let i = 0; i < hiddenElems.length; i++) {
      hiddenElems[i].style.display = "none";
    }
   
// button uncheckbox  
    function uncheckAll() {
        document.querySelectorAll('input[type="checkbox"]')
          .forEach(el => el.checked = false);
          for (let i = 0; i < shopProduct.length; i++) {
            shopProduct[i].style.display = "block";
      }
    }
      btn.addEventListener('click', uncheckAll)      
    
  };


// Search input
const input = document.querySelector('#search');
const divImages = document.querySelector('.images');
const divImage = document.querySelectorAll('.image');
const h3Elements = document.querySelectorAll('.subtitle');

const searchTask = (e) => {
 const searchText = e.target.value.toLowerCase()
 let tasks = [...divImage];
 console.log(tasks);
 tasks = tasks.filter(divImages => divImages.textContent.toLowerCase().includes(searchText))
 divImages.textContent = "";
 tasks.forEach(h3Elements => divImages.appendChild(h3Elements))
}
input.addEventListener('input', searchTask)

// Sorting cards

let field = document.querySelector('.images');
let div = Array.from(field.children)
let select = document.querySelector('.sorting');
let ar=[];

for (let i of div){
  const h3 = i.children[2];
  const x = h3.innerHTML.trim();
  const y = Number(x.replace('zł', ''));
  i.setAttribute('data-price', y);
  ar.push(i);
}

select.onchange = sorting;
function sorting() {

  if(this.value === "Sort") {
    while(field.firstChild){
      field.removeChild(field.firstChild);
    }
    field.append(...ar)
  }
  if(this.value === "SortPriceHigh"){
    sortElement(field, div, true);
  }
  if(this.value === "SortPriceLoww"){
    sortElement(field, div, false);
    return bx-ax
  }
  // if(this.value === "SortPriceHigh"){}
  // if(this.value === "SortPriceHigh"){}
}

function sortElement(field, div, asc){
let dm, sortDiv;
dm = asc ? 1 : -1;
sortDiv = div.sort((a, b) => {
  const ax = a.getAttribute('data-price');
  const bx = b.getAttribute('data-price');
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
})
while(field.firstChild){
  field.removeChild(field.firstChild);
}
field.append(...sortDiv)
}