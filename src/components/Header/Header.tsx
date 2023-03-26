import { Link } from 'react-router-dom';
import NavList from '../NavList/NavList';
import './Header.scss';

function Header() {
  return (
    <header className="main-header">
      <div className="container container--header">
        <Link to="/" className="main-header__logo">
          WOTMODS
        </Link>
        <nav className="nav">
          <NavList />
        </nav>
      </div>
    </header>
  );
}

export default Header;
