"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
};

var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this._onMouseEnter = _this._onMouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._onMouseLeave = _this._onMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      class: STATUS.NORMAL
    };
    return _this;
  }

  _createClass(Link, [{
    key: "_onMouseEnter",
    value: function _onMouseEnter() {
      this.setState({
        class: STATUS.HOVERED
      });
    }
  }, {
    key: "_onMouseLeave",
    value: function _onMouseLeave() {
      this.setState({
        class: STATUS.NORMAL
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("a", {
        className: this.state.class,
        href: this.props.page || '#',
        onMouseEnter: this._onMouseEnter,
        onMouseLeave: this._onMouseLeave
      }, this.props.children);
    }
  }]);

  return Link;
}(_react.default.Component);

Link.propTypes = {
  page: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = Link;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvTGluay5qc3giXSwibmFtZXMiOlsiU1RBVFVTIiwiSE9WRVJFRCIsIk5PUk1BTCIsIkxpbmsiLCJwcm9wcyIsIl9vbk1vdXNlRW50ZXIiLCJiaW5kIiwiX29uTW91c2VMZWF2ZSIsInN0YXRlIiwiY2xhc3MiLCJzZXRTdGF0ZSIsInBhZ2UiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLE9BQU8sRUFBRSxTQURJO0FBRWJDLEVBQUFBLE1BQU0sRUFBRTtBQUZLLENBQWY7O0lBS01DLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEVBQU1BLEtBQU47QUFFQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLHVEQUFyQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsdURBQXJCO0FBRUEsVUFBS0UsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLEtBQUssRUFBRVQsTUFBTSxDQUFDRTtBQURILEtBQWI7QUFOaUI7QUFTbEI7Ozs7b0NBRWU7QUFDZCxXQUFLUSxRQUFMLENBQWM7QUFBRUQsUUFBQUEsS0FBSyxFQUFFVCxNQUFNLENBQUNDO0FBQWhCLE9BQWQ7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS1MsUUFBTCxDQUFjO0FBQUVELFFBQUFBLEtBQUssRUFBRVQsTUFBTSxDQUFDRTtBQUFoQixPQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFDRSxRQUFBLFNBQVMsRUFBRSxLQUFLTSxLQUFMLENBQVdDLEtBRHhCO0FBRUUsUUFBQSxJQUFJLEVBQUUsS0FBS0wsS0FBTCxDQUFXTyxJQUFYLElBQW1CLEdBRjNCO0FBR0UsUUFBQSxZQUFZLEVBQUUsS0FBS04sYUFIckI7QUFJRSxRQUFBLFlBQVksRUFBRSxLQUFLRTtBQUpyQixTQU1HLEtBQUtILEtBQUwsQ0FBV1EsUUFOZCxDQURGO0FBVUQ7Ozs7RUEvQmdCQyxlQUFNQyxTOztBQWtDekJYLElBQUksQ0FBQ1ksU0FBTCxHQUFpQjtBQUNmSixFQUFBQSxJQUFJLEVBQUVLLG1CQUFVQyxNQUREO0FBRWZMLEVBQUFBLFFBQVEsRUFBRUksbUJBQVVFO0FBRkwsQ0FBakI7ZUFLZWYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBTVEFUVVMgPSB7XG4gIEhPVkVSRUQ6ICdob3ZlcmVkJyxcbiAgTk9STUFMOiAnbm9ybWFsJyxcbn07XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuX29uTW91c2VFbnRlciA9IHRoaXMuX29uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTW91c2VMZWF2ZSA9IHRoaXMuX29uTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsYXNzOiBTVEFUVVMuTk9STUFMLFxuICAgIH07XG4gIH1cblxuICBfb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbGFzczogU1RBVFVTLkhPVkVSRUQgfSk7XG4gIH1cblxuICBfb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbGFzczogU1RBVFVTLk5PUk1BTCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzfVxuICAgICAgICBocmVmPXt0aGlzLnByb3BzLnBhZ2UgfHwgJyMnfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuX29uTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLl9vbk1vdXNlTGVhdmV9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIHBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0=