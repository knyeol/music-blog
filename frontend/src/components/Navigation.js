import "../styles/Navigation.css";

function Navigation() {
  return (
    <div className="navbar">
      <a className="navbar-link" href="/">
        Blog
      </a>
      <a className="navbar-link" href="/about">
        About
      </a>
    </div>
  );
}

export default Navigation;
