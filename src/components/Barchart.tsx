import { Container, Grid, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Barchart() {
  return (
    <Container
      style={{
        width: "100%",
        backgroundColor: "white",
        boxShadow: "5px 5px 10px rgba(0,0,0,0.01)",
        margin: "10px 0",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            variant="h1"
            sx={{
              padding: "20px 40px",
              color: "#23262F",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            My Company
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              padding: "20px 0px",
              color: "#23262F",
              fontSize: "12px",
              fontWeight: "400",
            }}
          >
            Today
          </Typography>
          <ArrowDropDownIcon
            style={{ color: "#787486", height: "24px", width: "24px" }}
          />
        </div>
      </div>
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: [""],
            scaleType: "band",
          },
        ]}
        series={[{ data: [4] }, { data: [1] }, { data: [2] }, { data: [3] }]}
        colors={["#FABE7A", "#F6866A", "#59E6F6", "#7661E2"]}
        height={300}
      />
      <Grid container sx={{ padding: "0px 0px 20px 40px" }}>
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
    </Container>
  );
}
