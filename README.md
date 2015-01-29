
Goals:

1.  Built product is an es6 one page app.
3.  code coverage
4.  testing using `mocha`

Conclusion:

- `webpack` is awesome.

Solutions explored (Alternate Soltuions):

1.  compile first (using grunt)  WORKS, but tedious.


Use

```
npm install
npm run build  => build output, openable at app/index.html
npm test --log-level debug  => tests in firefox
```

Problems

- well, doesn't really give es6 as *output* anywhere
- coverage and tests are run on transpiled
- Promises


### Read More

- http://npm.taobao.org/package/istanbul-instrumenter-loader
- http://www.uxebu.com/blog/2014/11/get-real-es6-webpack/
- http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
- http://www.uxebu.com/blog/2014/11/get-real-es6-webpack/
