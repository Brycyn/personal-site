import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useTheme } from '../../context/ThemeContext';

// Mock ThemeContext
jest.mock('../../context/ThemeContext', () => ({
  useTheme: jest.fn(),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock useLocation
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('Navbar component', () => {
  const mockToggleTheme = jest.fn();
  const mockUseTheme = useTheme as jest.Mock;
  const mockUseLocation = useLocation as jest.Mock;

  beforeEach(() => {
    mockUseTheme.mockReturnValue({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    });
    mockUseLocation.mockReturnValue({ pathname: '/' }); // Default to home page
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders logo and navigation links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByText('Brycyn')).toBeInTheDocument();
    expect(screen.getByText('Gossett')).toBeInTheDocument();

    // On home page, About and Projects links should be visible
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
  });

  test('does not render link for the current page', () => {
    mockUseLocation.mockReturnValue({ pathname: '/about' });
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.queryByRole('link', { name: /About/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
  });

  test('renders social media links and theme toggle button', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByLabelText(/Toggle theme/i)).toBeInTheDocument();
    // Check for desktop links by aria-label
    const desktopLinks = screen.getAllByRole('link', { name: /Profile/i });
    expect(desktopLinks.find(link => link.getAttribute('aria-label') === 'GitHub Profile')).toBeInTheDocument();
    expect(desktopLinks.find(link => link.getAttribute('aria-label') === 'LinkedIn Profile')).toBeInTheDocument();
  });

  test('toggles theme when theme button is clicked', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const themeButton = screen.getByLabelText(/Toggle theme/i);
    fireEvent.click(themeButton);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  test('opens and closes mobile menu', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const menuButton = screen.getByLabelText(/Toggle menu/i);

    // Check initial state (closed for desktop, button exists for mobile)
    // Mobile menu items should not be visible initially if `isOpen` is false.
    // Framer motion might keep elements in DOM but hidden. We test for visibility.
    // For simplicity, we'll assume that if the button is there, it's for mobile.
    // A more robust test might involve changing viewport size.

    // Open mobile menu
    fireEvent.click(menuButton);
    // Check if mobile specific links/buttons are now visible
    // Since the links are the same, we can check if the menu container is visible
    // Framer motion's `height: "auto"` makes this tricky.
    // Check if the X icon is present by its class
    let toggleButton = screen.getByLabelText(/Toggle menu/i);
    expect(toggleButton.querySelector('.lucide-x')).toBeInTheDocument();
    expect(toggleButton.querySelector('.lucide-menu')).not.toBeInTheDocument();


    // Close mobile menu
    fireEvent.click(menuButton);
    toggleButton = screen.getByLabelText(/Toggle menu/i);
    // Check if the Menu icon is present by its class
    expect(toggleButton.querySelector('.lucide-menu')).toBeInTheDocument();
    expect(toggleButton.querySelector('.lucide-x')).not.toBeInTheDocument();
  });
});
