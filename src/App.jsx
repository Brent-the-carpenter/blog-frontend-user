import "../styles/App.css";
// import { Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import GETPosts from "./api/fetch/GETPosts";
import { Outlet } from "react-router-dom";
import PostsProvider from "./context/postsContext";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(GETPosts());
  }, []);
  console.log(posts);
  return (
    <>
      <Header />
      <PostsProvider>
        <Outlet />
      </PostsProvider>

      <Footer />
    </>
  );
}

export default App;
