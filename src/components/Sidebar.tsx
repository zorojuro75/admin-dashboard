"use client";
import React from "react";
import { Box, Hidden, List } from "@mui/material";
import SidebarItem from "./SidebarItem";
import MainContent from "./MainContent";
interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = () => {
  let sidebarItems: SidebarItem[] = [
    {
      id: 1,
      name: "Setup",
      items: [
        {
          id: 1,
          name: "Landing Page Setup",
          icon: "add",
        },
        {
          id: 2,
          name: "Add new company",
          icon: "add",
        },
        {
          id: 3,
          name: "Company lists",
          icon: "list",
        },
        {
          id: 4,
          name: "Leave Setup",
          icon: "exit_to_app",
        },
      ],
    },
    {
      id: 2,
      name: "Companies",
      items: [
        {
          id: 1,
          name: "Add Designation",
          icon: "add",
        },
        {
          id: 2,
          name: "Employees",
          icon: "add",
        },
        {
          id: 3,
          name: "Attendance",
          icon: "list",
        },
        {
          id: 4,
          name: "Leave Requests",
          icon: "exit_to_app",
        },
        {
          id: 5,
          name: "Approve Profile",
          icon: "exit_to_app",
        },
        {
          id: 6,
          name: "Reports",
          icon: "exit_to_app",
        },
        {
          id: 7,
          name: "Announcements",
          icon: "exit_to_app",
        },
        {
          id: 8,
          name: "Annual Check Status",
          icon: "exit_to_app",
        },
      ],
    },
    {
      id: 3,
      name: "Employees",
      items: [
        {
          id: 1,
          name: "Profile Completion",
          icon: "add",
        },
        {
          id: 2,
          name: "My Documents",
          icon: "add",
        },
        {
          id: 3,
          name: "Announcements",
          icon: "list",
        },
        {
          id: 4,
          name: "Annual Check",
          icon: "exit_to_app",
        },
      ],
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <Hidden smDown>
        <List
          style={{
            backgroundColor: "white",
            width: "272px",
            padding: "76px 18px",
            display: "flex",
            flexDirection: "column",
            gap: "16px ",
            borderRight: "1px solid #D5D5D5",
          }}
        >
          {sidebarItems.map((item, index) => {
            return <SidebarItem key={index} sidebarItem={item} />;
          })}
        </List>
      </Hidden>
      <MainContent />
    </Box>
  );
};

export default Sidebar;
