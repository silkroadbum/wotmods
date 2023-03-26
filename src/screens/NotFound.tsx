import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="error">
      <h1 className="title">Error 404</h1>
      <p className="error__description">Страница не найдена</p>
      <Link className="btn btn--show-more" to="/">
        Вернуться на главную
      </Link>
    </section>
  );
}

export default NotFound;
