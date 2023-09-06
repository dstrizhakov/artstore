import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainInfo from '../components/MainInfo/MainInfo';

describe('MainInfo component', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MainInfo />
      </MemoryRouter>
    );
    expect(getByTestId('link').getAttribute('href')).toBe('/shop');
  });
});
