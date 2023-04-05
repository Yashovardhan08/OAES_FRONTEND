import React from "react";
import { SideBarData } from "./SidebarData";
import "../../App.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const NavigationItems = (props) => {
  const navigate = useNavigate();

  return (
    <>
      {SideBarData.map((val, key) => {
        return (
          <Button
            key={key}
            startIcon={val.icon}
            style={{
              color: "#F8F4E3",
              width: "inherit",
              paddingTop: "15px",
              paddingBottom: "15px",
            }}
            onClick={(e) => {
              navigate(val.link);
            }}
          >
            {val.title}
          </Button>
        );
      })}
    </>
  );
};

export default NavigationItems;
