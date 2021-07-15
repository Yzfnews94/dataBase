import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
// import { loadDevTools } from 'jira-dev-tool';

// loadDevTools (()=> ReactDOM.render(
//    <React.StrictMode>
//      <App />
//    </React.StrictMode>
// ));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
