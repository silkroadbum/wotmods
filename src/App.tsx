import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Main from './screens/Main';
// import FullNews from './screens/FullNews';
// import Mods from './screens/Mods';
// import News from './screens/News';
// import NotFound from './screens/NotFound';

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
              <Suspense>
                <Mods />
              </Suspense>
            }
          />
          <Route
            path="/news"
            element={
              <Suspense>
                <News />
              </Suspense>
            }
          />
          <Route
            path="/news/:id"
            element={
              <Suspense>
                <FullNews />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense>
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
