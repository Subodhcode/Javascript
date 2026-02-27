"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Product() {

    // let [productData, setProductData] = useState([])
    // let getProducts = () => {
    //     axios.get('https://dummyjson.com/products')
    //      .then(res => setProductData(res.data.products))
            
    //         // .then((res) => res.data)
    //         // .then((finalres) => {
    //         //     setProductData(finalres.products)
    //         // })
    // }

    // useEffect(() => {
    //     getProducts()
    // }, [])
    
const [productData, setProductData] = useState([]);

const getProducts = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    setProductData(res.data.products);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getProducts();
}, []);


    return (
        <div>
            <section className='py-5'>
                <h1 className='text-center font-bold'>Our Product</h1>
            </section>
            <div className='max-w-[1320px] gap-5 mx-auto grid grid-cols-4'>
                {productData.map((obj, i) => <ProductItem key={i} data={obj} />)}

            </div>
        </div>
    )
}



function ProductItem({ data }) {
    let { title, thumbnail, description, price,id } = data
    return (

        <div className="w-[100%]   border border-default rounded-base shadow-xs text-center ">
            <Link href={`/Product/${id}`}>
                <img
                    className="rounded-base mx-auto  h-[150px]"
                    src={thumbnail}
                    alt="product image"
                />
            </Link>
            <div>
                <div className="flex items-center space-x-3  ">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg
                            className="w-5 h-5 text-fg-yellow"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                            className="w-5 h-5 text-fg-yellow"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                            className="w-5 h-5 text-fg-yellow"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                            className="w-5 h-5 text-fg-yellow"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                            className="w-5 h-5 text-fg-yellow"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                    </div>
                    <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                        4.8 out of 5
                    </span>
                </div>
                <a href="#">
                    <h5 className="text-xl text-heading font-semibold tracking-tight text-center">
                        {title}

                        
                    </h5>
                </a>
                <div className="flex items-center justify-between ">
                    <span className="text-3xl font-extrabold text-heading text-center">${price}</span>
                    <button
                        type="button"
                        className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
                    >
                        <svg
                            className="w-4 h-4 me-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                            />
                        </svg>
                        {description}
                    </button>
                </div>
            </div>
        </div>


    )

}