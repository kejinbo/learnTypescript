"use strict";
var getPersonName = function (person) {
    console.log(person.name);
};
getPersonName({
    name: "tony",
    // sex: 'male' //对于直接传字面量时，ts会强校验
});
var User = /** @class */ (function () {
    function User() {
        this.name = "tony";
    }
    return User;
}());
var say = function (word) {
    return word;
};
