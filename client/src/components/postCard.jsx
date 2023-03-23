import "../styles/postCard.scss";

const PostCard = (props) => {
  return (
    <div className="PostCard">
      <div className="upper">
        <span className="Header">{props.heading}</span>
        {props.image && (
          <img
            src={`http://127.0.0.1:8000/public/img/posts/${props.image}`}
            alt=""
            srcset=""
          />
        )}
        <p className="title">{props.title}</p>
      </div>
      <div className="lover">
        <span className="Date">Date : {props.createdAt.split("T")[0]}</span>
        <span className="User">User : {props.user}</span>
      </div>
    </div>
  );
};

export default PostCard;
