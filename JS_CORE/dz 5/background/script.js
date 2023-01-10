const body = document.querySelector("body");

const color = document.querySelector(".color");
const image = document.querySelector(".image");

const boxColor = document.querySelector(".box-color");
const boxImage = document.querySelector(".box-image");

// ============================================

const colors = document.querySelectorAll('.colors');

colors.forEach(elem=>{
  elem.addEventListener('click',()=>{
    body.style.background = elem.style.background;
  });
});

color.addEventListener("click", () => {
  boxColor.style.display = "block";
  boxImage.style.display = "none";
});
color.addEventListener("dblclick", () => {
  boxColor.style.display = "none";
});

// ===============================================

const images = document.querySelectorAll('.images');

images.forEach(elem=>{
  elem.addEventListener('click',()=>{
    body.style.background = elem.style.backgroundImage;
    body.style.backgroundSize = `cover`;
  });
});

image.addEventListener("click", () => {
  boxImage.style.display = "block";
  boxColor.style.display = "none";
});
image.addEventListener("dblclick", () => {
  boxImage.style.display = "none";
});