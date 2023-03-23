import { SOCIAL_ITEMS } from '../../const';
import './SocialList.scss';

function SocialList() {
  return (
    <ul className="social-list">
      {SOCIAL_ITEMS.map((obj) => (
        <li key={obj.name} className="social-list__item">
          <a href={obj.href} className="social-list__link" target="_blank" rel="noreferrer">
            <span className="visually-hidden">{obj.name}</span>
            <svg className="social-list__image" width="30" height="30">
              <use xlinkHref={obj.svgLink}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialList;
