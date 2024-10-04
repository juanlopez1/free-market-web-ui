// __tests__/ProductPage.test.tsx
import { render } from '@testing-library/react';
import { redirect } from 'next/navigation';

import ProductPage from '@free-market-web-ui/app/items/[id]/page';
import ProductPageContainer from '@free-market-web-ui/container/ProductPage.container';

jest.mock('@free-market-web-ui/container/ProductPage.container', () => {
    return jest.fn(() => <div>Product Details</div>);
});

jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
}));

describe('ProductPage', () => {
    it('redirects to home if no id param is provided', () => {
        const params = { id: '' };

        render(<ProductPage params={params} />);
        expect(redirect).toHaveBeenCalledWith('/');
    });

    it('renders ProductPageContainer if id param is provided', () => {
        const params = { id: '123' };

        render(<ProductPage params={params} />);
        expect(ProductPageContainer).toHaveBeenCalledWith({ id: '123' }, {});
    });
});
