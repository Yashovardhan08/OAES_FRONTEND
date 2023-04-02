import "../../App.css";
import NavigationItems from "./NavigationItems";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      {/* <UserDetails/> */}
      <NavigationItems/>
    </div>
  )
}

export default Sidebar