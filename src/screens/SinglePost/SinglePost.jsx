import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [commentData, setCommentData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPostData(res.data));
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => setCommentData(res.data));
  }, [id]);
  return (
    <>
      {postData && commentData ? (
        <div className="single-post-container">
          <div className="single-post-heading">
            <h3>Post Title: {postData.title}</h3>
            <p>{postData.body}</p>
          </div>
          <h4>Comments</h4>
          {commentData.map((comment, i) => {
            return (
              <div key={i}>
                <h5>Commentor: {comment.name}</h5>
                <h5>Email: {comment.email} </h5>
                <p>Comment: {comment.body}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>Loading post...</h3>
      )}
    </>
  );
};

export default SinglePost;
