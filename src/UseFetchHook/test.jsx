

import React from 'react'
import useFetch from '.'
const UseFetchTest = () => {
    const {data, error} = useFetch("https://dummyjson.com/products?limit=20")
  return (
    <div>
      <h1>Data from useFetch hook</h1>
      {
        data && data.products.length > 0? 
        data.products.map((productItem)=>{
            return <div>{productItem.title}</div>
        })
        : <div>{error}</div>
      }
    </div>
  )
}

export default UseFetchTest
