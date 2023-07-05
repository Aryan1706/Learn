import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "../Dash.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccordionDash from "../Components/Accordian";
import BarChart from "../Charts/BarChart";

const Home = () => {
  return (
    <div className="bgcolor">
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Stack direction="row" spacing={2}>
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradient paddingall"
                >
                  <CardContent>
                    <div className="iconstyleblack">
                      <CreditCardIcon />
                    </div>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="white"
                    >
                      $500.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Total Earning
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="lightgradient paddingall"
                >
                  <CardContent>
                    <div className="iconstyleblack">
                      <ShoppingBagIcon />
                    </div>

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="white"
                    >
                      $900.00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ color: "#ccd1d1" }}
                    >
                      Total Orders
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }} className="lightgradient">
                  <Stack spacing={2} direction={"row"}>
                    <div className="iconstyle">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                      <span className="pricetitle">$230K</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }} color="white">
                  <Stack spacing={2} direction={"row"}>
                    <div className="iconstyle">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                      <span className="pricetitle">$230K</span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          <Box height={30} />
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <BarChart/>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card sx={{ height: 60 + "vh", maxWidth: 345 }}>
                <CardContent>
                  <span className="pricetitle">Popular Products</span>
                  <br />
                  <span className="pricesubtitle">Line-Wise</span>
                  <AccordionDash />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
