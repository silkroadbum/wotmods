import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import FullNews from './screens/FullNews';
import Mods from './screens/Mods';
import News from './screens/News';
import NotFound from './screens/NotFound';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Mods />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<FullNews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
