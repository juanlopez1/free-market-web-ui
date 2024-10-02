const formatPriceString = (price: number, currency = 'ARS') =>
    new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    }).format(price);

export default formatPriceString;
