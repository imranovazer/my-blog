import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Route, Routes, useLocation ,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Authorization = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuth);
  const value = useLocation();
  React.useEffect(() =>
  {
    if (isAuth)
    {
      navigate('/');
    }
  }, [])

    return (
        <div className="AuthorizationContainer">
      <div className="wrapper forAuthorization">
      <div className="AuthorzizationBox">
          
              
      <div className={value.pathname === "/Aut/Login" ? "Log" : "Log zero"}>
        {value.pathname === "/Aut/Login" && (
          <Routes>
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<SignUp />} />
          </Routes>
        )}
      </div>
      <div className="rabitImage">
         {/* <img src={Rabbit} alt="" srcset="" />  */}
      </div>
      <div className={value.pathname === "/Aut/Signup" ? "Sig" : "Sig zero"}>
        {value.pathname === "/Aut/Signup" && (
          <Routes>
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<SignUp />} />
          </Routes>
        )}
              </div>
        </div>
            </div>
    </div>
  );
};
export default Authorization;