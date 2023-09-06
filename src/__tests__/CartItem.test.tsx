import { render } from '@testing-library/react';
import CartItem from '../components/CartItem/CartItem';
import { mockCart } from '../__mock__/mockStore';
import { ICart } from '../store/reducers/cart.slice';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('CartItem component', () => {
  const initialState: Partial<ICart> = {
    items: mockCart.items,
    total: mockCart.total,
    price: mockCart.price,
  };

  const store = mockStore(initialState);

  const state = store.getState() as ICart;

  it('renders product name and description', () => {
    const { getByText } = render(
      <Provider store={store}>
        <CartItem item={state.items[0]} />
      </Provider>
    );
    expect(getByText('Product Name')).toBeInTheDocument();
    expect(getByText('Product Description')).toBeInTheDocument();
  });

  it('renders correct price', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CartItem item={state.items[0]} />
      </Provider>
    );
    expect(getByTestId('price')).toHaveTextContent('345');
  });

  it('increments and decrements item count', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CartItem item={state.items[0]} />
      </Provider>
    );

    const countDisplay = getByTestId('count');
    expect(countDisplay).toHaveTextContent('2');
  });
});
