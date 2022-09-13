import { Link } from "react-router-dom";
import styles from "./Post.module.scss";

const Post = (props) => {
  const { id, title } = props;

  return (
    <Link to={`/post/${id}`} state={props} className={styles.postLink}>
      <h3>Forum Post</h3>
      {title}
    </Link>
  );
};

export default Post;
