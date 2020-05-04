import sum from '../src';

describe('sum', () => {
    it('it should tell use to enter a number', () => {
        const result = sum(2, "3");
        expect(result).toEqual('Provide a number as a argument');

        const result2 = sum(null, 'Hello');
        expect(result2).toEqual('Provide a number as a argument');
    });

    it('it should sum two numbers', () => {
        const result = sum(2, 3);
        expect(result).toEqual(5);
    });
});
