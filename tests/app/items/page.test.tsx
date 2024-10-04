import { render } from '@testing-library/react';

import SearchResultPage from '@free-market-web-ui/app/items/page';

jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
    useRouter: () => ({
        push: jest.fn(),
    }),
    useSearchParams: () => ({
        get: jest.fn(),
    }),
}));

describe('SearchResultPage', () => {
    it('renders', () => {
        render(<SearchResultPage />);
    });
});
