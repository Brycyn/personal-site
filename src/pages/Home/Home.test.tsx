import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home page', () => {
  test('renders hero section title', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const titleElement = screen.getByText(/Software Engineer & Developer/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders core expertise section title', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const expertiseTitle = screen.getByText(/Core Expertise/i);
    expect(expertiseTitle).toBeInTheDocument();
  });

  test('renders CTA section title', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const ctaTitle = screen.getByText(/Interested in working together?/i);
    expect(ctaTitle).toBeInTheDocument();
  });
});
