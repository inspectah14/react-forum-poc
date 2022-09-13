import { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import styles from "./Home.module.scss";

const Home = () => {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    let data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.main}>
      {posts ? (
        posts.map((post, i) => {
          return <Post key={i} {...post} />;
        })
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default Home;
