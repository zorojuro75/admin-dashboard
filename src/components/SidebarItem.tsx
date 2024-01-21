import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

interface Props {
  sidebarItem: SidebarItem;
};

const SidebarItem: React.FC<Props> = ({sidebarItem}) => {
  return (
    <>
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
        {sidebarItem.name}
      </Typography>
      {sidebarItem.items.map((item, index) => {
        return (
          <ListItem key={index} style={{ padding: "0px", display: "flex", gap: "16px" }}>
            <img src={item.icon} style={{ height: "24px", width: "24px" }} />
            <ListItemText primary={item.name} style={{ color: "#878787" }} />
          </ListItem>
        );
      })}
    </>
  );
};

export default SidebarItem;
