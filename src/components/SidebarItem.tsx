import { ListItem, ListItemText, Typography } from "@mui/material";
import homeIcon from '../assets/home.png';

type Props = {
  sidebarItem: SidebarItem;
};

const SidebarItem = (props: Props) => {
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
        {props.sidebarItem.name}
      </Typography>
      {props.sidebarItem.items.map((item, index) => {
        return (
          <ListItem key={index} style={{ padding: "0px", display: "flex", gap: "16px" }}>
            <img src={homeIcon} style={{ height: "24px", width: "24px" }} />
            <ListItemText primary={item.name} style={{ color: "#878787" }} />
          </ListItem>
        );
      })}
    </>
  );
};

export default SidebarItem;
