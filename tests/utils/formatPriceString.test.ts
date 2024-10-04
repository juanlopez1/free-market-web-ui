import formatPriceString from '@free-market-web-ui/utils/formatPriceString';

describe('formatPriceString', () => {
    it('formats price to USD correctly', () => {
        const price = 123456;
        const formattedPrice = formatPriceString(price, 'USD');
        expect(formattedPrice).toBe('US$ 123.456');
    });

    it('formats price with default currency (ARS)', () => {
        const price = 78910;
        const formattedPrice = formatPriceString(price);
        expect(formattedPrice).toBe('$ 78.910');
    });

    it('formats price with decimal values', () => {
        const price = 78910.55;
        const formattedPrice = formatPriceString(price);
        expect(formattedPrice).toBe('$ 78.911');
    });
});
