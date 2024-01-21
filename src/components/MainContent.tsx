import React from "react";
import Stats from "./Stats";
import Requests from "./Requests";
import Assign from "./Assign";
import { Grid } from "@mui/material";
import Notifications from "./Notifications";
import Barchart from "./Barchart";

interface Props {}

const MainContent: React.FC<Props> = () => {
  return (
    <div style={{ margin: "0 30px", padding: "96px 0px" }}>
      <Stats />
      <Grid container rowSpacing={2} columnSpacing={5} sx={{ marginTop: "40px" }}>
        <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Requests />
          <Assign />
        </Grid>
        <Grid item xs={12} md={4}>
          <Notifications />
          <Barchart />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;
