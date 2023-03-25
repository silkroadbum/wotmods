import React from 'react';
import NewsList from '../components/NewsList/NewsList';

function News() {
  return (
    <>
      <header className="page-header">
        <h1 className="title">Новости</h1>
      </header>
      <NewsList />
    </>
  );
}

export default News;
