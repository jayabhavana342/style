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