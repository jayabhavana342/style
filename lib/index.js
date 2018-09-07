"use strict";

var _Link = _interopRequireDefault(require("./Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.printMsg = function () {
  console.log("This is a message from the demo package");
};

window.TTAM_UI = {
  Link: _Link.default
};