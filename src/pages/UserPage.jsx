import React from "react";
import { Axios } from "../axios";
import "../styles/userPage.scss";
import { useParams } from "react-router-dom";
import UserPostCards from "../components/userPostCards";
const UserPage = () => {
  const params = useParams();
  const [userData, setUserData] = React.useState();

  React.useEffect(() => {
    Axios.get(`/user/${params.id}`).then((data) => {
      setUserData(data.data.data);
      console.log(data.data.data.posts);
    });
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
            <span className="Name">User:</span>
            <span className="value">{userData?.name}</span>

            <br />
            <span className="Name">Email:</span>
            <span className="value">{userData?.email}</span>
          </div>
          <div className="down">
            <div className="icon">
              <span>posts</span>

              <i className="bx bx-chevrons-down"></i>
            </div>
          </div>
        </div>

        <div className="posts">
          {userData?.posts.map((e, i) => (
            <UserPostCards
              key={i}
              heading={e.heading}
              createdAt={e.createdAt}
              title={e.title}
              user={e.userName}
              image={e.image}
              userId={e.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
