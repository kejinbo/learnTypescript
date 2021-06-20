/// <reference path="./namespace-components.ts" />
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Component.Header();
            new Component.Content();
            new Component.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
    // 泛型中的keyof 语法的使用
    var Teacher = /** @class */ (function () {
        function Teacher(info) {
            this.info = info;
        }
        Teacher.prototype.getInfo = function (key) {
            return this.info[key];
        };
        return Teacher;
    }());
    var t = new Teacher({
        name: "kbobo",
        age: 20,
        gender: "male"
    });
    var i = t.getInfo("age");
    console.log(i);
})(Home || (Home = {}));
