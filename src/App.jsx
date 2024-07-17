import "../styles/App.css";
// import { Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import PostsProvider from "./context/PostsContext/postsContext";
import UserProvider from "./context/UserContext/userContext";
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
    <div className="flex h-full flex-col">
      <UserProvider>
        <Header theme={theme} setTheme={setTheme} />
        <PostsProvider>
          <Outlet />
        </PostsProvider>

        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
