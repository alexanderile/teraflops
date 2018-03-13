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
var Header_1 = require("../components/Header/Header");
var Main_1 = require("../components/Main/Main");
var Forum_1 = require("./Forum/Forum");
var react_router_1 = require("react-router");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(Header_1.default, null),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: '/', exact: true, component: Main_1.default }),
                React.createElement(react_router_dom_1.Route, { path: '/forum:extension?', component: Forum_1.default })));
    };
    return App;
}(React.Component));
exports.default = react_router_1.withRouter(App);
//# sourceMappingURL=App.js.map