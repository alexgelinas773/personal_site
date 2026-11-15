import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  // The home page uses a wider layout to fit the hero.
  const wide = pathname === "/";

  return (
    <div className={wide ? "page wide" : "page"}>
      <header className="site-header">
        <Link className="brand" to="/">Alexandra Gelinas</Link>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Alexandra Gelinas</p>
      </footer>
    </div>
  );
}
