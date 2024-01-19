import React from "react";
import { AppBar, Avatar, Toolbar, Typography, Hidden } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <AppBar
      style={{
        height: 60,
        backgroundColor: "white",
        boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid #D5D5D5",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "16px",
          marginRight: "16px",
        }}
      >
        <Typography
          component={"div"}
          variant="h6"
          noWrap
          sx={{
            color: "#6956E5",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          LOGO
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <NotificationsIcon
            style={{ color: "#787486", height: "24px", width: "24px" }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Avatar style={{ height: "32px", width: "32px" }}></Avatar>
            <Hidden smDown>
              <Typography
                component={"div"}
                variant="h6"
                noWrap
                sx={{ color: "#334155", fontWeight: "500", fontSize: "16px" }}
              >
                S. Admin
              </Typography>
            </Hidden>
            <ArrowDropDownIcon
              style={{ color: "#787486", height: "24px", width: "24px" }}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
