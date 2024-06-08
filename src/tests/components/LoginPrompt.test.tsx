import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPrompt from '@/components/LoginPrompt';

describe('LoginPrompt Component', () => {
  test('renders the login message correctly', () => {
    render(<LoginPrompt />);
    const messageElement = screen.getByText(
      'You need to log in to see the card list'
    );
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveStyle('fontSize: xl');
    expect(messageElement).toHaveStyle('marginBottom: 4');
  });
});
