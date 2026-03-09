import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      <nav className="nav">
        <div className="nav-inner container">
          <Link to="/" className="nav-logo">
            Jairam Alluri
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects/rag-system">RAG Project</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
