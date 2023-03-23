import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Mods from './screens/Mods';
import News from './screens/News';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Mods />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
