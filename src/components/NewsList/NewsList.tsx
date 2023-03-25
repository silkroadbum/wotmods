import { NEWS } from '../../mock/news';
import NewsCard from '../NewsCard/NewsCard';
import './NewsList.scss';

function NewsList() {
  return (
    <section className="news">
      <ul className="news__list">
        {NEWS.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default NewsList;
