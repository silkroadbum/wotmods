import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

import NewsCard from '../NewsCard/NewsCard';
import './NewsList.scss';

function NewsList() {
  const [showItemsCount, setShowItemsCount] = useState(6);
  const { news } = useSelector((state: RootState) => state.news);
  console.log(news);

  const onClickShowMore = () => {
    setShowItemsCount((prev) => prev + 6);
  };

  return (
    <section className="news">
      <ul className="news__list">
        {news.slice(0, showItemsCount).map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </ul>
      {showItemsCount < news.length && (
        <button className="btn btn--show-more" onClick={onClickShowMore}>
          Показать еще
        </button>
      )}
    </section>
  );
}

export default NewsList;
