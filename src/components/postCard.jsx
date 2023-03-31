import "../styles/postCard.scss";
import React from "react";
import { axiosPrivate, Axios } from "../axios";
import { Link } from "react-router-dom";
const PostCard = (props) => {
  return (
    <div className="PostCard">
      <div className="upper">
        <span className="Header">{props.heading}</span>
        {props.image && (
          <img
            src={`http://127.0.0.1:8000/public/img/posts/${props.image}`}
            alt=""
          />
        )}
        <p className="title">{props.title}</p>
      </div>
      <div className="lover">
        <span className="Date">Date : {props.createdAt.split("T")[0]}</span>
        <Link to={`/user/${props.userId}`} className="User">
          User : {props.user}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
