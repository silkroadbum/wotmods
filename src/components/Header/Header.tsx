import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavList from '../NavList/NavList';
import './Header.scss';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClickButton = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="main-header">
      <div className="container container--header">
        <Link to="/" className="main-header__logo">
          WOTMODS
        </Link>
        <nav className={`nav ${isActive ? 'open' : ''}`}>
          <NavList handleClick={() => setIsActive(false)} />
        </nav>
        <button onClick={handleClickButton} className={`burger-btn ${isActive ? 'active' : ''}`}>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
