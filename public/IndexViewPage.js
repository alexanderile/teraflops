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
var react_redux_1 = require("react-redux");
var App_1 = require("./app/components/App");
function list(state, action) {
    if (state === void 0) { state = []; }
    return [1, 2, 3];
}
var redux_1 = require("redux");
var store = redux_1.createStore(list);
var IndexViewPage = (function (_super) {
    __extends(IndexViewPage, _super);
    function IndexViewPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndexViewPage.prototype.render = function () {
        return React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(App_1.default, null)));
    };
    return IndexViewPage;
}(React.Component));
exports.default = IndexViewPage;
//# sourceMappingURL=IndexViewPage.js.map