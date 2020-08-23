
![Cover Image](docs/images/cover.png)

[![Travis (.org)](https://img.shields.io/travis/oslllo/validator?label=Travis%20CI)](https://travis-ci.org/github/oslllo/validator)
[![npm](https://img.shields.io/npm/v/oslllo-validator)](https://www.npmjs.com/package/oslllo-validator)
[![Coverage Status](https://coveralls.io/repos/github/oslllo/validator/badge.svg?branch=master)](https://coveralls.io/github/oslllo/validator?branch=master)

## Documentation, Installation, and Usage Instructions

See the full installation and usage documentation [HERE](https://docs.oslllo.com/validator/master/).

## The Objective

Create an all in one Javascript validator for my application(s).

## The Problem / Why

I wanted an all in one JS validator.

### Usage Examples

#### Check if value is actual NaN

```js
const is = require("oslllo-validator");

is.actualNaN(NaN); // => True
is.actualNaN(null); // => False
is.actualNaN(undefined); // => False
```

#### Check if UUID

```js
const is = require("oslllo-validator");

is.UUID("A987FBC9-4BED-3078-CF07-9141BA07C9F3", 3); // => True
is.UUID("xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3", 3); // => False

```

---
