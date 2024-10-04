import { render } from '@testing-library/react';
import { redirect, useSearchParams } from 'next/navigation';

import SearchResultPage from '@free-market-web-ui/app/items/page';
import SearchResultPageContainer from '@free-market-web-ui/container/SearchResultPage.container';

jest.mock('@free-market-web-ui/container/SearchResultPage.container', () => {
    return jest.fn(() => <div>Search Results</div>);
});

jest.mock('next/navigation', () => ({
    useSearchParams: jest.fn(),
    redirect: jest.fn(),
}));

describe('SearchResultPage', () => {
    it('redirects to home if no search param is provided', () => {
        (useSearchParams as jest.Mock).mockReturnValue({
            get: jest.fn(() => null),
        });

        render(<SearchResultPage />);
        expect(redirect).toHaveBeenCalledWith('/');
    });

    it('renders SearchResultPageContainer if search param is provided', () => {
        (useSearchParams as jest.Mock).mockReturnValue({
            get: jest.fn(() => 'test query'),
        });

        render(<SearchResultPage />);
        expect(SearchResultPageContainer).toHaveBeenCalled();
    });
});
