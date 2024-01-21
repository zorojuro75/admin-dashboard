import React from "react";
import Stats from "./Stats";
import Requests from "./Requests";

interface Props {}

const MainContent: React.FC<Props> = () => {
  return (
    <div style={{ margin: "0 50px", padding: "96px 0px" }}>
      <Stats />
      <div>
        <Requests />
      </div>
    </div>
  );
};

export default MainContent;
