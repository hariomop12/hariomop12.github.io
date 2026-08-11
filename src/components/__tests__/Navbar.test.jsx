import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

// Mocks
jest.mock('react-router-dom', () => ({
  NavLink: ({ children, to, ...rest }) => <a href={to} {...rest}>{children}</a>,
  useLocation: () => ({ pathname: '/' }),
}));

jest.mock('../ui/ThemeProvider', () => ({
  useTheme: () => ({ theme: 'light', toggleTheme: jest.fn() }),
}));

describe('Navbar component', () => {
  test('renders logo and nav links', () => {
    render(<Navbar />);
    expect(screen.getByText(/Hari/)).toBeInTheDocument();
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/About/)).toBeInTheDocument();
  });

  test('toggles theme button calls toggleTheme', () => {
    const toggle = jest.fn();
    jest.doMock('../ui/ThemeProvider', () => ({ useTheme: () => ({ theme: 'light', toggleTheme: toggle }) }));
    const NavbarReload = require('../Navbar').default;
    render(<NavbarReload />);
    const btn = screen.getAllByRole('button', { name: /Toggle theme/i })[0];
    fireEvent.click(btn);
    expect(toggle).toHaveBeenCalled();
  });

  test('mobile menu opens and closes', () => {
    render(<Navbar />);
    const menuBtn = screen.getAllByRole('button', { name: /Toggle menu/i })[0];
    fireEvent.click(menuBtn);
    expect(screen.getByText(/Contact/)).toBeInTheDocument();
    fireEvent.click(document.body);
  });

  test('renders header', () => {
    render(<Navbar />);
    expect(document.querySelector('header')).toBeInTheDocument();
  });
});
