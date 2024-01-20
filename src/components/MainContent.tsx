import { Container } from "@mui/material";
import React from "react";
import Stats from "./Stats";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <div style={{ margin: "0", padding: "96px" }}>
      <Stats />
    </div>
  );
};

export default MainContent;
