
import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Submission from '../molecules/submission';

test('displays message on form submission', () => {
    render(<Submission/>);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', {name: 'Submit'});

    act(() => { 
        userEvent.type(input, 'Paula');
        userEvent.click(button);
    });

    waitFor(() => {
        const newMessage = screen.getByText('Hola, mi nombre es Paula');
        expect(newMessage).toBeInTheDocument();
    });
});
