import './NewsCard.scss';

type NewsCardProps = {
  title: string;
  imgUrl: string;
  date: string;
};

function NewsCard({ title, imgUrl, date }: NewsCardProps) {
  return (
    <li className="news__item">
      <a className="news__link" href="/">
        <div className="news__preview">
          <img className="news__image" src={imgUrl} alt={title} />
          <h2 className="news__title">{title}</h2>
        </div>
      </a>
      <footer className="news__footer">
        <span className="news__date">{date}</span>
        <button className="btn" type="button">
          Подробнее
        </button>
      </footer>
    </li>
  );
}

export default NewsCard;
