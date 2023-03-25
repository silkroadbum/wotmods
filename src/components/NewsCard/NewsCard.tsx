import './NewsCard.scss';

type NewsCardProps = {
  title: string;
  imgUrl: string;
};

function NewsCard({ title, imgUrl }: NewsCardProps) {
  return (
    <li className="news__item">
      <img className="news__image" src={imgUrl} alt={title} />
      <h2 className="news__title">{title}</h2>
      <button className="btn" type="button">
        Подробнее
      </button>
    </li>
  );
}

export default NewsCard;
