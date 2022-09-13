import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./SinglePost.module.scss";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const getSinglePost = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await res.json();
    setPost(data);
  };

  const getComments = async () => {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    let data = await res.json();
    setCommentData(data);
  };

  useEffect(() => {
    !location.state ? getSinglePost() : setPost(location.state);
    getComments();
  }, [location.state]);

  return (
    <>
      {post && commentData ? (
        <div className={styles.singlePostContainer}>
          <h3>Forum Post</h3>
          <div className={styles.singlePostHeading}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
          <div className={styles.commentsContainer}>
            <h3>Comments</h3>
            {commentData.map((comment, i) => {
              return (
                <div key={i} className={styles.singleCommentContainer}>
                  <h4>{comment.name}</h4>
                  <p> {comment.body}</p>
                  <h5>User: {comment.email} </h5>
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
