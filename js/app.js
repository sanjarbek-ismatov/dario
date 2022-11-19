var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  speed: 1000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const nav = document.getElementById('nav')
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    nav.classList.add('scroll-nav')
  }
  else{
    nav.classList.remove('scroll-nav')
  }
}