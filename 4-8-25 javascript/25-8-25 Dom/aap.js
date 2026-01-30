//console.log(document)//predefiend object

                    //HTML element target by Id
let headingElement=document.getElementById('heading')
let PElement=document.getElementById('para')
let ImgElemnt=document.getElementById('img')
console.log(ImgElemnt)
console.log(ImgElemnt.src)
ImgElemnt.width="500"
console.log(headingElement)
console.log(headingElement.innerHTML)//headinelement ek obejct tarah behave karta hai
console.log(headingElement.innerText)
console.log(PElement)
// let body=document.getElementById('body')
// console.log(body.innerHTML)
// console.log(body.innerText)


let headingData=headingElement.innerHTML//welcome <u> to </u> ws
let paraData=PElement.innerHTML//hello World

headingElement.innerHTML=PElement.innerHTML//Hello <u>world </u> ws
PElement.innerHTML=headingElement.innerHTML//Hello <u>world </u> ws