const box = document.querySelector("div");

Object.assign(
    box.style, {
        height: "400px",
        width: "400px",
        background: "purple",
        border: "5px solid black",
        margin: "100px auto",
});

const color = ["red", "yellow", "green"];

let i = 0;

box.addEventListener("mouseenter", ()=>{
    box.style.backgroundColor = color[i++];
    if (i == 3) {
      i = 0;
    };
});

box.addEventListener("mouseleave", ()=>{
    box.style.backgroundColor = "purple";
});
