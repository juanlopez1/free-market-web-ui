import { httpGet, processDefaultErrors } from '@free-market-web-ui/services/http.service';

global.fetch = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

describe('processDefaultErrors', () => {
    it('should not throw an error for successful responses', () => {
        const response = { ok: true, status: 200 };
        expect(() => processDefaultErrors(response as Response)).not.toThrow();
    });

    it('should throw an error for a 400 response', () => {
        const response = { ok: false, status: 400 };
        expect(() => processDefaultErrors(response as Response)).toThrow('Bad request: 400');
    });

    it('should throw an error for a 404 response', () => {
        const response = { ok: false, status: 404 };
        expect(() => processDefaultErrors(response as Response)).toThrow('Not found: 404');
    });

    it('should throw an error for a 500 response', () => {
        const response = { ok: false, status: 500 };
        expect(() => processDefaultErrors(response as Response)).toThrow('Server error: 500');
    });

    it('should throw an error for other responses', () => {
        const response = { ok: false, status: 300 };
        expect(() => processDefaultErrors(response as Response)).toThrow('Failed to proceed: 300');
    });
});

describe('httpGet', () => {
    it('should fetch data successfully', async () => {
        const mockData = { id: '1', name: 'Item 1' };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: jest.fn().mockResolvedValueOnce(mockData),
        });

        const data = await httpGet('/items/1');

        expect(data).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_URL}/items/1`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
    });

    it('should throw an error for 400 response', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 400,
        });

        await expect(httpGet('/items/1')).rejects.toThrow('Bad request: 400');
    });

    it('should throw an error for 404 response', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
        });

        await expect(httpGet('/items/1')).rejects.toThrow('Not found: 404');
    });

    it('should throw an error for 500 response', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        await expect(httpGet('/items/1')).rejects.toThrow('Server error: 500');
    });

    it('should throw an error for other responses', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 300,
        });

        await expect(httpGet('/items/1')).rejects.toThrow('Failed to proceed: 300');
    });
});
