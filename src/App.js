import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import SinglePost from "./screens/SinglePost";
import "./App.css";

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
