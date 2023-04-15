const bgChangeBtn = document.getElementsByClassName("radio-btn");
const body = document.querySelector("body");

for (let i = 0; i < bgChangeBtn.length; i++) {
 bgChangeBtn[i].addEventListener("click", function (){
   let colorPick = bgChangeBtn[i].getAttribute("data");
   body.style.backgroundColor = colorPick;
 })
}
let img = document.querySelector("img");
let bgImgChange1 = document.getElementById("color");
let bgImgChange2 = document.getElementById("gray");
let bgImgChange3 = document.getElementById("white");

bgImgChange1.addEventListener("click", () => {
 img.srcset = "images/burberry2.png";
})
bgImgChange2.addEventListener("click", () => {
  img.srcset = "images/burberry1.png";
})
bgImgChange3.addEventListener("click", () => {
  img.srcset ='images/burberry03.png';
})
