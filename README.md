
# map-o

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/map-o.svg)](https://www.npmjs.com/package/map-o) [![Downloads](https://img.shields.io/npm/dt/map-o.svg)](https://www.npmjs.com/package/map-o)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`compute-size`](https://github.com/IonicaBizau/compute-size#readme)—Helper tool for resizing the things.
 - [`emoji-name-map`](https://github.com/IonicaBizau/emoji-name-map#readme)—Name to unicode emoji mapping.
 - [`engine-builder`](https://github.com/IonicaBizau/engine-parser) (by jillix)—Engine composition parser.
 - [`engine-flow-types`](https://github.com/jillix/engine-flow-types#readme) (by jillix)—Low level library providing Engine flow types.
 - [`enny`](https://github.com/IonicaBizau/enny) (by jillix)—Generate Engine compositions from human-readable inputs.
 - [`git-stats-html`](https://github.com/IonicaBizau/git-stats-html#readme)—Turn git-stats result into HTML output.
 - [`packy`](https://github.com/IonicaBizau/packy#readme)—Set default fields in your package.json files.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
