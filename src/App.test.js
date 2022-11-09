import { render, screen } from '@testing-library/react';
import App from './App';
import RouteSwitch from './RouteSwitch';

describe('tests for initial loading', () => {
  it('Loads App', () => {
    render(<RouteSwitch />)
    const heading = screen.getByRole('heading')
    expect(heading.textContent).toBe('Shopping Cart App')
  });
})