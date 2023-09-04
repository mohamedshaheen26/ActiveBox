window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    document.querySelector("nav").classList.add("nav");
  } else {
    document.querySelector("nav").classList.remove("nav");
  }
}

const menu = document.getElementById("menu");
const sections = document.querySelectorAll("section");
const icons = document.getElementById("icons");
const cont = document.getElementById("cont");

(function () {
  let list = "";
  for (let i = 0; i < sections.length; i++) {
    list += `<li><a href="#${sections[i].id}" onclick="myfunction()" class="menu-links">${sections[i].dataset.nav}</a></li>`;
    menu.innerHTML = list;
  }
})();

function myfunction() {
  icons.classList.toggle("change");
  menu.classList.toggle("visible");
}

/********Another Soultion ********/

// let k = [...document.querySelectorAll('section')].map(item => item.id);
// console.log(k);
// const links = document.querySelectorAll('#menu a');
// console.log(links);
// for (let i = 0; i < links.length; i++) {
//   debugger;
//   const element = links[i];
//   element.href = '#'+ k[i]
// }

icons.addEventListener("click", () => {
  menu.classList.toggle("visible");
  icons.classList.toggle("change");
});

const images = [
  "style/images/work-1.jpg",
  "style/images/work-2.jpg",
  "style/images/work-3.jpg",
  "style/images/work-4.jpg",
  "style/images/work-5.jpg",
  "style/images/work-6.jpg",
  "style/images/work-7.jpg",
  "style/images/work-8.jpg",
];
const Secworks = document.getElementById("section-2");

(function createWorks() {
  let parent = "";
  for (let i = 0; i < images.length; i++) {
    // parent += `<div class="parent" data-src="${images[i]}" onclick="changeIt(this.src)">
    // <img src="${images[i]}" alt="Work ${i}">
    // <div class="bg-color">
    // <h4>Project Name</h4>
    // <p>Website Design</p>
    // </div>
    // </div>`;
    // Secworks.innerHTML = parent;
    let parent = document.createElement("div");
    parent.className = "parent";
    parent.setAttribute("data-src", `${images[i]}`);
    parent.setAttribute("id", `id-${i}`);
    let img = document.createElement("img");
    img.setAttribute("src", `${images[i]}`);
    parent.append(img);
    let bgColor = document.createElement("div");
    bgColor.className = "bg-color";
    let heading = document.createElement("h4");
    heading.textContent = "Project Name";
    bgColor.append(heading);
    let para = document.createElement("p");
    para.textContent = "Website Design";
    bgColor.append(para);
    parent.append(bgColor);
    Secworks.append(parent);

    parent.addEventListener("click", () => {
      if (parent.hasAttributes(`id-${i}`)) {
        let _src = parent.getAttribute("data-src");
        cont.style.opacity = "1";
        cont.style.zIndex = "999";
        let newImg = document.getElementById("img");
        newImg.setAttribute("src", _src);
        document.querySelector("body").style.overflow = "hidden";
      }
    });
  }
})();


document.getElementById("close").addEventListener("click", () => {
  cont.style.opacity = "0";
  cont.style.zIndex = "-999";
  document.querySelector("body").style.overflow = "visible";
});
