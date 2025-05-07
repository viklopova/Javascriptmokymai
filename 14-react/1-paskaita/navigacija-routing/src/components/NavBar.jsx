import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h3>My page</h3>
      <nav>
        <ul className="links">
          <li> <NavLink to='/'> Home </NavLink> </li>
          <li><NavLink to='/about'> About </NavLink></li>
          <li><NavLink to='/contacts'> Contacts </NavLink></li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
