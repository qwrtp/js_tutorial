# Phrase object (with palindrome detector)

This is a sample NPM moduke created in [*Learn enough JavaScript to Be Dangerous*](https://www.learnenough.com/javasxript-tutorial) by Michael Hartl.

The module can be used as follows:

```
$ npm install --global qwrtp-palindrome
$ vi test.js
let Phrase = require("qwrtp-palindrome");
let napoleansLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleansLament.palindrome());
$ node test.js
true
```
