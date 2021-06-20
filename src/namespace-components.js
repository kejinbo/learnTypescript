var Component;
(function (Component) {
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement("div");
            elem.innerText = "我是 header";
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Component.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement("div");
            elem.innerText = "我是 content";
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Component.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement("div");
            elem.innerText = "我是 footer";
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Component.Footer = Footer;
})(Component || (Component = {}));
