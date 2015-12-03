# map-o [![Support this project][donate-now]][paypal-donations]

Array-map like function for objects.

## Installation

```sh
$ npm i --save map-o
```

## Example

```js
// Dependencies
var Mapo = require("map-o");

// Modify this object
console.log(Mapo({
    location: "Earth"
  , age: 10
}, function (name, value) {
    if (name === "location") {
        return "Location: " + value;
    }

    if (value === 10) {
        return 42;
    }
}));
// => { location: 'Location: Earth', age: 42 }
```

## Documentation

### `Mapo(obj, fn, clone)`
Array-map like for objects.

#### Params
- **Object** `obj`: The input object.
- **Function** `fn`: A function returning the field values.
- **Boolean** `clone`: If `true`, the input object will be cloned, so the original object will not be changed.

#### Return
- **Object** The modified object.

### `proto()`
Appends the `map` method to the `Object` prototype.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`emojic`](https://github.com/IonicaBizau/emojic#readme)

 - [`enny`](https://github.com/IonicaBizau/enny) by jillix

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md