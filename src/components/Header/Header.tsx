import NavList from '../NavList/NavList';
import './Header.scss';

function Header() {
  return (
    <header className="main-header">
      <div className="container container--header">
        <a href="/" className="main-header__logo">
          WOTMODS
        </a>
        <nav className="nav">
          <NavList />
        </nav>
      </div>
    </header>
  );
}

export default Header;
