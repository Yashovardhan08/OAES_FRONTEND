import { useContext } from "react";
import "../../App.css";
import { user } from "./UserData";
import { UserContext } from "../../App";

const UserItem = () => {
  const context = useContext(UserContext);

  return (
    <div className="TitleDiv">
      <text className="Title">{context[0]}</text>
    </div>
  );
};

export default UserItem;
