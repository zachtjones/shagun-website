import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText("Hi, I'm Shagun!");
  expect(linkElement).toBeInTheDocument();
});
