let navOpen = document.querySelector("#nav-open");
let navMenu = document.querySelector("#nav-right");
let navClose = document.querySelector("#nav-close");
let header = document.querySelector("#header")
let moveToTopBtn = document.querySelector(".moveToTop")

navOpen.addEventListener("click",()=>{
   navMenu.classList.add("show-menu") 
})
navClose.addEventListener("click",()=>{
   navMenu.classList.remove("show-menu")
})

window.addEventListener("scroll",()=>{
 if(window.scrollY >=38){
  header.classList.add("blur-header")
  moveToTopBtn.classList.add("show_moveToTop")
 }else{
  header.classList.remove("blur-header")
  moveToTopBtn.classList.remove("show_moveToTop")
 }
})

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'horizontal', // or 'vertical'
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints:{
    720: {
      spaceBetween: 0,
    },
  },
  loop: true, // Optional: to loop slides
 grabCursor:true,
  // Autoplay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});