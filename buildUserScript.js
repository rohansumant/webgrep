fs = require('fs')

const prefix = `// ==UserScript==
// @name         Grep
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Rohan Sumant
// @match        https://*/*

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

`;
 
const suffix = `(function() {
    'use strict';
    window.webgrep = webgrep;
    // Your code here...
})();
`; 

var content = '';

try {
  let data = fs.readFileSync('bundle.js', 'utf8');
  content = prefix + data + suffix;
  fs.writeFileSync('grep.user.js',content);
} catch(err) {
  console.log('Error building user script',err);
}

