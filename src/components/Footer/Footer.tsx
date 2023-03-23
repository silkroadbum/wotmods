import { MENU_ITEM, MENU_LINK } from '../../const';
import { Link } from 'react-router-dom';
import './Footer.scss';
import SocialList from '../SocialList/SocialList';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="container container--footer">
        <ul className="main-footer__list">
          {MENU_ITEM.map((item, i) => (
            <li key={i} className="main-footer__item">
              <Link to={MENU_LINK[i]} className="main-footer__link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <p className="copyright">Анатолий Егоров &copy; {year}</p>
        <SocialList />
      </div>
    </footer>
  );
}

export default Footer;
