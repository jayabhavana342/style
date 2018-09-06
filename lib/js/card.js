"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TTAMCard =
/*#__PURE__*/
function () {
  function TTAMCard(options) {
    _classCallCheck(this, TTAMCard);

    this.root = (0, _jquery.default)(options.root);
    this.setUpDismiss();
  }

  _createClass(TTAMCard, [{
    key: "setUpDismiss",
    value: function setUpDismiss() {
      var _this = this;

      this.root.find('.js-ttam-card-dismiss').click(function () {
        _this.root.addClass('dismissed');

        _this.root.one('transitionend', function () {
          _this.root.addClass('hide');

          _this.root.trigger('ttamCard.dismissed');
        });
      });
    }
  }]);

  return TTAMCard;
}();

(0, _jquery.default)(function () {
  (0, _jquery.default)('.ttam-card').each(function (index, el) {
    new TTAMCard({
      root: el
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvanMvY2FyZC5qcyJdLCJuYW1lcyI6WyJUVEFNQ2FyZCIsIm9wdGlvbnMiLCJyb290Iiwic2V0VXBEaXNtaXNzIiwiZmluZCIsImNsaWNrIiwiYWRkQ2xhc3MiLCJvbmUiLCJ0cmlnZ2VyIiwiZWFjaCIsImluZGV4IiwiZWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0Ysb0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsU0FBS0MsSUFBTCxHQUFZLHFCQUFFRCxPQUFPLENBQUNDLElBQVYsQ0FBWjtBQUNBLFNBQUtDLFlBQUw7QUFDSDs7OzttQ0FFYztBQUFBOztBQUNYLFdBQUtELElBQUwsQ0FBVUUsSUFBVixDQUFlLHVCQUFmLEVBQXdDQyxLQUF4QyxDQUE4QyxZQUFNO0FBQ2hELFFBQUEsS0FBSSxDQUFDSCxJQUFMLENBQVVJLFFBQVYsQ0FBbUIsV0FBbkI7O0FBRUEsUUFBQSxLQUFJLENBQUNKLElBQUwsQ0FBVUssR0FBVixDQUFjLGVBQWQsRUFBK0IsWUFBTTtBQUNqQyxVQUFBLEtBQUksQ0FBQ0wsSUFBTCxDQUFVSSxRQUFWLENBQW1CLE1BQW5COztBQUVBLFVBQUEsS0FBSSxDQUFDSixJQUFMLENBQVVNLE9BQVYsQ0FBa0Isb0JBQWxCO0FBQ0gsU0FKRDtBQUtILE9BUkQ7QUFTSDs7Ozs7O0FBRUwscUJBQUUsWUFBVztBQUNULHVCQUFFLFlBQUYsRUFBZ0JDLElBQWhCLENBQXFCLFVBQUNDLEtBQUQsRUFBUUMsRUFBUixFQUFlO0FBQ2hDLFFBQUlYLFFBQUosQ0FBYTtBQUNURSxNQUFBQSxJQUFJLEVBQUVTO0FBREcsS0FBYjtBQUdILEdBSkQ7QUFLSCxDQU5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgVFRBTUNhcmQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yb290ID0gJChvcHRpb25zLnJvb3QpO1xuICAgICAgICB0aGlzLnNldFVwRGlzbWlzcygpO1xuICAgIH1cblxuICAgIHNldFVwRGlzbWlzcygpIHtcbiAgICAgICAgdGhpcy5yb290LmZpbmQoJy5qcy10dGFtLWNhcmQtZGlzbWlzcycpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5hZGRDbGFzcygnZGlzbWlzc2VkJyk7XG5cbiAgICAgICAgICAgIHRoaXMucm9vdC5vbmUoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290LmFkZENsYXNzKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QudHJpZ2dlcigndHRhbUNhcmQuZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuJChmdW5jdGlvbigpIHtcbiAgICAkKCcudHRhbS1jYXJkJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XG4gICAgICAgIG5ldyBUVEFNQ2FyZCh7XG4gICAgICAgICAgICByb290OiBlbCxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KVxuXG5cbiJdfQ==