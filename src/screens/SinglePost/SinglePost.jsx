import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SinglePost.module.scss";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  const { id, title, body } = location.state;
  const [commentData, setCommentData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setCommentData(res.data));
  }, [id]);

  return (
    <>
      {location.state && commentData ? (
        <div className={styles.singlePostContainer}>
          <div className={styles.singlePostHeading}>
            <h3>Forum Post</h3>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
          <div className={styles.commentsContainer}>
            <h3>Comments</h3>
            {commentData.map((comment, i) => {
              return (
                <div key={i} className={styles.singleCommentContainer}>
                  <p> {comment.body}</p>
                  <h5>User: {comment.name}</h5>
                  <h5>Email: {comment.email} </h5>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h3>Loading post...</h3>
      )}
    </>
  );
};

export default SinglePost;
