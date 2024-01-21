import { Grid, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";

export default function Barchart() {
  return (
    <div style={{ width: "100%" }}>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: ["Employee Attendance"],
            scaleType: "band",
          },
        ]}
        series={[{ data: [4] }, { data: [1] }, { data: [2] }, { data: [3] }]}
        colors={["#FABE7A", "#F6866A", "#59E6F6", "#7661E2"]}
        height={300}
      />
      <Grid container
      sx={{ padding: "0px 0px 20px 40px"}}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "100%",
              backgroundColor: "#FABE7A",
            }}
          ></div>
          <Typography>Total</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "100%",
              backgroundColor: "#F6866A",
            }}
          ></div>
          <Typography>Present</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "100%",
              backgroundColor: "#59E6F6",
            }}
          ></div>
          <Typography>Absent</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "100%",
              backgroundColor: "#7661E2",
            }}
          ></div>
          <Typography>Leave</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
