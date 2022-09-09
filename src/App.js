import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home/Home";
import SinglePost from "./screens/SinglePost/SinglePost";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1> React Forum - POC </h1>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
