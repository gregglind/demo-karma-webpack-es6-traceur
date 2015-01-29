# ES6 Code, Weback Builds, 100% Test Coverage

## Try it!

```
npm install
npm run demo
```

## Goals:

1.  Built product is an es6 one page app.
2.  code coverage
3.  testing using `mocha`

## Conclusion:

- `webpack` is awesome.
- `karma` is awesome.

Solutions explored (Alternate Soltuions):

1.  transpile first (using grunt).

    - WORKS, but tedious.
    - very 'uncool' feeling.

2.  Node only testing, mocking dom and environment using [testdom](https://github.com/asbjornenge/testdom).

    - mocking all the things that `window` does is hard.  Using an actual window is much easier.


## Problems

- kind of slow (~5s per test suite).  (because Firefox startup is heavy).
- well, doesn't really give es6 as *output* anywhere.  Both the built product and what gets tested are _transpiled_.
- coverage and tests are run on transpiled
- Promises (unkown if it uses native)
- I don't really like the `istanbul` coverage page.

### Read More

- http://npm.taobao.org/package/istanbul-instrumenter-loader
- http://www.uxebu.com/blog/2014/11/get-real-es6-webpack/
- http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
- http://www.uxebu.com/blog/2014/11/get-real-es6-webpack/
