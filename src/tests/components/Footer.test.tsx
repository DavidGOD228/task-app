import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Footer from '@/components/Layout/Footer';

describe('Footer Component', () => {
  test('renders footer with the correct text', () => {
    render(<Footer />);
    expect(screen.getByText('© 2024 Test App')).toBeInTheDocument();
  });

  test('footer snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
