let status = 1;
let myPromise = new Promise((resolve, reject) => {
  //resolve-represent function
  if (status==1) {
    obj = {
      status: 1,
      msg: "Promise Done",
    };
    resolve(obj); //funtion
  } if(status==2) {
    obj = {
      status: 0,
      msg: "Promise Reject",
    };
    reject(obj);
  }
});

let getMyData = async () => {
  //await
  try {
    let data = await myPromise;
    console.log(data);
  } catch (err) {
    console.log(err)
  }
};
getMyData();

/*let doneTask=(taskName,time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let obj={
                status:1,
                taskName
            }
            resolve(obj)
        },time)
    })
}

  


doneTask("Html",1000)
.then((res)=>{
    console.log(res)
    return doneTask("CSS",5000)
    // .then((res)=>{
    //     console.log(res);
    //     doneTask("JS",2000)
    //     .then((finalRes)=>{
    //         console.log(finalRes);
    //     })
    // })
})


// doneTask("Html",1000)
.then((res)=>{
    console.log(res)
    return doneTask("CSS",1000)
})
.then((res)=>{
    console.log(res)
    return doneTask("subodh",2000)
})
.then((res)=>{
    console.log(res)
})*/

/*Promise.all([myPromise,doneTask("React",1000)])
.then((res)=>{
    console.log(res)
})*/

/*let loginStatus=true
let loginCheck=()=>{
    return new Promise((resolve,reject)=>{
        if(loginStatus){
            resolve({status:1,msg:"login Done"})
        }
        else{
            reject({status:0,msg:"Invalid"})
        }
    })
}


loginCheck()
.then((res)=>{
    console.log(res);
})*/
