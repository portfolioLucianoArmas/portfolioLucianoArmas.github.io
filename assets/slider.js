const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,


  //Effect
  effect: 'coverflow',
  coverflowEffect:{
    slideShadows: false,
    scale: 0.5,
    modifier: 2,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletElement:"swiper-slide",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },


  //Allows you to navigate using the keyboard arrows
  keyboard: {
    enabled: true,
  },


  //Allows you to slide in a touch screen
  freeMode:{
    enabled:true,
    sticky: true,
    momentumVelocityRatio: 0.5,
  },
});


export const enableSwiper = ()=>{
  swiper.enable();
}
export const disableSwiper = ()=>{
  swiper.disable();
}