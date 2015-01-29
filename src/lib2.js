/*jshint forin:true, noarg:false, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, curly:false, browser:true,
  unused:true,
  indent:2, maxerr:50, devel:true, node:true, boss:true, white:true,
  globalstrict:true, nomen:false, newcap:true, esnext: true, moz: true  */

/*global exports */

"use strict";


let uncalled_function = () => {
  let { c } = {c: 1 + 2 + 4};
  return c;
};

let string = 'ES6 Forever.  (or at least until es7)';
exports.b = string;
