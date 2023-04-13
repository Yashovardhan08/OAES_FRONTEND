import { useContext } from "react";
import "../../App.css";
import { UserContext } from "../../App";

const UserItem = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="TitleDiv">
      <text className="Title">{userContext[0]}</text>
    </div>
  );
};

export default UserItem;
