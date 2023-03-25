import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

import NewsCard from '../NewsCard/NewsCard';
import './NewsList.scss';

function NewsList() {
  const { news } = useSelector((state: RootState) => state.news);

  return (
    <section className="news">
      <ul className="news__list">
        {news.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default NewsList;
