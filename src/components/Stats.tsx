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
        <StatCard title="Total Employees" value="178" color="Yellow" />
        <StatCard title="Pending Co. Request" value="3" color="blue" />
        <StatCard title="Today Present" value="78" color="sky" />
    </Grid>
  );
};

export default Stats;
