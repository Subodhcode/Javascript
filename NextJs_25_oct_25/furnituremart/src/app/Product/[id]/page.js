"use client"
import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ProductDetails() {

  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
  }, [id])

  return (
    <div className="w-[250px]  mx-auto border-2 ">

      <img src={product.thumbnail} className="w-[150px]" />
        <h1 className="text-2xl font-bold">{product.title}</h1>

      <p>{product.description}</p>

      <h2 className="text-2xl font-bold">${product.price}</h2>

    </div>
  )
}
