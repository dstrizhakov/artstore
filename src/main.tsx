import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.scss';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import './index.scss';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
