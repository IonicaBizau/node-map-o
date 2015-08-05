// Dependencies
var Mapo = require("../lib");

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
