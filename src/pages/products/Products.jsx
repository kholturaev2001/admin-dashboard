import React from 'react'

import './products.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import ProductTable from '../../components/table/Table'

const Products = () => {
  return (
    <div className='products'>
    <Sidebar />
    <div className="productsContainer">
      <Navbar />
      <ProductTable />

    </div>
  </div>
  )
}

export default Products