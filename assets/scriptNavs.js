import {updateContent} from "../assets/scriptUpdateContent.js";
import {updateNavs} from "../assets/scriptUpdateNavs.js";


//Get the web´s perspective 
const pers = document.querySelector(".perspective");


//Get outernav button from the header
const outerNavBtn = document.querySelector(".header--nav-toggle");
const onb = new Hammer(outerNavBtn);

//Get the outernav menu and the list items
const outerNav = document.querySelector(".outer-nav");
const onLis = outerNav.querySelectorAll("li");

//This allows you to return to the normal perspective (it appears when the perspective change)
const onReturn = document.querySelector(".outer-nav--return");
const onRetHam = new Hammer(onReturn);



//Get outernav menu and list items
const sideNav = document.querySelector(".side-nav");
const snLis = sideNav.querySelectorAll("li");




//When you tap the outernav btn the perspective changes
onb.on("tap", () => {
  pers.classList.add("perspective--modalview");
  setTimeout(()=>{
    pers.classList.add("effect-rotate-left--animate");
  }, 25);

  outerNav.classList.add("is-vis");
  onLis.forEach(li => {
    li.classList.add("is-vis");
  });
  onReturn.classList.add("is-vis");
});


//Makes the perspective changes to normal
const returnNormal = ()=>{
  pers.classList.remove('effect-rotate-left--animate');
  setTimeout(()=>{
    pers.classList.remove('perspective--modalview');
  }, 400);
  outerNav.classList.remove("is-vis");
  onLis.forEach(li => {
    li.classList.remove("is-vis");
  });
  onReturn.classList.remove("is-vis");
};

//Update the navs, content and make pers normal
// const updateNavsContent = (navLi) =>{
//   console.log(navLi)
// };


//When you tap the outer nav return the perspective changes to normal
onRetHam.on("tap", returnNormal);



//Calls the functions those update the navs and the content
const updateNavContent = (nextPos) => {
  updateNavs(nextPos);
  updateContent(nextPos);
};


//When you tap a list item from outer nav  
//the perspective changes to normal, update the navs and content
// onLis.forEach(li => {
//   li.addEventListener("click",()=>{
//     const onLiHam = new Hammer(li);
//     console.log(onLis)
//     console.log(li)
    // console.log(li)
    // onLiHam.on("tap", console.log(onLiHam));
    // onLiHam.on("tap", updateNavs(li))
//   })
// });

for(let i=0 ; i<onLis.length; i++){
  onLis[i].addEventListener("click", ()=>{
    const liHam = new Hammer(onLis[i]); //Create a Hammer obj to the list items
    liHam.on("tap", updateNavContent(i))
    returnNormal();
  })
};



for(let i=0 ; i<snLis.length; i++){
  snLis[i].addEventListener("click", ()=>{
    const liHam = new Hammer(snLis[i]); //Create a Hammer obj to the list items
    liHam.on("tap", updateNavContent(i))
  })
};






