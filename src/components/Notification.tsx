import React from "react";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
interface Props {
  notification: Notice;
}

const Notification: React.FC<Props> = ({ notification }) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div style={{ padding: "20px 40px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #E8E8E8",
        }}
      >
        <Typography
          sx={{
            color: "#23262F",
            fontWeight: "normal",
            fontSize: "18px",
          }}
        >
          {notification.type}
        </Typography>
        <Button
          onClick={() => setShowMore(!showMore)}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#6956E5",
          }}
        >
          {showMore ? "View Less" : "View All"}
        </Button>
      </div>
      <List>
        {notification.event
          .slice(0, showMore ? notification.event.length : 2)
          .map((event) => (
            <ListItem
              key={event.id}
              sx={{
                bgcolor: "rgba(249, 249, 249, 1)",
                margin: "4px 0px",
                borderRadius: "10px",
                display: "flex",
                gap: "16px",
              }}
            >
              <Avatar src="/avatar/Avatar3.png" variant="square"></Avatar>
              <ListItemText primary={event.name} secondary={event.date} />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default Notification;
