import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🌐 MyApp</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;