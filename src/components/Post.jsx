import { Link } from "react-router-dom";

const Post = (props) => {
  const { id, title } = props;

  return (
    <div className="post-container">
      <Link to={`/post/${id}`} state={props}>
        {title}
      </Link>
    </div>
  );
};

export default Post;
