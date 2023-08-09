import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { setupStore } from './store/store.ts';
import { Provider } from 'react-redux';
import './index.scss';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
