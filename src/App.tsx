import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import FullNews from './screens/FullNews';
import Mods from './screens/Mods';
import News from './screens/News';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Mods />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<FullNews />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
