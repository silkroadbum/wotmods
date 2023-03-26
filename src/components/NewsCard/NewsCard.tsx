import { Link } from 'react-router-dom';

import { replaceFormatImg } from '../../utils/utils';
import './NewsCard.scss';

type NewsCardProps = {
  title: string;
  imgUrlSmall: string;
  date: string;
  id: string;
};

function NewsCard({ title, imgUrlSmall, date, id }: NewsCardProps) {
  return (
    <li className="news__item">
      <Link className="news__link" to={`/news/${id}`}>
        <div className="news__preview">
          <div className="news__image-wrapper">
            <picture>
              <source srcSet={replaceFormatImg(imgUrlSmall, 'avif')} />
              <source srcSet={replaceFormatImg(imgUrlSmall, 'webp')} />
              <img className="news__image" src={imgUrlSmall} alt={title} loading="lazy" />
            </picture>
          </div>

          <h2 className="news__title">{title}</h2>
        </div>
      </Link>
      <footer className="news__footer">
        <span className="news__date">{date}</span>
        <Link className="btn" to={`/news/${id}`}>
          Подробнее
        </Link>
      </footer>
    </li>
  );
}

export default NewsCard;
