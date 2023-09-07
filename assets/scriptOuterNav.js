//Get outernav button from the header
const outerNavBtn = document.querySelector(".header--nav-toggle");
const onb = new Hammer(outerNavBtn);

//Get the web´s perspective 
const pers = document.querySelector(".perspective");

//Get the outernav menu and the list items
const outerNav = document.querySelector(".outer-nav");
// const onLis = outerNav.querySelectorAll("li");  MAY BE I HAVE TO USE THIS INSTEAD
const onLi = outerNav.querySelector("li");
const onLiHam = new Hammer(onLi); //Create a Hammer obj to the list items

//This allows you to return to the normal perspective (it appears when the perspective change)
const onReturn = document.querySelector(".outer-nav--return");
const onRetHam = new Hammer(onReturn);


//When you tap the outernav btn the perspective changes
onb.on("tap", () => {
  pers.classList.add("perspective--modalview");
  setTimeout(()=>{
    pers.classList.add("effect-rotate-left--animate");
  }, 25);

  outerNav.classList.add("is-vis");
  onLi.classList.add("is-vis");
  onReturn.classList.add("is-vis");
});

//Makes the perspective changes to normal
const returnNormal = ()=>{
  pers.classList.remove('effect-rotate-left--animate');
  setTimeout(()=>{
    pers.classList.remove('perspective--modalview');
  }, 400);
  outerNav.classList.remove("is-vis");
  onLi.classList.remove("is-vis");
  onReturn.classList.remove("is-vis");
};

//When you tap the outer nav return or a list item from the outer nav, the perspective changes to normal
onRetHam.on("tap", returnNormal);
onLiHam.on("tap", returnNormal);




/*$('.outer-nav--return, .outer-nav li').click(function(){

      $('.perspective').removeClass('effect-rotate-left--animate');
      setTimeout(function(){
        $('.perspective').removeClass('perspective--modalview');
      }, 400);
      $('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');

    }); */



