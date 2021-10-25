const slideList = [
    "/images/lamp1.jpg", "/images/lamp2.jpg", "/images/lamp3.jpg", "/images/lamp4.jpg"]
    
   
   const image = document.querySelector('img.slider');
   const dots = [...document.querySelectorAll('.dots span')]
   // Interfejs
   const time = 4000;
   let active = 0;
   
  
   const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
   }
   
   const changeSlide = () => {
    active++;
    if (active === slideList.length) {
     active = 0;
    }
    image.src = slideList[active];
    changeDot()
   }
   let timeIndex = setInterval(changeSlide, time)  
   
  


   console.log("hello");