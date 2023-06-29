import React from 'react'
import Box from "@mui/material/Box";
import Sidenav from '../Components/Sidenav';
import Navbar from '../Components/Navbar';

const Users = () => {
  return (
    <>
    <Navbar />
    <Box height={50} />
    <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Users</h1>
        </Box>
    </Box>
    </>
    
  )
}

export default Users
