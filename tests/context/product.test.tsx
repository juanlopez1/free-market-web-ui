import { useSearchParams } from 'next/navigation';
import { act, render, screen, waitFor } from '@testing-library/react';

import useProduct, { ProductProvider } from '@free-market-web-ui/context/product.context';
import productAPI from '@free-market-web-ui/api/product.api';

jest.mock('@free-market-web-ui/api/product.api');
jest.mock('next/navigation', () => ({
    useSearchParams: jest.fn(() => ({
        get: jest.fn(),
    })),
}));

const mockProduct = {
    item: { id: '1', title: 'Product 1', price: 100 },
    categories: ['category1', 'category2'],
};

const mockSearchResults = {
    items: [{ id: '2', title: 'Product 2' }],
    categories: ['searchCategory1', 'searchCategory2'],
};

describe('ProductContext', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const TestComponent = () => {
        const { categories, error, fetching, product, searchProducts } = useProduct();
        return (
            <div>
                {fetching && <p>Loading...</p>}
                {error && <p>Error loading data</p>}
                {product && <p>Product: {product.title}</p>}
                {categories && <p>Categories: {categories.join(', ')}</p>}
                {searchProducts && <p>Search Products: {searchProducts.map((p) => p.title).join(', ')}</p>}
            </div>
        );
    };

    it('fetches product by id', async () => {
        (productAPI.getById as jest.Mock).mockResolvedValue(mockProduct);

        await act(async () => {
            render(
                <ProductProvider id="1">
                    <TestComponent />
                </ProductProvider>,
            );
        });

        await waitFor(() => {
            expect(productAPI.getById).toHaveBeenCalledWith({ id: '1' });
        });
        expect(screen.getByText('Product: Product 1')).toBeInTheDocument();
    });

    it('fetches products by search query', async () => {
        (useSearchParams as jest.Mock).mockReturnValue({
            get: () => 'example query',
        });
        (productAPI.searchByQuery as jest.Mock).mockResolvedValue(mockSearchResults);

        await act(async () => {
            render(
                <ProductProvider>
                    <TestComponent />
                </ProductProvider>,
            );
        });

        await waitFor(() => {
            expect(productAPI.searchByQuery).toHaveBeenCalledWith({ query: 'example query' });
        });
        expect(screen.getByText('Search Products: Product 2')).toBeInTheDocument();
        expect(screen.getByText('Categories: searchCategory1, searchCategory2')).toBeInTheDocument();
    });

    it('shows error when product fetch fails', async () => {
        (productAPI.getById as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

        await act(async () => {
            render(
                <ProductProvider id="1">
                    <TestComponent />
                </ProductProvider>,
            );
        });

        await waitFor(() => {
            expect(productAPI.getById).toHaveBeenCalled();
        });
        expect(screen.getByText('Error loading data')).toBeInTheDocument();
    });
});
