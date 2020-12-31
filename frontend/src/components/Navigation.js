import "../styles/Navigation.css";

function Navigation() {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <a className="navbar-link" href="/">
          Blog
        </a>
        <a className="navbar-link" href="/about">
          About
        </a>
      </div>
    </div>
  );
}

export default Navigation;
