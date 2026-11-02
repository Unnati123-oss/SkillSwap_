import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>SkillSwap</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/requests">Requests</Link>
        <Link to="/sessions">Sessions</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;