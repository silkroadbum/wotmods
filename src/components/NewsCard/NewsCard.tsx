import { Link } from 'react-router-dom';
import './NewsCard.scss';

type NewsCardProps = {
  title: string;
  imgUrl: string;
  date: string;
  id: string;
};

function NewsCard({ title, imgUrl, date, id }: NewsCardProps) {
  return (
    <li className="news__item">
      <Link className="news__link" to={`/news/${id}`}>
        <div className="news__preview">
          <div className="news__image-wrapper">
            <img className="news__image" src={imgUrl} alt={title} />
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
