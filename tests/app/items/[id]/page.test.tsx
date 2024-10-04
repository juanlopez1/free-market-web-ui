import { redirect } from 'next/navigation';
import { render } from '@testing-library/react';

import ProductPage from '@free-market-web-ui/app/items/[id]/page';
import ProductPageContainer from '@free-market-web-ui/container/ProductPage.container';

jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
}));

jest.mock('@free-market-web-ui/container/ProductPage.container', () =>
    jest.fn(() => <div>Mocked ProductPageContainer</div>),
);

describe('ProductPage', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call redirect if no id is provided', () => {
        render(<ProductPage params={{}} />);

        expect(redirect).toHaveBeenCalledWith('/');
    });

    it('should render ProductPageContainer if id is provided', () => {
        const id = '123';
        const { getByText } = render(<ProductPage params={{ id }} />);

        expect(redirect).not.toHaveBeenCalled();
        expect(ProductPageContainer).toHaveBeenCalledWith({ id }, {});
        expect(getByText('Mocked ProductPageContainer')).toBeInTheDocument();
    });
});
