import "../styles/SideNav.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { togglePostBox } from "../redux/postBoxReducer";
const SideNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="SideNav">
      <div className="ProfilePhoto"></div>
      <Link to={`/user/${localStorage.getItem("userId")}`}> My profile </Link>
      <Link to=""> My friends </Link>
      <button className="Create" onClick={() => dispatch(togglePostBox())}>
        Create post{" "}
      </button>
    </div>
  );
};
export default SideNav;
