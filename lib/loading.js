"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(unsafeText) {
  var safeText = (0, _jquery.default)('<div />').text(unsafeText).text();
  return safeText;
}

function stop($element, callback) {
  var selectors = '.sd-loading-box-wrapper, .sd-loading-pill-wrapper, .sd-button-loading-wrapper, .sd-loading-skeleton-wrapper';
  var timing = 150;
  $element.find(selectors).fadeOut(timing, function () {
    $element.find(selectors).remove();
    $element.removeClass('sd-loadingstate');

    if (typeof callback === 'function') {
      return callback();
    }

    return true;
  });
}

function button($el, text, style) {
  if (!$el) {
    throw new Error('no element passed in');
  }

  $el.addClass('sd-loading-button');
  $el.each(function () {
    var $theButton = (0, _jquery.default)(this);
    $theButton.click(function () {
      var display = $theButton.css('display');

      if (display === 'inline-block' || display === 'inline-flex') {
        $theButton.addClass('mod-loading-button-inline');
      }

      if (style) {
        $theButton.addClass("mod-loading-".concat(style));
      }

      if (text) {
        var loadingContents = escape("<div class=\"sd-button-loading-wrapper\"><div class=\"sd-button-loading\"></div></div>".concat(text));
        $theButton.html(loadingContents);
      } else if ($theButton.find('.sd-button-loading').length === 0) {
        var _loadingContents = escape('<div class="sd-button-loading-wrapper"><div class="sd-button-loading"></div></div>');

        $theButton.prepend(_loadingContents);
      }

      $theButton.addClass('sd-loadingstate');
    });
  });
  return true;
}

function box($el, text, style, position) {
  if (!$el) {
    throw new Error('no element passed in');
  }

  text = text || '';
  position = position ? "mod-box-".concat(position) : '';
  $el.each(function () {
    (0, _jquery.default)(this).addClass('sd-loading-box sd-loadingstate');

    if ((0, _jquery.default)(this).find('.sd-loading-box-wrapper').length === 0) {
      var loadingContents = escape("<div class=\"sd-loading-box-wrapper ".concat(position, "\"><div class=\"sd-box-loading\"></div><span>").concat(text, "</span></div>"));

      if (style) {
        (0, _jquery.default)(this).addClass("mod-loading-".concat(style));
      }

      $el.prepend(loadingContents);
    }

    ;
  });
  return true;
}

function pill($el, text, style) {
  if (!$el) {
    throw new Error('no element passed in');
  }

  if (!text) {
    throw new Error('no text passed in');
  }

  $el.addClass('sd-loading-pill sd-loadingstate');

  if ($el.find('.sd-loading-pill-wrapper').length === 0) {
    var loadingContents = escape("<div class=\"sd-loading-pill-wrapper\"><div class=\"sd-loading-pill-shape\"><div class=\"sd-pill-loading\"></div><span>".concat(text, "</span></div></div>"));

    if (style) {
      $el.addClass("mod-loading-".concat(style));
    }

    $el.prepend(loadingContents);
  } else {
    return false;
  }

  return true;
}

function skeleton($el) {
  if (!$el) {
    throw new Error('no element passed in');
  }

  $el.addClass('sd-loading-skeleton sd-loadingstate');

  if ($el.find('.sd-loading-skeleton-wrapper').length === 0) {
    var contents = '<div class="sd-loading-skeleton-wrapper"></div>';
    return $el.prepend(contents);
  }

  return true;
}

