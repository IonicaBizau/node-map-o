
# map-o

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/map-o.svg)](https://www.npmjs.com/package/map-o) [![Downloads](https://img.shields.io/npm/dt/map-o.svg)](https://www.npmjs.com/package/map-o) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Array-map like function for objects.

## :cloud: Installation

```sh
$ npm i --save map-o
```


## :clipboard: Example



```js
// Dependencies
const mapObject = require("map-o");

// Modify this object
console.log(mapObject({
    location: "Earth"
  , age: 10
}, (value, name) => {
    if (name === "location") {
        return "Location: " + value;
    }

    if (value === 10) {
        return 42;
    }
}));
// => { location: 'Location: Earth', age: 42 }

var obj = {
    two: 2
  , nine: 9
  , ten: 10
};

// Calculate the squares, but don't override the object
var squares = mapObject(obj, x => x * x, true);
console.log("input:", obj);
// => input: { two: 2, nine: 9, ten: 10 }

console.log("squares:", squares);
// => squares: { two: 4, nine: 81, ten: 100 }
```

## :memo: Documentation


### `mapObject(obj, fn, clone)`
Array-map like for objects.

#### Params
- **Object** `obj`: The input object.
- **Function** `fn`: A function returning the field values.
- **Boolean|Object** `clone`: If `true`, the input object will be cloned. If `clone` is an object, it will be used as target object.

#### Return
- **Object** The modified object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`compute-size`](https://github.com/IonicaBizau/compute-size#readme)—Helper tool for resizing the things.
 - [`emoji-name-map`](https://github.com/IonicaBizau/emoji-name-map#readme)—Name to unicode emoji mapping.
 - [`engine-builder`](https://github.com/IonicaBizau/engine-parser) (by jillix)—Engine composition parser.
 - [`engine-flow-types`](https://github.com/jillix/engine-flow-types#readme) (by jillix)—Low level library providing Engine flow types.
 - [`enny`](https://github.com/IonicaBizau/enny) (by jillix)—Generate Engine compositions from human-readable inputs.
 - [`packy`](https://github.com/IonicaBizau/packy#readme)—Set default fields in your package.json files.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
