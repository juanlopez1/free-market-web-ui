import { httpGet } from '@free-market-web-ui/services/http.service';

describe('httpGet', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch data from the given endpoint', async () => {
        const mockData = { key: 'value' };

        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData),
        });

        const data = await httpGet('https://api.example.com/data');
        expect(data).toEqual(mockData);
    });

    it('should handle fetch errors', async () => {
        global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

        await expect(httpGet('/test-endpoint')).rejects.toThrow('Network error');
    });
});
