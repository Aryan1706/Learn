import React from 'react'
import Box from "@mui/material/Box";
import Sidenav from '../Components/Sidenav';
import Navbar from '../Components/Navbar';

const Settings = () => {
  return (
    <>
    <Navbar />
    <Box height={50} />
    <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Settings</h1>
        </Box>
    </Box>
    </>
  )
}

export default Settings
