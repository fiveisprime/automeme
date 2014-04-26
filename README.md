AutoMeme [![Build Status](https://travis-ci.org/fiveisprime/automeme.svg?branch=master)](https://travis-ci.org/fiveisprime/automeme) [![NPM version](https://badge.fury.io/js/automeme.svg)](http://badge.fury.io/js/automeme)
========

Module for working with the [automeme](http://api.automeme.net) API.

# Usage

Accepts a return type and count which default to a single meme in text format.
Return type options include:

    'text'
    'html'
    'text.json' - Returns an array of strings.
    'html.json' - Returns an array of HTML safe strings.

Count can be anywhere from 1 to 80; defaults to 1.

---

Get a single meme in text format:

```js
var automeme = require('automeme');

automeme.getMeme(function(err, meme) {
  if (err) return console.error(err);
  console.log(meme);
});
```

OR

```js
var automeme = require('automeme');

automeme.getMeme()
  .then(console.log)
  .fail(console.error);
```

Get your meme in HTML format:

```js
var automeme = require('automeme');

automeme.getMeme('html', 1, function(err, meme) {
  if (err) return console.error(err);
  console.log(meme);
});
```

OR

```js
var automeme = require('automeme');

automeme.getMeme('html')
  .then(console.log)
  .fail(console.error);
```

Get a bunch of memes in a JSON array:

```js
var automeme = require('automeme');

automeme.getMeme('html.json', 50, function(err, meme) {
  if (err) return console.error(err);
  console.log(meme);
});
```

OR

```js
var automeme = require('automeme');

automeme.getMeme('html.json', 50)
  .then(console.log)
  .fail(console.error);
```

# Tests

Run the unit tests using `make test` or `npm test`. Generate a coverage report
by running `make coverage` - this requires that you install `istanbul` globally.

# License

The MIT License (MIT)

Copyright (c) 2013 Matt Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
