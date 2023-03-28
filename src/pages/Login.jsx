import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginAndSignup.scss";
import { useSelector, useDispatch } from "react-redux";
import { Axios } from "../axios";
import { LogIn } from "../redux";

const Login = () => {
  const [data, setData] = React.useState({ email: null, password: null });
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("/login", data)
      .then((data) => {
        dispatch(LogIn(data.data.data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <div className="Upper">
        <div className="welcome">
          <span>User login</span>
        </div>

        <div className="login">
          <input
            type="text"
            placeholder="mail"
            onChange={(event) =>
              setData((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) =>
              setData((prev) => ({ ...prev, password: event.target.value }))
            }
          />
        </div>
      </div>
      <div className="lower">
        <div className="button">
          <button className="Submit log_in">Login</button>
        </div>
        <div className="createAcc">
          <span>
            <Link state="sig" to="/Aut/Signup">
              Create Account
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};
export default Login;
