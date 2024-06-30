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

      <nav className="flex-0 self-end">
        <ul className="items center flex justify-end gap-3">
          {!user ? (
            <button className="btn">signUp</button>
          ) : user.token ? (
            <button className="btn">Logout</button>
          ) : (
            <button className="btn">Login</button>
          )}
          <Link to={"posts"} className="btn">
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
