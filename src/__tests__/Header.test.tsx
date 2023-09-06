import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../components/Header/Header';
import { mockCart, mockUser } from '../__mock__/mockStore';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore();

describe('Header component', () => {
  it('should render with data from the store', () => {
    const initialState = {
      user: mockUser,
      cart: mockCart,
    };

    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    expect(getByTestId('logo')).toBeInTheDocument();
    expect(getByTestId('link-Home')).toBeInTheDocument();
    expect(getByTestId('link-Shop')).toBeInTheDocument();
    expect(getByTestId('link-About')).toBeInTheDocument();
  });
});
