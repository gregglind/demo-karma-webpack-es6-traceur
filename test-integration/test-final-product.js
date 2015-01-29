/*jshint forin:true, noarg:false, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, curly:false, browser:true,
  unused:true,
  indent:2, maxerr:50, devel:true, node:true, boss:true, white:true,
  globalstrict:true, nomen:false, newcap:true, esnext: true, moz: true  */

/*global describe, require, it */

// assume the script has loaded in to the window
"use strict";

var expect = require("chai").expect;

() => {};  // es6 canary to show transpile works.

describe("Integration", function() {
  it('content is right', function() {
    let A = require("../src/lib1");
    let el = window.document.querySelector("#result");
    expect(el.textContent).to.equal(A.lib2.b);
    expect(el.style.fontSize).to.equal("100px");
  });
});
