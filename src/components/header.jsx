function Header(user) {
  return (
    <header className="flex flex-wrap justify-center gap-2 bg-slate-500 p-7 pt-2 align-middle">
      <h1 className="align-center flex flex-grow justify-center bg-slate-500 pt-10 text-4xl font-bold text-stone-100">
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
          <button className="btn">Posts</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
