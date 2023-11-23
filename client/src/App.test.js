import { render, screen } from '@testing-library/react';

import App from './App';
import Favorites from './components/Favorites';
import ItunesSearch from './components/ItunesSearch';

test('renders App component', () => {
  render(<App />);
});

test('renders Favorites component', () => {
  render(<Favorites />);
});

test('renders ItunesSearch component', () => {
  render(<ItunesSearch />);
});
