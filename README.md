# Nigerian Phone Number Validator

[![CircleCI](https://circleci.com/gh/shaolinmkz/nigeria-phone-number-validator/tree/master.svg?style=svg)](https://circleci.com/gh/shaolinmkz/nigeria-phone-number-validator/tree/master) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![NPM](https://img.shields.io/npm/v/nigeria-phone-number-validator.svg)](https://www.npmjs.com/package/nigeria-phone-number-validator) [![Total Download](https://img.shields.io/npm/dt/nigeria-phone-number-validator.svg)](https://www.npmjs.com/package/nigeria-phone-number-validator)

A simple function that validates and returns common Nigerian Telco numbers.

# Installation

```bash
npm install nigeria-phone-number-validator
```

# Usage

```js
// Synchronous Usage
import { validatePhoneNumberSync } from "nigeria-phone-number-validator";

const result1 = validatePhoneNumberSync("08033445673");
console.log(result);
// { telco: "MTN", isValid: true }

const result2 = validatePhoneNumberSync("02033445673");
console.log(result2);
//   {
//     errors: [ "Phone number doesn't match a valid service provider" ],
//     isValid: false,
//   }
```

```js
// Asynchronous Usage
import { validatePhoneNumberAsync } from "nigeria-phone-number-validator";

validatePhoneNumberAsync("08033445673").then((result) => {
	console.log(result);
	// { telco: "MTN", isValid: true }
});

validatePhoneNumberAsync("02033445673").catch((result) => {
	console.log(result);
	//   {
	//     errors: [ "Phone number doesn't match a valid service provider" ],
	//     isValid: false,
	//   }
});

try {
	const result = await validatePhoneNumberAsync("08033445673");
	console.log(result);
	// { telco: "MTN", isValid: true }
} catch (error) {
	// react to error
}
```
