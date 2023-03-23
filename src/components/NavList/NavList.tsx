import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MENU_ITEM, MENU_LINK } from '../../const';
import './NavList.scss';

function NavList() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <ul className="nav-list">
      {MENU_ITEM.map((item, i) => (
        <li key={i} className="nav-list__item">
          <Link
            onClick={() => setActiveItem(i)}
            to={MENU_LINK[i]}
            className={`nav-list__link ${activeItem === i ? 'nav-list__link--active' : ''}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
