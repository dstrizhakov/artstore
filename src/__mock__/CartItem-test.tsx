import { render } from '@testing-library/react';
import CartItem from '../components/CartItem/CartItem';
import { CartStoreType, mockCart } from './mockStore';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('CartItem component', () => {
  const initialState: CartStoreType = {
    cart: mockCart.cart,
  };

  const store = mockStore(initialState);

  const state = store.getState() as CartStoreType;

  it('renders product name and description', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CartItem item={state.cart.lineItems[0]} />
      </Provider>
    );
    expect(getByText('Provence original oil painting on canvas lavender and sunflower fields ')).toBeInTheDocument();
  });

  it('renders correct price', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CartItem item={state.cart.lineItems[0]} />
      </Provider>
    );
    expect(getByTestId('price')).toHaveTextContent('67');
  });

  it('item count', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CartItem item={state.cart.lineItems[0]} />
      </Provider>
    );

    const countDisplay = getByTestId('count');
    expect(countDisplay).toHaveTextContent('123');
  });
});
