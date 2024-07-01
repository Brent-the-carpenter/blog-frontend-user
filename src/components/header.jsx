import { Link } from "react-router-dom";
import propTypes from "prop-types";
function Header({ user, setTheme, theme }) {
  const changeTheme = () => {
    if (theme === "dark") setTheme("light");
    if (theme === "light") setTheme("dark");
  };
  return (
    <header className="flex flex-wrap justify-center gap-2 border-b-stone-300 p-7 pt-2 align-middle dark:border-b-stone-300">
      <h1 className="align-center flex flex-grow justify-center pt-10 text-4xl font-bold underline underline-offset-1">
        The Carpenters Blog
      </h1>

      <nav className="min-w-80 flex-1 content-end">
        <ul className="items center flex items-start justify-end gap-5 text-lg">
          {!user && <Link className="link">signUp</Link>}
          {user && user.token ? (
            <Link className="link">Logout</Link>
          ) : (
            <Link className="link">Login</Link>
          )}
          <Link className="link" to={"posts"}>
            Posts
          </Link>
          <button onClick={changeTheme}>
            {" "}
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </button>
        </ul>
      </nav>
    </header>
  );
}
Header.propTypes = {
  user: propTypes.shape({
    token: propTypes.string,
    user_name: propTypes.string,
  }),
  theme: propTypes.string,
  setTheme: propTypes.func,
};
export default Header;
