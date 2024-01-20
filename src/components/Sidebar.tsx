"use client";
import React from "react";
import { Box, Hidden, List } from "@mui/material";
import SidebarItem from "./SidebarItem";
import MainContent from "./MainContent";
interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = () => {
  let sidebarItems: SidebarItem[] = [
    {
      name: "Setup",
      items: [
        {
          name: "Landing Page Setup",
          icon: "add",
        },
        {
          name: "Add new company",
          icon: "add",
        },
        {
          name: "Company lists",
          icon: "list",
        },
        {
          name: "Leave Setup",
          icon: "exit_to_app",
        },
      ],
    },
    {
      name: "Companies",
      items: [
        {
          name: "Add Designation",
          icon: "add",
        },
        {
          name: "Employees",
          icon: "add",
        },
        {
          name: "Attendance",
          icon: "list",
        },
        {
          name: "Leave Requests",
          icon: "exit_to_app",
        },
        {
          name: "Approve Profile",
          icon: "exit_to_app",
        },
        {
          name: "Reports",
          icon: "exit_to_app",
        },
        {
          name: "Announcements",
          icon: "exit_to_app",
        },
        {
          name: "Annual Check Status",
          icon: "exit_to_app",
        },
      ],
    },
    {
      name: "Employees",
      items: [
        {
          name: "Profile Completion",
          icon: "add",
        },
        {
          name: "My Documents",
          icon: "add",
        },
        {
          name: "Announcements",
          icon: "list",
        },
        {
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
