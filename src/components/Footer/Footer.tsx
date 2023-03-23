import { MENU_ITEM, MENU_LINK } from '../../const';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="container container--footer">
        <ul className="main-footer__list">
          {MENU_ITEM.map((item, i) => (
            <li className="main-footer__item">
              <Link to={MENU_LINK[i]} className="main-footer__link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <p className="copyright">Анатолий Егоров &copy; {year}</p>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              href="https://www.instagram.com/anatolich_man"
              className="social-list__link"
              target="_blank"
              rel="noreferrer">
              <span className="visually-hidden">Инстаграм</span>
              <svg className="copyright__image" width="30" height="30">
                <use xlinkHref="/img/sprite.svg#instagram-icon"></use>
              </svg>
            </a>
          </li>
          <li className="social-list__item">
            <a
              href="https://vk.com/tolian_egorov"
              className="social-list__link"
              target="_blank"
              rel="noreferrer">
              <span className="visually-hidden">Вконтакте</span>
              <svg className="copyright__image" width="30" height="30">
                <use xlinkHref="/img/sprite.svg#vk-icon"></use>
              </svg>
            </a>
          </li>
          <li className="social-list__item">
            <a
              href="https://t.me/anatolichman"
              className="social-list__link"
              target="_blank"
              rel="noreferrer">
              <span className="visually-hidden">Телеграм</span>
              <svg className="copyright__image" width="30" height="30">
                <use xlinkHref="/img/sprite.svg#telegram-icon"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
