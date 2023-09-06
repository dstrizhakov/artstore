import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.scss';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import './index.scss';
import ErrorBoundary from './ErrorBoundary';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
