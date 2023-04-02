import "../../App.css";
import NavigationItems from "./NavigationItems";
import UserItem from "../UserDetails/UserItem";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      {/* <UserDetails/> */}
      <UserItem />
      <NavigationItems />
    </div>
  );
};

export default Sidebar;
