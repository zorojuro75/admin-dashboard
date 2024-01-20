import { Card, Typography } from "@mui/material";
import Orange from "../assets/orange.svg";
import Yellow from "../assets/yellow.svg";
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  color: string;
}
const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => {
  return (
    <Card
      sx={{
        padding: "21px 16px",
        boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
        width: "260px",
        display: "flex",
        gap: "20px",
      }}
    >
      <img
        src={color=="Orange"? Orange:color=="Yellow"?Yellow:""}
        style={{
          padding: "18px",
          borderRadius: "100%",
          background: "rgba(246, 134, 106, 0.1)",
          height: "24px",
          width: "24px",
        }}
      />
      <div>
        <Typography
          component={"div"}
          variant="h6"
          noWrap
          sx={{
            color: "black",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          {value}
        </Typography>
        <Typography
          component={"div"}
          variant="h6"
          noWrap
          sx={{
            color: "#030229",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default StatCard;
