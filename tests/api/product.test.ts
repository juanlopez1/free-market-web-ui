import { httpGet } from '@free-market-web-ui/services/http.service';

import productAPI from '@free-market-web-ui/api/product.api';

jest.mock('@free-market-web-ui/services/http.service');

describe('ProductAPI', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should call httpGet with the correct endpoint when getById is called', async () => {
        const mockResponse = { id: '1', name: 'Product 1', price: 100 };
        (httpGet as jest.Mock).mockResolvedValue(mockResponse);

        const response = await productAPI.getById({ id: '1' });

        expect(httpGet).toHaveBeenCalledWith('items/1');
        expect(response).toEqual(mockResponse);
    });

    it('should call httpGet with the correct endpoint when searchByQuery is called', async () => {
        const mockResponse = { products: [{ id: '1', name: 'Product 1' }] };
        (httpGet as jest.Mock).mockResolvedValue(mockResponse);

        const response = await productAPI.searchByQuery({ query: 'example' });

        expect(httpGet).toHaveBeenCalledWith('items?q=example');
        expect(response).toEqual(mockResponse);
    });
});
