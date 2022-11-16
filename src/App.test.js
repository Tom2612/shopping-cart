import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('tests for initial loading', () => {
  it('Loads App', () => {
    const { getByRole} = render(<App />)
    const text = getByRole('heading', { level: 1 })
    expect(text.textContent).toBe('Shopping Cart App');
  });

  it('loads index route Home on initial load', () => {
    const { getByRole } = render(<App />);
    const text = getByRole('heading', { level: 2 });
    expect(text.textContent).toBe('Home');
  })

  it('Does not load another route on initial load', () => {
    const { getByRole } = render(<App />);
    const testText = getByRole('heading', { level: 2});
    expect(testText.textContent).not.toBe('Shop')
  });

  it('Changes display text when user changes route', () => {
    const { getByRole } = render(<App />)
    const link = screen.getByRole('link', {name: 'Shop'});

    const initialText = getByRole('heading', { level: 2 });
    userEvent.click(link);
    const finalText = screen.getByRole('heading', { level: 2});

    expect(initialText.textContent).toBe('Home')
    expect(finalText.textContent).toBe('Shop')
  })

  it('Displays item when accessing shop', () => {
    const { getByRole } = render(<App />)
    const link = screen.getByRole('link', { name: 'Shop'});

    userEvent.click(link);
    const itemText = screen.getByRole('heading', { name: 'Carrots'});
    expect(itemText.textContent).toBe('Carrots');
  })

  it('adds 1 carrot to cart', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: 'Shop'});
    userEvent.click(link);

    const qty = screen.getAllByText(/qty/i)[0];
    const addBtn = screen.getAllByRole('button', { name: '+1'})[0];
    userEvent.click(addBtn);
    expect(qty.textContent).toBe('qty: 4')
  })
  it('decrement btn removes a carrot', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: 'Shop'});
    userEvent.click(link);

    const qty = screen.getAllByText(/qty/i)[0];
    const addBtn = screen.getAllByRole('button', { name: '-1'})[0];
    userEvent.click(addBtn);
    expect(qty.textContent).toBe('qty: 2')
  });

  it('adds new item to cart, increases cart length', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: 'Shop'});
    userEvent.click(link);

    const qty = screen.getAllByText(/Cart/i)[1];
    const addBtn = screen.getAllByRole('button', { name: 'Add to cart'})[2];
    userEvent.click(addBtn);
    expect(qty.textContent).toBe('Cart (3 items)')
  })
})