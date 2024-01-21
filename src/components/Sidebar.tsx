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
          icon: "/sidebarIcons/home.png",
        },
        {
          id: 2,
          name: "Add new company",
          icon: "/sidebarIcons/home.png",
        },
        {
          id: 3,
          name: "Company lists",
          icon: "/sidebarIcons/home-trend-up.png",
        },
        {
          id: 4,
          name: "Leave Setup",
          icon: "/sidebarIcons/safe-home.png",
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
          icon: "/sidebarIcons/calendar.png",
        },
        {
          id: 2,
          name: "Employees",
          icon: "/sidebarIcons/profile-2user.png",
        },
        {
          id: 3,
          name: "Attendance",
          icon: "/sidebarIcons/task-square.png",
        },
        {
          id: 4,
          name: "Leave Requests",
          icon: "/sidebarIcons/note-text.png",
        },
        {
          id: 5,
          name: "Approve Profile",
          icon: "/sidebarIcons/profile-tick.png",
        },
        {
          id: 6,
          name: "Reports",
          icon: "/sidebarIcons/chart-2.png",
        },
        {
          id: 7,
          name: "Announcements",
          icon: "/sidebarIcons/alarm.png",
        },
        {
          id: 8,
          name: "Annual Check Status",
          icon: "/sidebarIcons/clipboard-tick.png",
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
          icon: "/sidebarIcons/profile.png",
        },
        {
          id: 2,
          name: "My Documents",
          icon: "/sidebarIcons/document-upload.png",
        },
        {
          id: 3,
          name: "Announcements",
          icon: "/sidebarIcons/alarm.png",
        },
        {
          id: 4,
          name: "Annual Check",
          icon: "/sidebarIcons/check.png",
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
