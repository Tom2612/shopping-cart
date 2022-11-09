import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import RouteSwitch from './RouteSwitch';

describe('tests for initial loading', () => {
  it('Loads App', () => {
    const { getByRole} = render(<RouteSwitch />)
    const text = getByRole('heading', { level: 1 })
    expect(text.textContent).toBe('Shopping Cart App');
  });

  it('loads index route Home on initial load', () => {
    const { getByRole } = render(<RouteSwitch />);
    const text = getByRole('heading', { level: 2 });
    expect(text.textContent).toBe('Home');
  })

  it('Does not load another route on initial load', () => {
    const { getByRole } = render(<RouteSwitch />);
    const testText = getByRole('heading', { level: 2});
    expect(testText.textContent).not.toBe('Shop')
  });

  it('Changes display text when user changes route', () => {
    const { getByRole } = render(<RouteSwitch />)
    const link = screen.getByRole('link', {name: 'Shop'});

    const initialText = getByRole('heading', { level: 2 });
    userEvent.click(link);
    const finalText = screen.getByRole('heading', { level: 2});

    expect(initialText.textContent).toBe('Home')
    expect(finalText.textContent).toBe('Shop')
  })
})