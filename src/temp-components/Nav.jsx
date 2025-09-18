import { NavLink } from "react-router";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Chat">Let's Chat</NavLink>
      <NavLink to="/project">Projects</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Nav;