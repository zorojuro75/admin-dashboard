import React from "react";
import StatCard from "./StatCard";
import { Grid } from "@mui/material";

interface StatsProps {}

const Stats: React.FC<StatsProps> = () => {
  return (
    <Grid spacing={2} container sx={{ padding: "0px", margin: "0px",  }}>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Companies" value="108" color="Orange" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Employees" value="178" color="Yellow" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Employees" value="178" color="Yellow" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Employees" value="178" color="Yellow" />
      </Grid>
    </Grid>
  );
};

export default Stats;
