import { Outlet, Link } from "react-router";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/credits">Blogs</Link>
          </li>
          <li>
            <Link to="/pantheon">Pantheon</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;