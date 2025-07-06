import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './About';

// Mocking the ThemeContext as it's used in Navbar, which is part of Layout, which wraps About
jest.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: jest.fn(),
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('About page', () => {
  test('renders about me section title', () => {
    render(
      <Router>
        <About />
      </Router>
    );
    const titleElement = screen.getByRole('heading', { name: /About Me/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders skills section title', () => {
    render(
      <Router>
        <About />
      </Router>
    );
    const skillsTitle = screen.getByRole('heading', { name: /Skills & Technologies/i });
    expect(skillsTitle).toBeInTheDocument();
  });

  test('renders work experience section title', () => {
    render(
      <Router>
        <About />
      </Router>
    );
    const experienceTitle = screen.getByRole('heading', { name: /Work Experience/i });
    expect(experienceTitle).toBeInTheDocument();
  });
});
