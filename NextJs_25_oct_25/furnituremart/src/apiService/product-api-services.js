import axios from "axios"


//All PRoducts
let getProducts=()=>{
   return axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalres)=>finalres.products)
   
}


//single product
let getsingleProducts=(id)=>{
   return axios.get(`https://dummyjson.com/products/${id}`)
    .then((res)=>res.data)
    // .then((finalres)=>finalres)
   
}

export {getProducts,getsingleProducts}

//module.export={} //Backend