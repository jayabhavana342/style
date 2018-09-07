"use strict";

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../Link"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Link tests', function () {
  it('Link changes the class when hovered', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Link.default, {
      page: "http://www.facebook.com"
    }, "Facebook"));

    var tree = component.toJSON();
    expect(tree.type).toBe('a'); // manually trigger the callback

    tree.props.onMouseEnter(); // re-rendering

    tree = component.toJSON();
    expect(tree.props.className).toBe('hovered'); // manually trigger the callback

    tree.props.onMouseLeave(); // re-rendering

    tree = component.toJSON();
    expect(tree.props.className).toBe('normal');
  });
});