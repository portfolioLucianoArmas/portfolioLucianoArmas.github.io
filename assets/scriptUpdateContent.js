const mainCont = document.querySelector(".main-content");


export const updateContent = (/*curPos, */nextPos/*, lastItem*/) =>{
  (mainCont.querySelector(".section--is-active")).classList.remove("section--is-active");
  //Si llego a usar el curPos seria:
  // mainCont.children[curPos].classList.remove("section--is-active");
  mainCont.children[nextPos].classList.add("section--is-active");
}

