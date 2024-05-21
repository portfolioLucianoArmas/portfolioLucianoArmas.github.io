const projectsDir = './config/projects.json';
const slider = document.querySelector(".swiper-wrapper");





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



      const techWeb = document.createElement("section");
      techWeb.classList.add("btnTechWeb");

      const techs = document.createElement("section");
      techs.classList.add("techs");

      const btnWeb = document.createElement("a")
      btnWeb.classList.add("button")
      btnWeb.setAttribute("type", "button");
      btnWeb.setAttribute("target", "_blank");
      btnWeb.setAttribute("href", pro.link);

      const btnWebText = document.createElement("span")
      btnWebText.classList.add("button__text")
      btnWebText.textContent = "Visit Web";

      const btnWebIcon = document.createElement("span")
      btnWebIcon.classList.add("button__icon")

      const svgBtnWeb = `<svg class="css-i6dzq1" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-www" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
      </svg>`;
      
      btnWebIcon.innerHTML = svgBtnWeb;



      (pro.techUsed).forEach(t => {
        let tech = document.createElement("div")
        tech.classList.add("techLogo")
        let svg;
        switch(t){
          case "CSS":
            svg = `<svg class="btnCSSLogo btnLogo" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-css3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            <span class="tooltip">CSS3</span>
            </svg>`
            tech.classList.add("logoCSS")
            break;

          case "HTML":
            svg = `<svg class="btnHTMLLogo btnLogo" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"/>
            <span class="tooltip">HTML5</span>
            </svg>`
            tech.classList.add("logoHTML")
            break;

          case "JS":
            svg = `<svg class="btnJSLogo btnLogo" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-javascript" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M7.5 8h3v8l-2 -1" />
            <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            <span class="tooltip">JavaScript</span>
            </svg>`
            tech.classList.add("logoJS")
            break;
          
          case "springboot":
            svg = `<svg class="btnSpringBootLogo btnLogo" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-power"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6a7.75 7.75 0 1 0 10 0" /><path d="M12 4l0 8" />
            <span class="tooltip">SpringBoot</span>
            </svg>`
            tech.classList.add("logoSpringBoot")
            break;

          case "mysql":
            svg = `<svg class="btnMySQLLogo btnLogo" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-mysql"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" /><path d="M9 7h.01" />
            <span class="tooltip">MySQL</span>
            </svg>`
            tech.classList.add("logoMySQL")
            break;

          case "bootstrap":
            svg = `<svg class="btnBootstrapLogo btnLogo"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bootstrap"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" />
            <span class="tooltip">Bootstrap</span>
            </svg>`
            tech.classList.add("logoBootstrap")
            break;



        }
        tech.innerHTML = svg
        techs.appendChild(tech)
      });


      btnWeb.appendChild(btnWebText)
      btnWeb.appendChild(btnWebIcon)

      techWeb.appendChild(techs)
      techWeb.appendChild(btnWeb)
      
      projInfo.appendChild(tit);
      projInfo.appendChild(descr);
      projInfo.appendChild(techWeb)
      slide.appendChild(img);
      slide.appendChild(projInfo);


      slider.appendChild(slide);
      });
      
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON', error);
    });
}


projectsLoad();


