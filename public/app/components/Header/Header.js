"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Header.sass");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return React.createElement("div", { className: 'Header' },
            React.createElement("nav", { className: 'HeaderMenu' },
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: '/', className: 'HeaderMenu__link', activeClassName: 'HeaderMenu__link--active' }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),
                React.createElement(react_router_dom_1.NavLink, { exact: true, to: '/forum', className: 'HeaderMenu__link', activeClassName: 'HeaderMenu__link--active' }, "\u0424\u043E\u0440\u0443\u043C")));
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=Header.js.map