/*jshint forin:true, noarg:false, noempty:true, eqeqeq:true, bitwise:true,
  strict:true, undef:true, curly:false, browser:true,
  unused:true,
  indent:2, maxerr:50, devel:true, node:true, boss:true, white:true,
  globalstrict:true, nomen:false, newcap:true, esnext: false, moz: false  */

"use strict";

module.exports = {
	entry: {
        index:  "./src/main.js"
	},
	output: {
	    path: __dirname + "/app",
	    filename: "[name].js"
	},
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { // << traceur *after* instrumenting
              test: /\.js$/,
              exclude: /(node_modules|bower_components)\//,
              loader: 'traceur'
            },
        ]
    },
    resolve : {
    	// relative to 'entry' above
    }
};
