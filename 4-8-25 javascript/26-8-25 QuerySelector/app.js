/*1 let img1Element=document.querySelector("#img1")//id,class,tagname,pseudo ke hisab se bhi kaam karta haai
// console.log(img1Element);
let img2Element=document.querySelector("#img2")
// console.log(img2Element)

function imageSwap(){
    let img1Path=img1Element.src;
    let img2Path=img2Element.src;

    img1Element.src=img2Path;
    img2Element.src=img1Path
}*/

let btn=document.querySelector("button")
let paraElement=document.querySelector("p")

// function changesstyling(){
//     alert("hello")
// }

// btn.addEventListener("click",changesstyling)

/*btn.addEventListener("click",()=>{
    alert("subodh")
})*/

/*btn.addEventListener("click",()=>{
    paraElement.style.color='red';
    paraElement.style.fontSize = "30px";
})*/


let isStyled = false;

btn.addEventListener("click", () => {
    if (isStyled) {
        // reset
        paraElement.style.color = "";
        paraElement.style.fontSize = "";
    } else {
        // apply
        paraElement.style.color = "red";
        paraElement.style.fontSize = "30px";
    }

    isStyled = !isStyled;
});



/*let changeColor=()=>{
    alert()
}
btn.addEventListener("click",changeColor)*/