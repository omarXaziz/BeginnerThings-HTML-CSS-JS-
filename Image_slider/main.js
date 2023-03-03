let left = document.getElementById("leftBtn");
let right = document.getElementById("rightBtn");
let imgDiv = document.getElementById("img");
let index = 0;
const pictures = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg" 
];
imgDiv.src = pictures[index];
left.addEventListener("click", ()=>{
    index--;
    if (index>=0){
        imgDiv.src = pictures[(index%5)];
    }
    else {
        index=0;
        imgDiv.src = pictures[(index%5)];
    }
 
});
right.addEventListener("click", ()=>{
    index++;
    if (index<5){
        imgDiv.src = pictures[(index)];
    }
    else {
        index=0;
        imgDiv.src = pictures[(index)];
    }
});