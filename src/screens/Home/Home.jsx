import { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import styles from "./Home.module.scss";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className={styles.main}>
      {data ? (
        data.map((post, i) => {
          return <Post key={i} {...post} />;
        })
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default Home;
