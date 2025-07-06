import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

// Mocking ThemeContext and Navbar
jest.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: jest.fn(),
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('./Navbar', () => () => <div data-testid="navbar-mock">Navbar</div>);

describe('Layout component', () => {
  test('renders Navbar and children', () => {
    render(
      <Router>
        <Layout>
          <div data-testid="child-content">Child Content</div>
        </Layout>
      </Router>
    );

    expect(screen.getByTestId('navbar-mock')).toBeInTheDocument();
    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText(/© \d{4} Brycyn Gossett. All rights reserved./i)).toBeInTheDocument();
  });
});
