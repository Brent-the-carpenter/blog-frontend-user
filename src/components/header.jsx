import { Link } from "react-router-dom";
import Login from "./login";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import useUserContext from "../context/contextHooks/userHook";
import useLogout from "../api/hooks/useLogout";
function Header({ setTheme, theme }) {
  const [showLogin, setShowLogin] = useState(false);
  const loginRef = useRef(null);
  const linkRef = useRef(null);
  const user = useUserContext();
  const { success, error, logoutUser, setSuccess } = useLogout();
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    if (success) {
      const timeOut = setTimeout(() => {
        setSuccess(null);
      }, 1000);
      return () => clearTimeout(timeOut);
    }
  }, [setSuccess, success]);

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
    if (!showLogin) {
      setTimeout(() => loginRef.current.focus(), 0); // Ensure the login div gets focus
    }
  };

  const handleBlur = (e) => {
    if (
      e.relatedTarget !== linkRef.current &&
      (!loginRef.current || !loginRef.current.contains(e.relatedTarget))
    ) {
      setShowLogin(false);
    }
  };

  return (
    <div className="flex flex-col">
      <header className="flex flex-wrap justify-center gap-2 border-b-stone-300 p-7 pt-2 align-middle dark:border-b-stone-300">
        <h1 className="align-center flex flex-grow justify-center pt-10 text-4xl font-bold underline underline-offset-1">
          The Carpenters Blog
        </h1>
        <div>
          <div>{user.userName}</div>
          <nav className="min-w-80 flex-1 content-end">
            <ul className="items center flex items-start justify-end gap-5 text-lg">
              {!user && (
                <Link to={"signup"} className="link">
                  Sign Up
                </Link>
              )}
              {user && user.token ? (
                <Link to={"#"} className="link" onClick={logoutUser}>
                  Logout
                </Link>
              ) : (
                <Link
                  to="#"
                  onClick={toggleLogin}
                  ref={linkRef}
                  className="linkUserAction"
                >
                  Login
                </Link>
              )}
              <Link className="link" to={"posts"}>
                Posts
              </Link>
              <button onClick={changeTheme}>
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </ul>
          </nav>
        </div>

        {showLogin && (
          <div
            ref={loginRef}
            tabIndex={-1}
            className="login absolute right-1 top-32 p-2"
            onBlur={handleBlur}
          >
            <Login loginRef={loginRef} />
          </div>
        )}
      </header>

      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
