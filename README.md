# Nigerian Phone Number Validator

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/shaolinmkz/nigeria-phone-number-validator/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/shaolinmkz/nigeria-phone-number-validator/tree/master) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![NPM](https://img.shields.io/npm/v/nigeria-phone-number-validator.svg)](https://www.npmjs.com/package/nigeria-phone-number-validator) [![Total Download](https://img.shields.io/npm/dt/nigeria-phone-number-validator.svg)](https://www.npmjs.com/package/nigeria-phone-number-validator)

A simple function that validates and returns common Nigerian Telco numbers.

# Installation

```sh
npm install nigeria-phone-number-validator
```

# OR

```html
<!-- Place script tag in root (CDN) -->
<script defer src="https://bundle.run/nigeria-phone-number-validator@1.0.0"></script>
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

# CDN USAGE

```js
// The methods are attached to the windows object
window
.nigeriaPhoneNumberValidator
.validatePhoneNumberAsync("08033445673").then((result) => {
	console.log(result);
	// { telco: "MTN", isValid: true }
});

window
.nigeriaPhoneNumberValidator
.validatePhoneNumberAsync("02033445673").catch((result) => {
	console.log(result);
	//   {
	//     errors: [ "Phone number doesn't match a valid service provider" ],
	//     isValid: false,
	//   }
});
```
