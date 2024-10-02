const getConditionString = (condition: 'new' | 'used') => (condition === 'new' ? 'Nuevo' : 'Usado');

export default getConditionString;
