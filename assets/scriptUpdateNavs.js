import{disableSwiper, enableSwiper} from "./slider.js";

const sideNav = document.querySelector(".side-nav");
const outerNav = document.querySelector(".outer-nav");


// sync side and outer navigations
export const updateNavs = (nextPos) => {
  (sideNav.querySelector(".is-active")).classList.remove("is-active");
  (outerNav.querySelector(".is-active")).classList.remove("is-active");
  outerNav.children[nextPos].classList.add("is-active");
  sideNav.children[nextPos].classList.add("is-active");
  
  let liActive = sideNav.querySelector(".is-active");
  
  if((liActive.textContent == "Projects")){
    enableSwiper();
  }else if (!(liActive.textContent == "Projects")){
    disableSwiper();
  };
}





