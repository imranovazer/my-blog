import "../styles/SideNav.scss";
import { Link } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="SideNav">
      <div className="ProfilePhoto"></div>
      <Link to=""> My posts </Link>
      <Link to=""> My friends </Link>
      <button className="Create">Create post </button>
    </div>
  );
};
export default SideNav;
