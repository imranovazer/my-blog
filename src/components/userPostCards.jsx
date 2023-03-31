import "../styles/userPostCards.scss";
import React from "react";

import { Link } from "react-router-dom";
const userPostCards = (props) => {
  return (
    <div className="PostCardForUser">
      <div className="Left">
        <div className="upper">
          <span className="Header">{props.heading}</span>
          {props.image && (
            <img
              src={`http://127.0.0.1:8000/public/img/posts/${props.image}`}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="Right">
        <p className="title">{props.title}</p>

        <div className="lover">
          <span className="Date">Date : {props.createdAt.split("T")[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default userPostCards;
