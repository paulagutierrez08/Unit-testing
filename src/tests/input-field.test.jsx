import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from '../molecules/input-field';

test('Add name when clicked the button', () => {
  render(<InputField/>);

  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  act(() => { 
    userEvent.type(input, 'Paula');
    userEvent.click(button);
});

  const AddName = screen.getByText('Hello, Paula!');
  expect(AddName).toBeInTheDocument();
});