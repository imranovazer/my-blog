import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginAndSignup.scss";
import { Axios } from '../axios'
const Login = () => {
  const [data, setData] = React.useState({ name: null, email: null, password: null, repeatPass: null });
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    const submitData = { ...data };
    delete submitData.repeatPass;
    e.preventDefault();

    Axios.post('/register', submitData).then(
      data => {
        window.alert('You registered succesfully! Log in please');
        navigate('/Aut/Login')
      }
    ).catch(err => {
      console.log(err)
    })







  }
  return (
    <form className="Login" onSubmit={handleSubmit}>
      <div className="Upper">
        <div className="welcome">

          <span>Create user</span>
        </div>

        <div className="login">
          <input type="text" placeholder="username" onChange={(event) => setData((prev) => ({ ...prev, name: event.target.value }))} />
          <input type="email" placeholder="mail" onChange={(event) => setData((prev) => ({ ...prev, email: event.target.value }))} />
          <input type="password" placeholder="password" onChange={(event) => setData((prev) => ({ ...prev, password: event.target.value }))} />
          <input type="password" placeholder="repeat password" onChange={(event) => setData((prev) => ({ ...prev, repeatPass: event.target.value }))} />
        </div>

      </div>
      <div className="lower">
        <div className="button">
          <button className="Submit log_in">Sign Up</button>
        </div>
        <div className="createAcc">
          <span>
            <Link state="sig" to="/Aut/Login">
              Log in
            </Link>
          </span>
        </div>

      </div>

    </form>
  );
};
export default Login;