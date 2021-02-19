import { validatePhoneNumberAsync, validatePhoneNumberSync } from '..';

describe('validatePhoneNumberAsync', () => {
    it('should test the asynchronous validation func with a valid MTN number', () => {
        validatePhoneNumberAsync('07067443245')
            .then((result: any) => {
                expect(result.isValid).toEqual(true);
                expect(result.telco).toEqual('MTN');
            })
    });

    it('should test the asynchronous validation func with a valid GLO number', () => {
        validatePhoneNumberAsync('08053445543')
            .then((result: any) => {
                expect(result.isValid).toEqual(true);
                expect(result.telco).toEqual('GLO');
            })
    });

    it('should test the asynchronous validation func with invalid characters', () => {
        validatePhoneNumberAsync('0www3245')
            .catch((result: any) => {
                expect(result.isValid).toEqual(false);
                expect(result.errors.length).toEqual(3);
                expect(result.errors).toEqual([
                    "Phone number doesn't match a valid service provider",
                    'Phone number should be 11 characters long',
                    'Invalid number character detected'
                ]);
            })
    });
});

describe('validatePhoneNumberSync', () => {
    it('should test the synchronous validation func with a valid number', () => {
        const result = validatePhoneNumberSync('07067443245');
        expect(result.isValid).toEqual(true);
    });

    it('should test the synchronous validation func with invalid character', () => {
        const result = validatePhoneNumberSync('07www43245');
        expect(result.isValid).toEqual(false);
    });
});
