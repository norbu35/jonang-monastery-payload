"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsletter = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var render_1 = require("@react-email/render");
var components_1 = require("@react-email/components");
var Template = function (_a) {
    var contents = _a.contents;
    return ((0, jsx_runtime_1.jsx)(components_1.Html, { children: contents }));
};
function newsletter(data) {
    return (0, render_1.render)((0, jsx_runtime_1.jsx)(Template, __assign({}, data)));
}
exports.newsletter = newsletter;
