import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../molecules/button';

test('changes message when button is clicked', () => {
  render(<Button />);

  const Message = screen.getByText('Hello!');
  expect(Message).toBeInTheDocument();

  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();

  act(() => { 
    userEvent.click(button);
  });

  const UpdatedMessage = screen.getByText('Hello, User!');
  expect(UpdatedMessage).toBeInTheDocument();
});
