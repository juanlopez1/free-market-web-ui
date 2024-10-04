import { render, screen } from '@testing-library/react';

import HomePage from '@free-market-web-ui/app/page';

jest.mock('@free-market-web-ui/components/Header', () => () => <div>Header Mock</div>);
jest.mock('@free-market-web-ui/components/HomeMessage', () => () => <div>HomeMessage Mock</div>);
jest.mock('@free-market-web-ui/components/Footer', () => () => <div>Footer Mock</div>);

describe('HomePage', () => {
    it('renders Header, HomeMessage, and Footer', () => {
        render(<HomePage />);

        expect(screen.getByText(/Header Mock/i)).toBeInTheDocument();
        expect(screen.getByText(/HomeMessage Mock/i)).toBeInTheDocument();
        expect(screen.getByText(/Footer Mock/i)).toBeInTheDocument();
    });
});
