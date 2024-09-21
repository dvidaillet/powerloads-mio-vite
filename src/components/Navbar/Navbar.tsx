import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px" }}>
      <Link to="/about" style={{ margin: "0 10px" }}>
        About
      </Link>
    </nav>
  );
}

export default Navbar;
