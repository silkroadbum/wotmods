import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Watch } from 'react-loader-spinner';
import { NewsType, StatusType } from '../types';

function FullNews() {
  const [oneNews, setOneNews] = useState<NewsType>();
  const [isLoading, setIsLoading] = useState<StatusType>('loading');
  const { id } = useParams();

  const fetchNewsById = async (id: string | undefined) => {
    try {
      const { data } = await axios.get<NewsType>(
        `https://641ca6fb1a68dc9e460ebc99.mockapi.io/news/${id}`,
      );
      setOneNews(data);
      setIsLoading('loaded');
    } catch (error) {
      console.error(error);
      setIsLoading('error');
    }
  };

  useEffect(() => {
    fetchNewsById(id);
  }, [id]);

  if (isLoading === 'loading') {
    return (
      <div className="loader-wrapper">
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#000000"
          ariaLabel="watch-loading"
          visible={true}
        />
      </div>
    );
  }

  if (isLoading === 'error') {
    return (
      <div className="loader-wrapper">
        <h1>Ошибка при получении статьи!!!</h1>
      </div>
    );
  }

  return (
    <section className="full-news">
      <h1 className="full-news__title">{oneNews?.title}</h1>
      <img className="full-news__img" src="/img/news/1.jpg" alt={oneNews?.title} />
      <p className="full-news__description">{oneNews?.description}</p>
    </section>
  );
}

export default FullNews;
