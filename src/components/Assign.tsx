import {
  Avatar,
  Button,
  Container,
  FormControl,
  Grid,
  Hidden,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
interface Props {}

const Assign: React.FC<Props> = () => {
  const options = [
    { value: "Abc Co. Ltd", label: "Abc Co. Ltd" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [selectedValue, setSelectedValue] = React.useState(options[0].value);
  let requests: CompanyRequest[] = [
    {
      id: 1,
      clientName: "James Mullican",
      companyName: "ABC Co. Ltd",
      status: "Waiting for approval",
    },
    {
      id: 2,
      clientName: "James Mullican",
      companyName: "ABC Co. Ltd",
      status: "Waiting for approval",
    },
    {
      id: 3,
      clientName: "James Mullican",
      companyName: "ABC Co. Ltd",
      status: "Waiting for approval",
    },
  ];
  return (
    <Container
      sx={{
        padding: "40px",
        bgcolor: "white",
        boxShadow: "5px 5px 10px rgba(0,0,0,0.01)",
        borderRadius: "10px",
      }}
    >
      <Typography
        component={"div"}
        variant="h1"
        sx={{
          padding: "10px",
          margin: "0px 0px 24px 0px",
          color: "#23262F",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Assign New Designation
      </Typography>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            color: "#030229",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          Company Name
        </InputLabel>
        <Select
          variant="outlined"
          value={selectedValue}
          onChange={(event) => setSelectedValue(event.target.value)}
          sx={{
            width: { xs: "90%", md: "300px" },
            padding: "2px 10px",
            margin: { xs: "20px 0px", md: "20px 15px" },
            color: "#23262F",
            fontSize: "16px",
            fontWeight: "bold",
            bgcolor: "rgba(247, 247, 248, 1)"
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  color: "#23262F",
                  fontSize: "12px",
                  fontWeight: "400",
                  margin: "0px",
                }}
              >
                {option.label}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid
        container
        rowSpacing={2}
        sx={{ alignItems: "center", padding: { xs: "0px", md: "0px 20px" } }}
      >
        <Hidden smDown>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>ID</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}></Grid>
        </Hidden>
        {requests.map((request, index) => (
          <React.Fragment key={index}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                gap: "20px",
                paddingTop: { sx: "20px", md: "0px" },
                borderTop: { xs: "1px solid #D5D5D5", md: "none" },
              }}
            >
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
                {request.id}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                gap: "20px",
                paddingTop: { sx: "20px", md: "0px" },
              }}
            >
              <Avatar src="/avatar/Avatar2.png"></Avatar>
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
                  {request.clientName}
                </Typography>
                <Typography
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
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "start", sm: "end" },
                paddingBottom: { xs: "20px", sm: "0px" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6956e5",
                  color: "white",
                  padding: "8px 32px",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              >
                Assign
              </Button>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default Assign;
