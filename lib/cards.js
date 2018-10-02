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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvY2FyZHMuanMiXSwibmFtZXMiOlsiVFRBTUNhcmQiLCJvcHRpb25zIiwicm9vdCIsInNldFVwRGlzbWlzcyIsImZpbmQiLCJjbGljayIsImFkZENsYXNzIiwib25lIiwidHJpZ2dlciIsImVhY2giLCJpbmRleCIsImVsIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNGLG9CQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLFNBQUtDLElBQUwsR0FBWSxxQkFBRUQsT0FBTyxDQUFDQyxJQUFWLENBQVo7QUFDQSxTQUFLQyxZQUFMO0FBQ0g7Ozs7bUNBRWM7QUFBQTs7QUFDWCxXQUFLRCxJQUFMLENBQVVFLElBQVYsQ0FBZSx1QkFBZixFQUF3Q0MsS0FBeEMsQ0FBOEMsWUFBTTtBQUNoRCxRQUFBLEtBQUksQ0FBQ0gsSUFBTCxDQUFVSSxRQUFWLENBQW1CLFdBQW5COztBQUVBLFFBQUEsS0FBSSxDQUFDSixJQUFMLENBQVVLLEdBQVYsQ0FBYyxlQUFkLEVBQStCLFlBQU07QUFDakMsVUFBQSxLQUFJLENBQUNMLElBQUwsQ0FBVUksUUFBVixDQUFtQixNQUFuQjs7QUFFQSxVQUFBLEtBQUksQ0FBQ0osSUFBTCxDQUFVTSxPQUFWLENBQWtCLG9CQUFsQjtBQUNILFNBSkQ7QUFLSCxPQVJEO0FBU0g7Ozs7OztBQUVMLHFCQUFFLFlBQVc7QUFDVCx1QkFBRSxZQUFGLEVBQWdCQyxJQUFoQixDQUFxQixVQUFDQyxLQUFELEVBQVFDLEVBQVIsRUFBZTtBQUNoQyxRQUFJWCxRQUFKLENBQWE7QUFDVEUsTUFBQUEsSUFBSSxFQUFFUztBQURHLEtBQWI7QUFHSCxHQUpEO0FBS0gsQ0FORCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIFRUQU1DYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucm9vdCA9ICQob3B0aW9ucy5yb290KTtcbiAgICAgICAgdGhpcy5zZXRVcERpc21pc3MoKTtcbiAgICB9XG5cbiAgICBzZXRVcERpc21pc3MoKSB7XG4gICAgICAgIHRoaXMucm9vdC5maW5kKCcuanMtdHRhbS1jYXJkLWRpc21pc3MnKS5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJvb3QuYWRkQ2xhc3MoJ2Rpc21pc3NlZCcpO1xuXG4gICAgICAgICAgICB0aGlzLnJvb3Qub25lKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdC5hZGRDbGFzcygnaGlkZScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yb290LnRyaWdnZXIoJ3R0YW1DYXJkLmRpc21pc3NlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLnR0YW0tY2FyZCcpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICBuZXcgVFRBTUNhcmQoe1xuICAgICAgICAgICAgcm9vdDogZWwsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSlcblxuXG4iXX0=