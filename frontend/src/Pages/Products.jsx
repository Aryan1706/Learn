import React from 'react'
import Box from "@mui/material/Box";
import Sidenav from '../Components/Sidenav';
import Navbar from '../Components/Navbar';
import ProductList from './products/ProductList';
import "../Dash.css"

const Products = () => {
  return (
    <div className='bgcolor'>
    <Navbar />
    <Box height={70} />
    <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProductList/>
        </Box>
    </Box>
    </div>
    
  )
}

export default Products
