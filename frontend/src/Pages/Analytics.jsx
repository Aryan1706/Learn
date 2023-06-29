import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { GeoChart } from "../Charts/GeoChart";
import HorizontalChart from "../Charts/HorizontalChart";
import { PieChart } from "../Charts/PieChart";

const Analytics = () => {
  return (
    <div className="bgcolor">
      <Navbar />
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={5} >
              <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                  <Card
                    sx={{ minWidth: 50 + "%", height: 125 }}
                    className="gradient"
                  >
                    <CardContent>
                      <h4>Visitors</h4>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="white"
                      >
                        22000
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 50 + "%", height: 125}}
                    className="lightgradient "
                  >
                    <CardContent>
                      <h4>Visitors</h4>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="white"
                      >
                        22000
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last Week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Card
                    sx={{ minWidth: 50 + "%", height: 125 }}
                    className="gradient "
                  >
                    <CardContent>
                      <h4>Visitors</h4>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="white"
                      >
                        22000
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 50 + "%", height: 125 }}
                    className="lightgradient "
                  >
                    <CardContent>
                      <h4>Visitors</h4>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="white"
                      >
                        22000
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last Week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={7}>
              <Card sx={{ height: 40 + "vh" }}>
                <CardContent>
                  < HorizontalChart/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box height={16} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 45 + "vh" }}>
                <CardContent>
                    < GeoChart/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{ height: 45 + "vh" }}>
                <CardContent className="margin">
                  <PieChart/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Analytics;