var _default = {
  stop: stop,
  button: button,
  box: box,
  pill: pill,
  skeleton: skeleton
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJlc2NhcGUiLCJ1bnNhZmVUZXh0Iiwic2FmZVRleHQiLCJ0ZXh0Iiwic3RvcCIsIiRlbGVtZW50IiwiY2FsbGJhY2siLCJzZWxlY3RvcnMiLCJ0aW1pbmciLCJmaW5kIiwiZmFkZU91dCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiYnV0dG9uIiwiJGVsIiwic3R5bGUiLCJFcnJvciIsImFkZENsYXNzIiwiZWFjaCIsIiR0aGVCdXR0b24iLCJjbGljayIsImRpc3BsYXkiLCJjc3MiLCJsb2FkaW5nQ29udGVudHMiLCJodG1sIiwibGVuZ3RoIiwicHJlcGVuZCIsImJveCIsInBvc2l0aW9uIiwicGlsbCIsInNrZWxldG9uIiwiY29udGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLFVBQWhCLEVBQTRCO0FBQ3hCLE1BQU1DLFFBQVEsR0FBRyxxQkFBRSxTQUFGLEVBQWFDLElBQWIsQ0FBa0JGLFVBQWxCLEVBQThCRSxJQUE5QixFQUFqQjtBQUNBLFNBQU9ELFFBQVA7QUFDSDs7QUFFRCxTQUFTRSxJQUFULENBQWNDLFFBQWQsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQzlCLE1BQU1DLFNBQVMsR0FBRyw2R0FBbEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsR0FBZjtBQUVBSCxFQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBY0YsU0FBZCxFQUF5QkcsT0FBekIsQ0FBaUNGLE1BQWpDLEVBQXlDLFlBQU07QUFDM0NILElBQUFBLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRixTQUFkLEVBQXlCSSxNQUF6QjtBQUNBTixJQUFBQSxRQUFRLENBQUNPLFdBQVQsQ0FBcUIsaUJBQXJCOztBQUNBLFFBQUksT0FBT04sUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNoQyxhQUFPQSxRQUFRLEVBQWY7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQVBEO0FBUUg7O0FBRUQs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Q25ELFFBQU1GLGVBQWUsR0FBR3ZCLE1BQU0sa0lBQXFIRyxJQUFySCx5QkFBOUI7O0FBQ0EsUUFBSVksS0FBSixFQUFXO0FBQ1BELE1BQUFBLEdBQUcsQ0FBQ0csUUFBSix1QkFBNEJGLEtBQTVCO0FBQ0g7O0FBQ0RELElBQUFBLEdBQUcsQ0FBQ1ksT0FBSixDQUFZSCxlQUFaO0FBQ0gsR0FORCxNQU1PO0FBQ0gsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBTyxJQUFQO0FBQ0g7O0FBRUQsU0FBU08sUUFBVCxDQUFrQmhCLEdBQWxCLEVBQXVCO0FBQ25CLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sVUFBTSxJQUFJRSxLQUFKLENBQVUsc0JBQVYsQ0FBTjtBQUNIOztBQUVERixFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYSxxQ0FBYjs7QUFDQSxNQUFJSCxHQUFHLENBQUNMLElBQUosQ0FBUyw4QkFBVCxFQUF5Q2dCLE1BQXpDLEtBQW9ELENBQXhELEVBQTJEO0FBQ3ZELFFBQU1NLFFBQVEsR0FBRyxpREFBakI7QUFDQSxXQUFPakIsR0FBRyxDQUFDWSxPQUFKLENBQVlLLFFBQVosQ0FBUDtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNIOztlQUVjO0FBQ1gzQixFQUFBQSxJQUFJLEVBQUpBLElBRFc7QUFFWFMsRUFBQUEsTUFBTSxFQUFOQSxNQUZXO0FBR1hjLEVBQUFBLEdBQUcsRUFBSEEsR0FIVztBQUlYRSxFQUFBQSxJQUFJLEVBQUpBLElBSlc7QUFLWEMsRUFBQUEsUUFBUSxFQUFSQTtBQUxXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5mdW5jdGlvbiBlc2NhcGUodW5zYWZlVGV4dCkge1xuICAgIGNvbnN0IHNhZmVUZXh0ID0gJCgnPGRpdiAvPicpLnRleHQodW5zYWZlVGV4dCkudGV4dCgpO1xuICAgIHJldHVybiBzYWZlVGV4dDtcbn1cblxuZnVuY3Rpb24gc3RvcCgkZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSAnLnNkLWxvYWRpbmctYm94LXdyYXBwZXIsIC5zZC1sb2FkaW5nLXBpbGwtd3JhcHBlciwgLnNkLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXIsIC5zZC1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXInO1xuICAgIGNvbnN0IHRpbWluZyA9IDE1MDtcblxuICAgICRlbGVtZW50LmZpbmQoc2VsZWN0b3JzKS5mYWRlT3V0KHRpbWluZywgKCkgPT4ge1xuICAgICAgICAkZWxlbWVudC5maW5kKHNlbGVjdG9ycykucmVtb3ZlKCk7XG4gICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCdzZC1sb2FkaW5nc3RhdGUnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbigkZWwsIHRleHQsIHN0eWxlKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygnc2QtbG9hZGluZy1idXR0b24nKTtcbiAgICAkZWwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICR0aGVCdXR0b24gPSAkKHRoaXMpO1xuICAgICAgICAkdGhlQnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSAkdGhlQnV0dG9uLmNzcygnZGlzcGxheScpO1xuICAgICAgICAgICAgaWYgKChkaXNwbGF5ID09PSAnaW5saW5lLWJsb2NrJykgfHwgKGRpc3BsYXkgPT09ICdpbmxpbmUtZmxleCcpKSB7XG4gICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5hZGRDbGFzcygnbW9kLWxvYWRpbmctYnV0dG9uLWlubGluZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKGA8ZGl2IGNsYXNzPVwic2QtYnV0dG9uLWxvYWRpbmctd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJzZC1idXR0b24tbG9hZGluZ1wiPjwvZGl2PjwvZGl2PiR7dGV4dH1gKTtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLmh0bWwobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJHRoZUJ1dHRvbi5maW5kKCcuc2QtYnV0dG9uLWxvYWRpbmcnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoJzxkaXYgY2xhc3M9XCJzZC1idXR0b24tbG9hZGluZy13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInNkLWJ1dHRvbi1sb2FkaW5nXCI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5wcmVwZW5kKGxvYWRpbmdDb250ZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkdGhlQnV0dG9uLmFkZENsYXNzKCdzZC1sb2FkaW5nc3RhdGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGJveCgkZWwsIHRleHQsIHN0eWxlLCBwb3NpdGlvbikge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG4gICAgdGV4dCA9IHRleHQgfHwgJyc7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbiA/IGBtb2QtYm94LSR7cG9zaXRpb259YCA6ICcnO1xuXG4gICAgJGVsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZC1sb2FkaW5nLWJveCBzZC1sb2FkaW5nc3RhdGUnKTtcbiAgICAgICAgaWYgKCQodGhpcykuZmluZCgnLnNkLWxvYWRpbmctYm94LXdyYXBwZXInKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInNkLWxvYWRpbmctYm94LXdyYXBwZXIgJHtwb3NpdGlvbn1cIj48ZGl2IGNsYXNzPVwic2QtYm94LWxvYWRpbmdcIj48L2Rpdj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvZGl2PmApO1xuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRlbC5wcmVwZW5kKGxvYWRpbmdDb250ZW50cyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHBpbGwoJGVsLCB0ZXh0LCBzdHlsZSkge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gdGV4dCBwYXNzZWQgaW4nKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3MoJ3NkLWxvYWRpbmctcGlsbCBzZC1sb2FkaW5nc3RhdGUnKTtcbiAgICBpZiAoJGVsLmZpbmQoJy5zZC1sb2FkaW5nLXBpbGwtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoYDxkaXYgY2xhc3M9XCJzZC1sb2FkaW5nLXBpbGwtd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJzZC1sb2FkaW5nLXBpbGwtc2hhcGVcIj48ZGl2IGNsYXNzPVwic2QtcGlsbC1sb2FkaW5nXCI+PC9kaXY+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2Rpdj48L2Rpdj5gKTtcbiAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgJGVsLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBza2VsZXRvbigkZWwpIHtcbiAgICBpZiAoISRlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKCdzZC1sb2FkaW5nLXNrZWxldG9uIHNkLWxvYWRpbmdzdGF0ZScpO1xuICAgIGlmICgkZWwuZmluZCgnLnNkLWxvYWRpbmctc2tlbGV0b24td3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBjb250ZW50cyA9ICc8ZGl2IGNsYXNzPVwic2QtbG9hZGluZy1za2VsZXRvbi13cmFwcGVyXCI+PC9kaXY+JztcbiAgICAgICAgcmV0dXJuICRlbC5wcmVwZW5kKGNvbnRlbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdG9wLFxuICAgIGJ1dHRvbixcbiAgICBib3gsXG4gICAgcGlsbCxcbiAgICBza2VsZXRvblxufVxuIl19