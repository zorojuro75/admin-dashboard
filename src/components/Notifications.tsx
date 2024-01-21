import { Container } from "@mui/material";
import React from "react";
import Notification from "./Notification";
import Barchart from "./Barchart";

interface Props {};

const Notifications:React.FC<Props> = () => {
  let notifications: Notice[] = [
    {
      id: 1,
      type: "Announcements",
      event: [
        {
          id: 1,
          name: "James Mullican",
          date: "12/12/2021",
        },
        {
          id: 2,
          name: "James Mullican",
          date: "12/12/2021",
        },
        {
          id: 3,
          name: "James Mullican",
          date: "12/12/2021",
        },
      ],
    },
    {
      id: 2,
      type: "Birthdays",
      event: [
        {
          id: 1,
          name: "James Mullican",
          date: "12/12/2021",
        },
        {
          id: 2,
          name: "James Mullican",
          date: "12/12/2021",
        },
        {
          id: 3,
          name: "James Mullican",
          date: "12/12/2021",
        },
      ],
    },
  ];
  return (
    <Container
      sx={{
        margin: "0px",
        padding: "0px",
        bgcolor: "white",
        boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      {notifications.map((notification, index) => (
        <Notification notification={notification} key={index} />
      ))}
      <Barchart />
    </Container>
  );
};

export default Notifications;
