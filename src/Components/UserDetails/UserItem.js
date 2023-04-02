import "../../App.css";
import { user } from "./UserData";

const UserItem = () => {
  return (
    <div className="TitleDiv">
      <text className="Title">{user.name}</text>
      <br />
      <text className="Title">{user.username}</text>
    </div>
  );
};

export default UserItem;
