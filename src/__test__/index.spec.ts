import { validatePhoneNumberAsync, validatePhoneNumberSync } from '..';

describe('validatePhoneNumberAsync', () => {
    it('should test the asynchronous validation func with a valid MTN number', async () => {
        const result: any = await validatePhoneNumberAsync('07067443245');
        expect(result.isValid).toEqual(true);
        expect(result.telco).toEqual('MTN');
    });

    it('should test the asynchronous validation func with a valid MTN number with the country code appended', async () => {
        const result: any = await validatePhoneNumberAsync('2349157443245');
        expect(result.isValid).toEqual(true);
        expect(result.telco).toEqual('GLO');
    });

    it('should test the asynchronous validation func with a valid MTN number with the country code appended with a plus sign', async () => {
        const result: any = await validatePhoneNumberAsync('+2347067443245');
        expect(result.isValid).toEqual(true);
        expect(result.telco).toEqual('MTN');
    });

    it('should test the asynchronous validation func with a valid GLO number', async () => {
        const result: any = await validatePhoneNumberAsync('08053445543');
        expect(result.isValid).toEqual(true);
        expect(result.telco).toEqual('GLO');
    });

    it('should test the asynchronous validation func with invalid characters', async () => {
        try {
            await validatePhoneNumberAsync('0www3245');
        } catch (error) {
            expect(error.isValid).toEqual(false);
            expect(error.errors.length).toEqual(3);
            expect(error.errors).toEqual([
                "Phone number doesn't match a valid service provider",
                'Phone number should be 11 characters long',
                'Invalid number character detected'
            ]);
        }
    });
});

describe('validatePhoneNumberSync', () => {
    it('should test the synchronous validation func with a valid number', () => {
        const result = validatePhoneNumberSync('07067443245');
        expect(result.isValid).toEqual(true);
    });

    it('should test the synchronous validation func with a valid number with the country code appended', () => {
        const result = validatePhoneNumberSync('2347067443245');
        expect(result.isValid).toEqual(true);
    });

    it('should test the synchronous validation func with a valid number with the country code appended with a plus sign', () => {
        const result = validatePhoneNumberSync('+2347067443245');
        expect(result.isValid).toEqual(true);
    });

    it('should test the synchronous validation func with invalid character', () => {
        const result = validatePhoneNumberSync('07www43245');
        expect(result.isValid).toEqual(false);
    });
});
