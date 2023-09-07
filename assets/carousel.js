const projects = `[
  {
    "title" : "project 1",
    "desc" : "Lorem ipsum dolor sit.",
    "img" : "guino.png",
    "linkGit" : "github",
    "techUsed" : ["js", "html", "css"]
  },
  {
    "title" : "project 1",
    "desc" : "Lorem ipsum dolor sit.",
    "img" : "guino.png",
    "linkGit" : "github",
    "techUsed" : ["js", "html", "css"]
  },
  {
    "title" : "project 1",
    "desc" : "Lorem ipsum dolor sit.",
    "img" : "silencioso.png",
    "linkGit" : "github",
    "techUsed" : ["js", "html", "css"]
  }
]`;

const projData = JSON.parse(projects);

const slider = document.querySelector(".swiper-wrapper");

projData.forEach(pro => {
  console.log(pro)
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  const img = document.createElement("img");
  img.setAttribute("src", `./imgs/${pro.img}`);

  const tit = document.createElement("h2");
  tit.innerHTML = pro.title;
  tit.classList.add("title");

  const descr = document.createElement("p");
  descr.innerHTML = pro.desc;
  descr.classList.add("description");

  slide.appendChild(img);
  slide.appendChild(tit);
  slide.appendChild(descr);

  slider.appendChild(slide);

});


