import React, { lazy } from 'react';
import { render, screen } from '@testing-library/react';

describe('Home page', () => {
  it('shows the Home page in the document', async () => {
    const Home = lazy(() => import('@/app/page'));

    render(<Home />);

    // I used findByTestId because it is async
    const homePage = await screen.findByTestId('home_page');

    expect(homePage).toBeInTheDocument();
  });
});
