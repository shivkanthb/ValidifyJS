Validify JS
=========

### Generic form validation library in javascript
#### Can be used as both an npm module and also on the browser

## Installation
### For Node Module
	npm install validifyjs

### For browser use
	<script src=“validify.js”></script>

## Usage
### Browser
Add html attribute "data-validify" to the element to be validated.
The value of the attribute would decide what validation is to be done.

####Example:
<input type="text" data-validify="email" />
This ensures email validation on this input field, by calling isEmail when submitting the form by calling validateForm(formElements).
Similary data-validify="html" maps to isHtml() method and so on.
Individual methods can also be called, and the regex patterns can also be overridden.

####Example:
isEmail("hariv2992@gmail.com") or isEmail("hariv2992@gmail.com", /(<([^>]+)>)/ig) (Although why use this particular regex is beyond me :P)

### npm module
Individual methods and validateForm(formElements) can be called for validation, as mentioned in the case for the browser.


Other methods:
* isEmpty()
* isZipCode() (only for codes in the US)
* isMDDYYYYDate()
* isDDMMYYYYDate()
* isHtml()
* isHexColor()
* isNumber()
* isPositive()
* isNegative()
* isIpv4()
* isIPv6()
* and more.

## Tests
 npm test
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.
## Release History
* 0.1.0 Initial release

## Developers
* Hari
* Shivkanth