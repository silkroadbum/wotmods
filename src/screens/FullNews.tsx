import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { NewsType, LoadingStatus } from '../types';
import Loader from '../components/Loader/Loader';

function FullNews() {
  const [oneNews, setOneNews] = useState<NewsType>();
  const [isLoading, setIsLoading] = useState<LoadingStatus>(LoadingStatus.Loading);
  const { id } = useParams();

  const fetchNewsById = async (id: string | undefined) => {
    try {
      const { data } = await axios.get<NewsType>(
        `https://641ca6fb1a68dc9e460ebc99.mockapi.io/news/${id}`,
      );
      setOneNews(data);
      setIsLoading(LoadingStatus.Loaded);
    } catch (error) {
      console.error(error);
      setIsLoading(LoadingStatus.Error);
    }
  };

  useEffect(() => {
    fetchNewsById(id);
  }, [id]);

  if (isLoading === LoadingStatus.Loading) {
    return <Loader />;
  }

  if (isLoading === LoadingStatus.Error) {
    return (
      <div className="loader-wrapper">
        <h1>Ошибка при получении статьи!!!</h1>
      </div>
    );
  }

  return (
    <section className="full-news">
      <h1 className="full-news__title">{oneNews?.title}</h1>
      <picture>
        <source srcSet={oneNews?.imgUrl?.replace('jpg', 'avif')} />
        <source srcSet={oneNews?.imgUrl?.replace('jpg', 'webp')} />
        <img className="full-news__img" src={oneNews?.imgUrl} alt={oneNews?.title} loading="lazy" />
      </picture>
      <p className="full-news__date">{oneNews?.date}</p>
      <p className="full-news__description">{oneNews?.description}</p>
      <Link to="/news" className="btn btn--full-news">
        Вернуться назад
      </Link>
    </section>
  );
}

export default FullNews;
