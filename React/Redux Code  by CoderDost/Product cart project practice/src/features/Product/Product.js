import React, { useEffect } from 'react'
import { fetchProducts } from './ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../Components/ProductCard'

function Product() {
    const products=useSelector((state)=>state.allProducts.products)
    const loading=useSelector((state)=>state.allProducts.loading)
    const error=useSelector((state)=>state.allProducts.error)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
        fetchProducts()
    },[])
  return (
    <div className='w-[90%] mx-auto flex flex-wrap gap-y-6 min-h-screen gap-6 justify-center mt-10 mb-10 '>
        {loading?(<div className='text-[1.5rem] font-bold w-[100%] flex justify-center items-center'>Loading...</div>):
           (error?
           ( <div className='text-[1.5rem] font-bold w-[100%] flex justify-center items-center'>{error}</div>) :
           (products.length===0?(<div className='text-[1.5rem] font-bold w-[100%] flex justify-center items-center'>No Products Found</div>): (products[0].map((product)=><ProductCard key={product.id} product={product}></ProductCard>)))
           )
        }
    </div>
  )
}

export default Product