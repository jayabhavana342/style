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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvanMvdHRhbV9jYXJkLmpzIl0sIm5hbWVzIjpbIlRUQU1DYXJkIiwib3B0aW9ucyIsInJvb3QiLCJzZXRVcERpc21pc3MiLCJmaW5kIiwiY2xpY2siLCJhZGRDbGFzcyIsIm9uZSIsInRyaWdnZXIiLCJlYWNoIiwiaW5kZXgiLCJlbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDRixvQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixTQUFLQyxJQUFMLEdBQVkscUJBQUVELE9BQU8sQ0FBQ0MsSUFBVixDQUFaO0FBQ0EsU0FBS0MsWUFBTDtBQUNIOzs7O21DQUVjO0FBQUE7O0FBQ1gsV0FBS0QsSUFBTCxDQUFVRSxJQUFWLENBQWUsdUJBQWYsRUFBd0NDLEtBQXhDLENBQThDLFlBQU07QUFDaEQsUUFBQSxLQUFJLENBQUNILElBQUwsQ0FBVUksUUFBVixDQUFtQixXQUFuQjs7QUFFQSxRQUFBLEtBQUksQ0FBQ0osSUFBTCxDQUFVSyxHQUFWLENBQWMsZUFBZCxFQUErQixZQUFNO0FBQ2pDLFVBQUEsS0FBSSxDQUFDTCxJQUFMLENBQVVJLFFBQVYsQ0FBbUIsTUFBbkI7O0FBRUEsVUFBQSxLQUFJLENBQUNKLElBQUwsQ0FBVU0sT0FBVixDQUFrQixvQkFBbEI7QUFDSCxTQUpEO0FBS0gsT0FSRDtBQVNIOzs7Ozs7QUFFTCxxQkFBRSxZQUFXO0FBQ1QsdUJBQUUsWUFBRixFQUFnQkMsSUFBaEIsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFRQyxFQUFSLEVBQWU7QUFDaEMsUUFBSVgsUUFBSixDQUFhO0FBQ1RFLE1BQUFBLElBQUksRUFBRVM7QUFERyxLQUFiO0FBR0gsR0FKRDtBQUtILENBTkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBUVEFNQ2FyZCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnJvb3QgPSAkKG9wdGlvbnMucm9vdCk7XG4gICAgICAgIHRoaXMuc2V0VXBEaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgc2V0VXBEaXNtaXNzKCkge1xuICAgICAgICB0aGlzLnJvb3QuZmluZCgnLmpzLXR0YW0tY2FyZC1kaXNtaXNzJykuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb290LmFkZENsYXNzKCdkaXNtaXNzZWQnKTtcblxuICAgICAgICAgICAgdGhpcy5yb290Lm9uZSgndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QuYWRkQ2xhc3MoJ2hpZGUnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucm9vdC50cmlnZ2VyKCd0dGFtQ2FyZC5kaXNtaXNzZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4kKGZ1bmN0aW9uKCkge1xuICAgICQoJy50dGFtLWNhcmQnKS5lYWNoKChpbmRleCwgZWwpID0+IHtcbiAgICAgICAgbmV3IFRUQU1DYXJkKHtcbiAgICAgICAgICAgIHJvb3Q6IGVsLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pXG5cblxuIl19