<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

# map-o [![Donate now][donate-now]][paypal-donations]

Array-map like function for objects.

## Installation

```sh
$ npm i map-o
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

## License
[KINDLY][license] © [Ionică Bizău][website]–The [LICENSE](/LICENSE) file contains
a copy of the license.

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[contributing]: /CONTRIBUTING.md
[website]: http://ionicabizau.net
[docs]: /DOCUMENTATION.md
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
[donate-now]: http://i.imgur.com/jioicaN.png