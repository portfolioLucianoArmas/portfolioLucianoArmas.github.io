import {updateContent} from "../assets/scriptUpdateContent.js";
import {updateNavs} from "../assets/scriptUpdateNavs.js";
import{disableSwiper} from "./slider.js";



let swipeUp = "swipeup"
let swipeDown = "swipedown"

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

//Get the body to exe a function when it loads
const bodyElem = document.querySelector("body");


//Get sidernav menu and list items
const sideNav = document.querySelector(".side-nav");
const snLis = sideNav.querySelectorAll("li");


//Get the main container to make it responsive
let targetElement = document.getElementById('viewport');
let mainContent = new Hammer(targetElement);


//Get popup container to cancel the swipe action while is active
// const popCont = document.getElementById("popup");


//When the web loads the swiper is disabled
bodyElem.addEventListener("load", disableSwiper());


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

//-----ELIMINAR DESDE
//Update the navs, content and make pers normal
// const updateNavsContent = (navLi) =>{
//   console.log(navLi)
// };
//-----ELIMINAR HASTA

//When you tap the outer nav return the perspective changes to normal
onRetHam.on("tap", returnNormal);



//Calls the functions those update the navs and the content
const updateNavContent = (nextPos) => {
  updateNavs(nextPos);
  updateContent(nextPos);
};

//-----ELIMINAR DESDE
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
//-----ELIMINAR HASTA


//When a list item from the navs is clicked modify the navs and content
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



//Make the main content responsive:

//-Using a touch screen (snapping)
// mainContent.get("swipe").set({direction: Hammer.DIRECTION_VERTICAL});
mainContent.get("swipe").set({direction: Hammer.DIRECTION_ALL});
mainContent.on("swipeup swipedown swipeleft swiperight", (e)=>{
  updateHelper(e);
});


//-Using a keyboard (arrow keys)
document.addEventListener("keyup", (e)=>{
  updateHelper(e);
  // if(!(popCont.classList.contains("popup"))){
  //   updateHelper(e);
  // }
})


//-Using mousewheel
let canScroll = true
let scrollController = null
document.addEventListener("wheel", (e) =>{
  if(!(outerNav.querySelector(".is-vis"))){
    // e.preventDefault();
    let delta = (e.deltaY)

    if(delta > 0 && canScroll){
      canScroll = false;
      clearTimeout(scrollController);
      scrollController = setTimeout(function(){
        canScroll = true;
      }, 800);
      updateHelper(1);

    }else if(delta < 0 && canScroll){
      canScroll = false;
      clearTimeout(scrollController);
      scrollController = setTimeout(function(){
        canScroll = true;
      }, 800);
      updateHelper(-1);
    }
  }
})


// --Determine swipe, and arrow key direction
const updateHelper = (e) =>{
  let liActive = sideNav.querySelector(".is-active");
  let curPos = (Array.from(snLis).indexOf(liActive));
  let lastPos = (Array.from(snLis).length) - 1;
  let nextPos = 0;

  if (e.type === swipeUp || e.keyCode === 40 || e > 0){
    if(curPos !== lastPos){
      nextPos = curPos + 1;
    } else if(curPos===0){
      nextPos = lastPos;
    }
  } else if (e.type === swipeDown || e.keyCode === 38 || e < 0){
    if (curPos !== 0){
      nextPos = curPos - 1;
    }
    else {
      nextPos = lastPos;
    }
  } 
  else{
    nextPos = curPos;
  }
  updateNavContent(nextPos);
} 


//Modifying the swipe navigation for mobile devices
window.addEventListener("load", () =>{
  if(window.innerWidth <= 1024 && window.innerHeight <= 1368){
    swipeUp = "swiperight"
    swipeDown = "swipeleft"
  }
})



