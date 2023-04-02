import React from 'react'
import { SideBarData } from "./SidebarData";
import "../../App.css";
import { Button } from "@mui/material";


const NavigationItems = () => {
  return (<>
    {SideBarData.map((val,key)=>{
        return <Button key={key} className="NavigationLinks" startIcon={val.icon} style={{color:"#F8F4E3"}}>
            {val.title}
          </Button>;
      })}
  </>
  );
}

export default NavigationItems;