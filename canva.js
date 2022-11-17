import * as bootstrap from "./node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const designUI = [
    {
        name:"Whiteboard",
        photo:"a"
    },
    {
        name:"Facebook Post",
        photo:"b"
    },
    {
        name:"Facebook Cover",
        photo:"c"
    },
    {
        name:"Logo",
        photo:"d"
    },
    {
        name:"Website",
        photo:"e"
    },
    {
        name:"Flyer (Portrait)",
        photo:"f"
    },
    {
        name:"Card(Landscape)",
        photo:"g"
    },
    {
        name:"Instagram Post(square)",
        photo:"h"
    },
    {
        name:"Instagram Story",
        photo:"i"
    },
    {
        name:"Phone Wallpaper",
        photo:"j"
    },
    {
        name:"Graphs",
        photo:"k"
    },
    {
        name:"Presentations",
        photo:"l"
    },
    {
        name:"Certificate(Landscape)",
        photo:"m"
    }
];

const data = [
    {
        name:"Docs",
        photo:"docs",
        discription:"Bring the power of design to your documents. Launching soon, sign up to the Canva Docs (Beta) today."
    },
    {
        name:"Vedios",
        photo:"vedio",
        discription:"Video editing has never been easier. Try one-click Video Background Remover and our epic animations."
    },
    {
        name:"Print Products",
        photo:"print",
        discription:"Customize a wide range of print products to suit your style - all delivered straight to your doorstep."
    },
    {
        name:"Presentations",
        photo:"preent",
        discription:"Reimagine how you present with cinematic presentations, full of inspiring content and animations."
    },
    {
        name:"Websites",
        photo:"web",
        discription:"Create beautiful, responsive one-page websites for any occasion and choose a custom domain name."
    },
    {
        name:"Whiteboards",
        photo:"board",
        discription:"Get ideas flowing with infinite space to collaborate with your team from anywhere, and stay in sync with a timer."
    }
];

const RecentDesign = [
  {  photo:"aa"},
  {  photo:"bb"},
  {  photo:"cc"},
  {  photo:"dd"},
  {  photo:"ee"},
  {  photo:"ff"},
  {  photo:"gg"},
  {  photo:"hh"},
  {  photo:"ii"},
];

const badgeArrow = document.querySelector(".badgeArrow");
const cardUI     = document.querySelector(".cardUI");
const glider  = document.getElementById("glider")
const glider2  = document.getElementById("glider2")
const cardImage = document.querySelector("#cardImage")
const rows = document.getElementById("rows")

designUI.forEach((card)=>{
const div = document.createElement('div');
div.innerHTML =`
<div class="card border rounded rounded-3 glider-card" style="width: 20rem;">
  <img src="./imagesToTes/${card.photo}.jpg" class="card-img-top rounded rounded-4 cardImage" id="cardImage" alt="...">
  <div class="hover-search rounded rounded-4 justify-content-end">
  <div class="text-white my-2 p-5">Create Blank</div>
   <i class="bi bi-search fs-5 m-2 bg-white animate__animated animate__slideInDown"></i> 
  </div>
  <div class="card-body">
    <p class="card-text fw-bold">${card.name}</p>
  </div>
</div>
`
glider.append(div)
})

new Glider(document.querySelector('.glider'), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

  
  data.forEach(card => {
      const div = document.createElement('div');
      div.innerHTML =`
      <div class="card rounded rounded-3 p-2 bg-secondary" style="width: 18rem;">
      <img src="./imagesToTes/${card.photo}.jpg" class="card-img-top rounded rounded-3" style="width:250px;" alt="...">
      <div class="card-body">
      <h5 class="card-title">${card.name}</h5>
      <p class="card-text">${card.discription}</p>
      </div>
      </div>
      `
      glider2.append(div)
})

new Glider(document.querySelector('.glider2'), {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true
  });
  
  RecentDesign.forEach(design=>{
    let row = rows.insertRow();

    let cell1 = row.insertCell();
    cell1.innerHTML =`<img src="./imagesToTes/${design.photo}.jpg" alt="" class="cell1photo rounded rounded-3"> <div class="d-inline ms-2 fs-6"> Untitled Designs</div>`;
    
    let cell3 = row.insertCell();
    cell3.innerText = "logo";

    let cell2 = row.insertCell();
    cell2.innerText = "few days ago.";

    let cell5 = row.insertCell();
    cell5.innerHTML = `<i class="bi bi-three-dots"></i>`
  })

//   ./imagesToTes/aa.jpg