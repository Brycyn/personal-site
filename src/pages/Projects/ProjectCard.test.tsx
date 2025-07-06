import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { Project, ProjectCategory } from './projectsData';

const mockProject: Project = {
  id: 1,
  title: 'Sample Project',
  description: 'This is a sample project description.',
  image: 'sample.jpg',
  category: 'web', // Changed from ProjectCategory.WEB to string literal
  technologies: ['React', 'TypeScript'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/example/sample-project',
};

describe('ProjectCard component', () => {
  test('renders project details correctly', () => {
    render(<ProjectCard project={mockProject} index={0} />);

    expect(screen.getByText('Sample Project')).toBeInTheDocument();
    expect(screen.getByText('This is a sample project description.')).toBeInTheDocument();
    expect(screen.getByAltText('Sample Project')).toHaveAttribute('src', 'sample.jpg');
    expect(screen.getByText('Web')).toBeInTheDocument(); // Category
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  test('renders Live Demo link if liveUrl is provided', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const liveDemoLink = screen.getByRole('link', { name: /Live Demo/i });
    expect(liveDemoLink).toBeInTheDocument();
    expect(liveDemoLink).toHaveAttribute('href', 'https://example.com');
  });

  test('does not render Live Demo link if liveUrl is not provided', () => {
    const projectWithoutLiveUrl = { ...mockProject, liveUrl: undefined };
    render(<ProjectCard project={projectWithoutLiveUrl} index={0} />);
    expect(screen.queryByRole('link', { name: /Live Demo/i })).not.toBeInTheDocument();
  });

  test('renders Code link if githubUrl is provided', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const codeLink = screen.getByRole('link', { name: /Code/i });
    expect(codeLink).toBeInTheDocument();
    expect(codeLink).toHaveAttribute('href', 'https://github.com/example/sample-project');
  });

  test('does not render Code link if githubUrl is not provided', () => {
    const projectWithoutGithubUrl = { ...mockProject, githubUrl: undefined };
    render(<ProjectCard project={projectWithoutGithubUrl} index={0} />);
    expect(screen.queryByRole('link', { name: /Code/i })).not.toBeInTheDocument();
  });
});
