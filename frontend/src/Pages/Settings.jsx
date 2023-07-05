import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import SettingsTab from "../Components/Settings/Tabs";
import "../Dash.css";
import { CardContent } from "@mui/material";
import {Card} from "@mui/material";

const Settings = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <SettingsTab />
              </Box>
        </Box>
      </div>
    </>
  );
};

export default Settings;
