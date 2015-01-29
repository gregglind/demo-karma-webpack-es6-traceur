/*jshint forin:true, noarg:false, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, curly:false, browser:true,
  unused:true,
  indent:2, maxerr:50, devel:true, node:true, boss:true, white:true,
  globalstrict:true, nomen:false, newcap:true, esnext: true, moz: true  */

/*global require */

"use strict";


var setup = function () {
  var tagString = "<h2 id='result'>nothing yet</h2>";
  var range = document.createRange();
  var documentFragment = range.createContextualFragment(tagString);
  var e = document.querySelector("body");
  e.appendChild(documentFragment);
};


setup();
let A = require("./lib1");
let el = window.document.querySelector("#result");
el.style.fontSize="100px";
el.style.backgroundColor="red";
el.textContent = A.lib2.b;
