import "../../App.css";
import NavigationItems from "./NavigationItems";
import UserItem from "../UserDetails/UserItem";
import LogOutButton from "./LogOutButton";

const Sidebar = (props) => {
  return (
    <div className="sidebar" style={{display:"inline-block"}}>
      <UserItem/>
      <NavigationItems />
      <LogOutButton/>
    </div>
  );
};

export default Sidebar;
