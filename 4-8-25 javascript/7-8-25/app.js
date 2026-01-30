// console.log(10<20<5)//true=1<5=true

// if(2<10){
//     console.log("hello")//ture ke case me work karta hai

// }




// let num=Number(prompt("enter the numbe:-"))
// if(num>=0){
//     console.log(num,"positive")
//  }else{
//      console.log(num,"negative")
//  }




// let s=800
// let min=parseInt(s/60)
// let remsecond=s%60
// console.log(remsecond)
// console.log(min)



// let num=Number(prompt("Enter the value:-"))
// if (num%2==0){
//     document.write(num,"even number")
// }
// else{
//     document.write(num,"odd Number")
// }



let num=Number (prompt("Enter the number"))

if(isNaN(num)){
    console.log(num,"Please Enter valid Number");
}
else if(num>100 || num<0){
    console.log(num,"Invalid Per..")
}
else if(num>=60){
    console.log(num,"First Div");
}

else if(num>=48){
    console.log(num,"second Div")
}

else if(num>=35){
    console.log(num,"third Div")
}

else{
    console.log(num,"Fail DIv")
}