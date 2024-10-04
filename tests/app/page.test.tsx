import { render } from '@testing-library/react';

import HomePage from '@free-market-web-ui/app/page';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
    useSearchParams: () => ({
        get: jest.fn(),
    }),
}));

describe('HomePage', () => {
    it('renders', () => {
        render(<HomePage />);
    });
});
