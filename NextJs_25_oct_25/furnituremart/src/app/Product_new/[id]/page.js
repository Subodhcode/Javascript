import React from 'react'
// import ProductsingleData from './productsingleData'
import ProductsingleData from './ProductsingleData'
import { getsingleProducts } from '@/apiService/product-api-services'


export default async function ProductDetails( {params}) {
    
    // let {params}=await request
    let {id}= params//url id

   let data = getsingleProducts(id)
   console.log(data)
   
  return (
    <div  className="max-w-[1200px] mx-auto py-10">
     hello
      <ProductsingleData data={data}/>
    </div>
  )
}
