import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MENU_ITEM, MENU_LINK } from '../../const';
import './Header.scss';

function Header() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <header className="main-header">
      <div className="container container--header">
        <a href="/" className="main-header__logo">
          WOTMODS
        </a>
        <nav className="main-nav">
          <ul className="main-nav__list">
            {MENU_ITEM.map((item, i) => (
              <li key={i} className="main-nav__item">
                <Link
                  onClick={() => setActiveItem(i)}
                  to={MENU_LINK[i]}
                  className={`main-nav__link ${activeItem === i ? 'main-nav__link--active' : ''}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
