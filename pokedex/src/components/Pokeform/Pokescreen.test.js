import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pokescreen from './Pokescreen';

describe('<Pokescreen />', () => {
  test('it should mount', () => {
    render(<Pokescreen />);
    
    const pokescreen = screen.getByTestId('Pokescreen');

    expect(pokescreen).toBeInTheDocument();
  });
});