import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const navigate = useNavigate();
  const { id, title } = props;

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post-container">
      <h4 className="title-heading" onClick={handleClick}>
        {title}
      </h4>
    </div>
  );
};

export default Post;
