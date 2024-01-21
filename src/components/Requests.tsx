import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Approve from "../assets/approve.png";
import Delete from "../assets/delete.png";
import Edit from "../assets/edit.png";
interface Props {}

const Requests: React.FC<Props> = () => {
  let requests = [
    {
      clinetName: "James Mullican",
      companyName: "ABC Co. Ltd",
    },
    {
      clinetName: "James Mullican",
      companyName: "ABC Co. Ltd",
    },
    {
      clinetName: "James Mullican",
      companyName: "ABC Co. Ltd",
    },
  ];
  return (
    <Container
      sx={{
        width: "1000px",
        padding: "10px",
        margin: "40px 0px",
        bgcolor: "white",
        boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <Typography
        component={"div"}
        variant="h1"
        noWrap
        sx={{
          padding: "10px",
          margin: "24px 0px",
          color: "#23262F",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Company Requests
      </Typography>
      <Grid container rowSpacing={2} sx={{ alignItems: "center" }}>
        {requests.map((request, index) => (
          <React.Fragment key={index}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", gap: "20px" }}
            >
              <Avatar></Avatar>
              <div>
                <Typography
                  component={"div"}
                  variant="h1"
                  noWrap
                  sx={{
                    color: "#23262F",
                    fontSize: "18px",
                    fontWeight: "bold",
                    margin: "0px",
                  }}
                >
                  {request.clinetName}
                </Typography>
                <Typography
                  component={"div"}
                  variant="h6"
                  noWrap
                  sx={{
                    color: "#23262F",
                    fontSize: "14px",
                    fontWeight: "normal",
                    margin: "0px",
                  }}
                >
                  {request.companyName}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              (Waiting for approval)
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "end", gap: "30px" }}
            >
              <img
                src={Approve}
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                  padding: "8px",
                  borderRadius: "100%",
                  backgroundColor: "rgba(58, 151, 76, .1)",
                }}
              />
              <img
                src={Delete}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
              <img
                src={Edit}
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Requests;
