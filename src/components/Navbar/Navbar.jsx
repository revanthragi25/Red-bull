import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <div className="logo-icon">
            <span></span>
            <span></span>
          </div>
          <h2>Red Bull</h2>
        </div>

        <nav className="navbar-links">
          <NavLink to="/sports">Sports</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/athletes">Athletes</NavLink>
          <NavLink to="/videos">Stories</NavLink>
          <NavLink to="/gaming">Gaming</NavLink>
          <NavLink to="/products">Energy Drinks</NavLink>                              
        </nav>

        <div className="navbar-actions">
          <button className="shop-btn" onClick={() => navigate('/products')}>                    
            Shop
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
