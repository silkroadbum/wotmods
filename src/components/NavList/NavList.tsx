import { Link } from 'react-router-dom';

import { MENU_ITEM, MENU_LINK } from '../../const';
import './NavList.scss';

function NavList() {
  return (
    <ul className="nav-list">
      {MENU_ITEM.map((item, i) => (
        <li key={i} className="nav-list__item">
          <Link to={MENU_LINK[i]} className="nav-list__link">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
