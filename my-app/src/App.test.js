import { render, screen } from '@testing-library/react';
import App from './App';

test('test react', () => {
  expect(render(<App />)).toMatchSnapshot();
})
