import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { fetchNews } from './store/newsSlice/newsSlice';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';

store.dispatch(fetchNews());

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
