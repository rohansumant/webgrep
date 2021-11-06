// ==UserScript==
// @name         Grep
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @require      https://raw.githubusercontent.com/rohansumant/webgrep/mainline/Q.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

function main() {
    function grep(pattern) {
        console.log('searching for', pattern);
    }
    window.grep = grep;
}

(function() {
    'use strict';
    window.onload = main();
    // Your code here...
})();
