import React from "react";
import { Axios } from "../axios";
import "../styles/userPage.scss";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const params = useParams();
  const [userData, setUserData] = React.useState();

  React.useEffect(() => {
    const user = async (id) => {
      const data = await Axios.get(`/user/${id}`);
      console.log(data.data.data);
      return data.data.data;
    };
    setUserData(user);
    console.log(userData);
  }, []);
  return (
    <div className="UserPage">
      <div className="wrapper forUserPage">
        <div className="userProfile">
          <div className="ProfilePicContainer">
            <div className="ProfilePic"></div>
            <div className="buttonsContainer">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
          <div className="UserInfo">
            <span className="Name">User name:</span>

            <br />
            <span className="Name">Email:</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
