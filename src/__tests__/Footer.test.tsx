import { render } from '@testing-library/react';
import Footer from '../components/Footer/Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer component', () => {
  it('should render', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(getByTestId('copyright')).toHaveTextContent(`FINEART | ${new Date().getFullYear()}`);
    expect(getByText('Home').getAttribute('href')).toBe('/');
    expect(getByText('Shop').getAttribute('href')).toBe('/shop');
    expect(getByText('About').getAttribute('href')).toBe('/about');
    expect(getByTestId('dstrizhakov').getAttribute('href')).toBe('https://github.com/dstrizhakov');
    expect(getByTestId('mardon07').getAttribute('href')).toBe('https://github.com/mardon07');
    expect(getByTestId('webj0ker').getAttribute('href')).toBe('https://github.com/webj0ker');
  });
});
