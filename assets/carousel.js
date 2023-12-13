import{disableSwiper, enableSwiper} from "./slider.js";
const projectsDir = './config/projects.json';
const slider = document.querySelector(".swiper-wrapper");

//Popup elements
const moreInfo = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

const popImg = document.getElementById("popImg");
const popLink = document.getElementById("popLink");
const popTit = document.getElementById("popTitle");
const popDesc = document.getElementById("popDesc");
const popTechs = document.getElementById("popTechs");




//Adds slides to the slider
const projectsLoad = () =>{

  fetch(projectsDir)
    .then(response => response.json())
    .then(data =>{
      data.forEach(pro => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      const projInfo = document.createElement("div");
      projInfo.classList.add("projInfo");
    
      const img = document.createElement("img");
      img.setAttribute("src", `./imgs/${pro.img}`);
    
      const tit = document.createElement("h2");
      tit.innerHTML = pro.title;
      tit.classList.add("title");
    
      const descr = document.createElement("p");
      descr.innerHTML = pro.desc;
      descr.classList.add("description");

      const btnMoreInfo = document.createElement("button");
      btnMoreInfo.innerHTML = "More Info";
      btnMoreInfo.classList.add("btnInfo");
    
      projInfo.appendChild(tit);
      projInfo.appendChild(descr);
      projInfo.appendChild(btnMoreInfo);
      slide.appendChild(img);
      slide.appendChild(projInfo);

      btnMoreInfo.addEventListener("click", ()=>{
        showMoreInfo(pro.img, pro.title, pro.desc, pro.techUsed, pro.link);
      })
    
      slider.appendChild(slide);
      });
      
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON', error);
    });
}

//Show the popup content
const showMoreInfo = (img, name, desc, techs, linkWeb)=> {
  disableSwiper();
  moreInfo.classList.remove("hidden");
  moreInfo.classList.add("popup");

  popImg.setAttribute("src", `./imgs/${img}`);
  popLink.setAttribute("src", linkWeb);
  popTit.innerHTML = name;
  popDesc.innerHTML = desc;
  techs.forEach(t=>{
    const tech = document.createElement("li");
    const logoTech = document.createElement("img")
    logoTech.setAttribute("src", `./imgs/${t}.png`);

    tech.appendChild(logoTech);
    popTechs.appendChild(tech);
  })


  console.log(img);
  console.log(name);
  console.log(desc);
  console.log(techs);
  console.log(linkWeb);
};

/*
popLink
const popTit
const popDesc 
const popTechs
*/

/*
<div id="projectInfo">
            <img id="popImg">
            <button id="popLink"></button>
            <h2 id="popTitle"></h2>
            <p id="popDesc"></p>
          </div>

          <div id="projectTechs">
            <ul id="popTechs"></ul>
          </div>
*/

//Close the popup content
closeBtn.addEventListener("click", ()=>{
  moreInfo.classList.add("hidden");
  moreInfo.classList.remove("popup");
  enableSwiper();
  popTechs.innerHTML="";
})

projectsLoad();


// const projects = `[
//   {
//     "title" : "project 1",
//     "desc" : "Lorem ipsum dolor sit.",
//     "img" : "guino.png",
//     "linkGit" : "github",
//     "techUsed" : ["js", "html", "css"]
//   },
//   {
//     "title" : "project 1",
//     "desc" : "Lorem ipsum dolor sit.",
//     "img" : "guino.png",
//     "linkGit" : "github",
//     "techUsed" : ["js", "html", "css"]
//   },
//   {
//     "title" : "project 1",
//     "desc" : "Lorem ipsum dolor sit.",
//     "img" : "silencioso.png",
//     "linkGit" : "github",
//     "techUsed" : ["js", "html", "css"]
//   }
// ]`;

// const projData = JSON.parse(projects);

// const slider = document.querySelector(".swiper-wrapper");

// projData.forEach(pro => {
//   console.log(pro)
//   const slide = document.createElement("div");
//   slide.classList.add("swiper-slide");

//   const img = document.createElement("img");
//   img.setAttribute("src", `./imgs/${pro.img}`);

//   const tit = document.createElement("h2");
//   tit.innerHTML = pro.title;
//   tit.classList.add("title");

//   const descr = document.createElement("p");
//   descr.innerHTML = pro.desc;
//   descr.classList.add("description");

//   slide.appendChild(img);
//   slide.appendChild(tit);
//   slide.appendChild(descr);

//   slider.appendChild(slide);

// });


