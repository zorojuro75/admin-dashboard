import React from "react";
import StatCard from "./StatCard";
import { Grid } from "@mui/material";

interface StatsProps {}

const Stats: React.FC<StatsProps> = () => {
  return (
    <Grid
      rowSpacing={5}
      columnSpacing={{ xs: 0, sm: 5 }}
      container
      sx={{ padding: "0px", margin: "0px" }}
    >
      <StatCard title="Total Companies" value="108" color="Orange" />
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Total Employees" value="178" color="Yellow" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Pending Co. Request" value="3" color="blue" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard title="Today Present" value="78" color="sky" />
      </Grid>
    </Grid>
  );
};

export default Stats;
