import React from "react";
import ProductSidebar from "./ProductSidebar";
import Productlist from "./Productlist";
import { getProducts } from "@/apiService/product-api-services";
export const metadata = {
  title: '',
  description: '',
}

export default async function ProductNew() {

  let product = await getProducts()//promise return karege,ye data server side se aaya
  metadata.title = "Product Page"
  metadata.description = "Product Description"
  // console.log(product)

  return (
    <section className="py-10">
      <h1 className="text-center font-bold text-4xl">Product</h1>
      {product && (
        <div className="mt-10 max-w-[1320px] mx-auto grid grid-cols-[20%_auto]  gap-8">
          <ProductSidebar />
          <Productlist productData={product} />
        </div>
      )
      }
    </section>
  );
}
