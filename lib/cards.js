"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SDCard =
/*#__PURE__*/
function () {
  function SDCard(options) {
    _classCallCheck(this, SDCard);

    this.root = (0, _jquery.default)(options.root);
    this.setUpDismiss();
  }

  _createClass(SDCard, [{
    key: "setUpDismiss",
    value: function setUpDismiss() {
      var _this = this;

      this.root.find('.js-sd-card-dismiss').click(function () {
        _this.root.addClass('dismissed');

        _this.root.one('transitionend', function () {
          _this.root.addClass('hide');

          _this.root.trigger('sdCard.dismissed');
        });
      });
    }
  }]);

  return SDCard;
}();

(0, _jquery.default)(function () {
  (0, _jquery.default)('.sd-card').each(function (index, el) {
    new SDCard({
      root: el
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvY2FyZHMuanMiXSwibmFtZXMiOlsiU0RDYXJkIiwib3B0aW9ucyIsInJvb3QiLCJzZXRVcERpc21pc3MiLCJmaW5kIiwiY2xpY2siLCJhZGRDbGFzcyIsIm9uZSIsInRyaWdnZXIiLCJlYWNoIiwiaW5kZXgiLCJlbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixTQUFLQyxJQUFMLEdBQVkscUJBQUVELE9BQU8sQ0FBQ0MsSUFBVixDQUFaO0FBQ0EsU0FBS0MsWUFBTDtBQUNIOzs7O21DQUVjO0FBQUE7O0FBQ1gsV0FBS0QsSUFBTCxDQUFVRSxJQUFWLENBQWUscUJBQWYsRUFBc0NDLEtBQXRDLENBQTRDLFlBQU07QUFDOUMsUUFBQSxLQUFJLENBQUNILElBQUwsQ0FBVUksUUFBVixDQUFtQixXQUFuQjs7QUFFQSxRQUFBLEtBQUksQ0FBQ0osSUFBTCxDQUFVSyxHQUFWLENBQWMsZUFBZCxFQUErQixZQUFNO0FBQ2pDLFVBQUEsS0FBSSxDQUFDTCxJQUFMLENBQVVJLFFBQVYsQ0FBbUIsTUFBbkI7O0FBRUEsVUFBQSxLQUFJLENBQUNKLElBQUwsQ0FBVU0sT0FBVixDQUFrQixrQkFBbEI7QUFDSCxTQUpEO0FBS0gsT0FSRDtBQVNIOzs7Ozs7QUFFTCxxQkFBRSxZQUFXO0FBQ1QsdUJBQUUsVUFBRixFQUFjQyxJQUFkLENBQW1CLFVBQUNDLEtBQUQsRUFBUUMsRUFBUixFQUFlO0FBQzlCLFFBQUlYLE1BQUosQ0FBVztBQUNQRSxNQUFBQSxJQUFJLEVBQUVTO0FBREMsS0FBWDtBQUdILEdBSkQ7QUFLSCxDQU5EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgU0RDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucm9vdCA9ICQob3B0aW9ucy5yb290KTtcbiAgICAgICAgdGhpcy5zZXRVcERpc21pc3MoKTtcbiAgICB9XG5cbiAgICBzZXRVcERpc21pc3MoKSB7XG4gICAgICAgIHRoaXMucm9vdC5maW5kKCcuanMtc2QtY2FyZC1kaXNtaXNzJykuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb290LmFkZENsYXNzKCdkaXNtaXNzZWQnKTtcblxuICAgICAgICAgICAgdGhpcy5yb290Lm9uZSgndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QuYWRkQ2xhc3MoJ2hpZGUnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucm9vdC50cmlnZ2VyKCdzZENhcmQuZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuJChmdW5jdGlvbigpIHtcbiAgICAkKCcuc2QtY2FyZCcpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICBuZXcgU0RDYXJkKHtcbiAgICAgICAgICAgIHJvb3Q6IGVsLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pXG4iXX0=