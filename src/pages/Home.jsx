import "../styles/Home.scss";
import React from "react";
import { axiosPrivate } from "../axios";
import PostCard from "../components/postCard";

const Home = () => {
  const [posts, setPosts] = React.useState([]);

  const fetchData = async () => {
    const fetchedData = await axiosPrivate.get("/post");
    setPosts(fetchedData.data.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="HomePage">
      <div className="wrapper forHomePage">
        {posts.map((e, i) => (
          <PostCard
            key={i}
            heading={e.heading}
            createdAt={e.createdAt}
            title={e.title}
            user={e.userName}
            image={e.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
