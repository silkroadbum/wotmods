import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';

import Layout from './Layout/Layout';
import Main from './screens/Main';

const FullNews = React.lazy(() => import(/* webpackChunkName: "fullNews" */ './screens/FullNews'));
const News = React.lazy(() => import(/* webpackChunkName: "News" */ './screens/News'));
const Mods = React.lazy(() => import(/* webpackChunkName: "Mods" */ './screens/Mods'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './screens/NotFound'));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/mods"
            element={
              <Suspense fallback={<Loader />}>
                <Mods />
              </Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <Suspense fallback={<Loader />}>
                <News />
              </Suspense>
            }
          />
          <Route
            path="/news/:id"
            element={
              <Suspense fallback={<Loader />}>
                <FullNews />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
