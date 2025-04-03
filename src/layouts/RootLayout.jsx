import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="articles" className="header__logo">
            Realworld Blog
          </Link>
          <Link>Sign In</Link>
          <Link className="header__signUp">Sign Up</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
