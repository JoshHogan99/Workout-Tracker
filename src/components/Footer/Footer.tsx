import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <NavLink to="/profile" className="link">
          <FaUser />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/history" className="link">
          <FaClock />
          <span>History</span>
        </NavLink>
        <NavLink to="/" className="link">
          <FaPlus />
          <span>Workout</span>
        </NavLink>
        <NavLink to="/exercises" className="link">
          <FaDumbbell />
          <span>Exercises</span>
        </NavLink>
        <NavLink to="/upgrade" className="link">
          <FaCrown />
          <span>Upgrade</span>
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
