import "../styles/App.css";
// import { Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import PostsProvider from "./context/postsContext";
function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      window.me;
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);
  return (
    <div className="flex flex-col">
      <Header theme={theme} setTheme={setTheme} />
      <PostsProvider>
        <Outlet />
      </PostsProvider>

      <Footer />
    </div>
  );
}

export default App;
