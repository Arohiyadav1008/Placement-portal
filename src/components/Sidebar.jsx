import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/" className="nav-item">
          Dashboard
        </NavLink>

        <NavLink to="/jobs" className="nav-item">
          Jobs
        </NavLink>

        <NavLink to="/applications" className="nav-item">
          Applications
        </NavLink>

        <NavLink to="/profile" className="nav-item">
          Profile
        </NavLink>
      </nav>

      <button className="logout-btn">
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;