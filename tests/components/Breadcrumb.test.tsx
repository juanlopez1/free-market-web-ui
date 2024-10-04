import { render } from '@testing-library/react';

import Breadcrumb from '@free-market-web-ui/components/Breadcrumb';
import useProduct from '@free-market-web-ui/context/product.context';

jest.mock('@free-market-web-ui/context/product.context');

describe('Breadcrumb', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should not render anything when fetching is true', () => {
        (useProduct as jest.Mock).mockReturnValue({
            categories: undefined,
            error: false,
            fetching: true,
        });

        const { container } = render(<Breadcrumb />);
        expect(container).toBeEmptyDOMElement();
    });

    it('should not render anything when there is an error', () => {
        (useProduct as jest.Mock).mockReturnValue({
            categories: undefined,
            error: true,
            fetching: false,
        });

        const { container } = render(<Breadcrumb />);
        expect(container).toBeEmptyDOMElement();
    });

    it('should render categories correctly', () => {
        const mockCategories = ['Category 1', 'Category 2', 'Category 3'];
        (useProduct as jest.Mock).mockReturnValue({
            categories: mockCategories,
            error: false,
            fetching: false,
        });

        const { getByText } = render(<Breadcrumb />);

        expect(getByText('Category 1')).toBeInTheDocument();
        expect(getByText('Category 2')).toBeInTheDocument();
        expect(getByText('Category 3')).toBeInTheDocument();

        const dividers = document.getElementsByClassName('breadcrumb-divider-icon');
        expect(dividers.length).toBe(mockCategories.length - 1);
    });

    it('should render the last category without a divider', () => {
        const mockCategories = ['Category 1', 'Category 2'];
        (useProduct as jest.Mock).mockReturnValue({
            categories: mockCategories,
            error: false,
            fetching: false,
        });

        const { getByText } = render(<Breadcrumb />);

        expect(getByText('Category 2')).toHaveClass('breadcrumb-last-path');
    });
});
