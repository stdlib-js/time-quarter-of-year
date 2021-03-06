<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# quarterOfYear

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine the quarter of the year.

<section class="installation">

## Installation

```bash
npm install @stdlib/time-quarter-of-year
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var quarterOfYear = require( '@stdlib/time-quarter-of-year' );
```

#### quarterOfYear( \[month] )

Returns the quarter of the year.

```javascript
var q = quarterOfYear();
// returns <number>
```

By default, the function returns the quarter of the year for the current month in the current year (according to local time). To determine the quarter for a particular month, provide either a month or a [`Date`][date-object] object.

```javascript
var q = quarterOfYear( new Date() );
// returns <number>

q = quarterOfYear( 4 );
// returns 2
```

A `month` may be either a month's integer value, three letter abbreviation, or full name (case insensitive).

```javascript
var q = quarterOfYear( 4 );
// returns 2

q = quarterOfYear( 'April' );
// returns 2

q = quarterOfYear( 'apr' );
// returns 2
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var quarterOfYear = require( '@stdlib/time-quarter-of-year' );

var months;
var q;
var i;

months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

for ( i = 0; i < months.length; i++ ) {
    q = quarterOfYear( months[ i ] );
    console.log( 'The month of %s is in Q%d.', months[ i ], q );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/time-quarter-of-year
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: quarter-of-year [options] [month]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ quarter-of-year
<number>
```

For a specific month,

```bash
$ quarter-of-year 4
2
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/time/day-of-year`][@stdlib/time/day-of-year]</span><span class="delimiter">: </span><span class="description">determine the day of the year.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/time-quarter-of-year.svg
[npm-url]: https://npmjs.org/package/@stdlib/time-quarter-of-year

[test-image]: https://github.com/stdlib-js/time-quarter-of-year/actions/workflows/test.yml/badge.svg?branch=v0.0.9
[test-url]: https://github.com/stdlib-js/time-quarter-of-year/actions/workflows/test.yml?query=branch:v0.0.9

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/time-quarter-of-year/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/time-quarter-of-year?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/time-quarter-of-year.svg
[dependencies-url]: https://david-dm.org/stdlib-js/time-quarter-of-year/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/time-quarter-of-year/tree/deno
[umd-url]: https://github.com/stdlib-js/time-quarter-of-year/tree/umd
[esm-url]: https://github.com/stdlib-js/time-quarter-of-year/tree/esm
[branches-url]: https://github.com/stdlib-js/time-quarter-of-year/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/time-quarter-of-year/main/LICENSE

[date-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

<!-- <related-links> -->

[@stdlib/time/day-of-year]: https://github.com/stdlib-js/time-day-of-year

<!-- </related-links> -->

</section>

<!-- /.links -->
