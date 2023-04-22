import { useContext } from "react";
import "../../App.css";
import { UserContext } from "../../App";
import { Typography } from "@mui/material";

const UserItem = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="TitleDiv">
      <Typography className="Title">{userContext[0]}</Typography>
    </div>
  );
};

export default UserItem;
