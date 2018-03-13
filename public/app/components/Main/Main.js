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
require("./Main.sass");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return React.createElement("div", { className: 'Main' },
            React.createElement("div", { className: "Main__heading" },
                React.createElement("span", null, "Crimson")),
            React.createElement("div", { className: "Main__box-left-top" }, "1123"),
            React.createElement("div", { className: "Main__box-right-top" }, "1123123123"));
    };
    return Main;
}(React.Component));
exports.default = Main;
//# sourceMappingURL=Main.js.map