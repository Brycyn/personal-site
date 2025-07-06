import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './Projects';

// Mocking projectsData
jest.mock('./projectsData', () => ({
  projects: [
    { id: '1', title: 'Test Project 1', description: 'Desc 1', image: 'img1.jpg', category: 'web', technologies: ['React'], liveUrl: 'url1', githubUrl: 'git1' },
    { id: '2', title: 'Test Project 2', description: 'Desc 2', image: 'img2.jpg', category: 'mobile', technologies: ['React Native'], liveUrl: 'url2', githubUrl: 'git2' },
  ],
  ProjectCategory: {
    WEB: 'web',
    MOBILE: 'mobile',
  }
}));

describe('Projects page', () => {
  test('renders projects page title', () => {
    render(
      <Router>
        <Projects />
      </Router>
    );
    const titleElement = screen.getByRole('heading', { name: /My Projects/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all projects initially', () => {
    render(
      <Router>
        <Projects />
      </Router>
    );
    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
  });

  test('filters projects when a filter button is clicked', () => {
    render(
      <Router>
        <Projects />
      </Router>
    );

    const webFilterButton = screen.getByRole('button', { name: /Web Development/i });
    fireEvent.click(webFilterButton);

    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Project 2')).not.toBeInTheDocument();

    const mobileFilterButton = screen.getByRole('button', { name: /Mobile Apps/i });
    fireEvent.click(mobileFilterButton);

    expect(screen.queryByText('Test Project 1')).not.toBeInTheDocument();
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();

    const allFilterButton = screen.getByRole('button', { name: /All Projects/i });
    fireEvent.click(allFilterButton);

    expect(screen.getByText('Test Project 1')).toBeInTheDocument();
    expect(screen.getByText('Test Project 2')).toBeInTheDocument();
  });
});
