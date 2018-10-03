"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skeleton = exports.pill = exports.box = exports.button = exports.stop = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(unsafeText) {
  var safeText = (0, _jquery.default)('<div />').text(unsafeText).text();
  return safeText;
}

var stop = function stop($element, callback) {
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
};

exports.stop = stop;

var button = function button($el, text, style) {
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
};

exports.button = button;

var box = function box($el, text, style) {
  if (!$el) {
    throw new Error('no element passed in');
  }

  text = text || '';
  $el.each(function () {
    (0, _jquery.default)(this).addClass('sd-loading-box sd-loadingstate');

    if ((0, _jquery.default)(this).find('.sd-loading-box-wrapper').length === 0) {
      var loadingContents = escape("<div class=\"sd-loading-box-wrapper\"><div class=\"sd-box-loading\"></div><span>".concat(text, "</span></div>"));

      if (style) {
        (0, _jquery.default)(this).addClass("mod-loading-".concat(style));
      }

      $el.prepend(loadingContents);
    }

    ;
  });
  return true;
};

exports.box = box;

var pill = function pill($el, text, style) {
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
};

exports.pill = pill;

var skeleton = function skeleton($el) {
  if (!$el) {
    throw new Error('no element passed in');
  }

  $el.addClass('sd-loading-skeleton sd-loadingstate');

  if ($el.find('.sd-loading-skeleton-wrapper').length === 0) {
    var contents = '<div class="sd-loading-skeleton-wrapper"></div>';
    return $el.prepend(contents);
  }

  return true;
};

exports.skeleton = skeleton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJlc2NhcGUiLCJ1bnNhZmVUZXh0Iiwic2FmZVRleHQiLCJ0ZXh0Iiwic3RvcCIsIiRlbGVtZW50IiwiY2FsbGJhY2siLCJzZWxlY3RvcnMiLCJ0aW1pbmciLCJmaW5kIiwiZmFkZU91dCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiYnV0dG9uIiwiJGVsIiwic3R5bGUiLCJFcnJvciIsImFkZENsYXNzIiwiZWFjaCIsIiR0aGVCdXR0b24iLCJjbGljayIsImRpc3BsYXkiLCJjc3MiLCJsb2FkaW5nQ29udGVudHMiLCJodG1sIiwibGVuZ3RoIiwicHJlcGVuZCIsImJveCIsInBpbGwiLCJza2VsZXRvbiIsImNvbnRlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxVQUFoQixFQUE0QjtBQUN4QixNQUFNQyxRQUFRLEdBQUcscUJBQUUsU0FBRixFQUFhQyxJQUFiLENBQWtCRixVQUFsQixFQUE4QkUsSUFBOUIsRUFBakI7QUFDQSxTQUFPRCxRQUFQO0FBQ0g7O0FBRUQsSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQ2pDLE1BQU1DLFNBQVMsR0FBRyw2R0FBbEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsR0FBZjtBQUVBSCxFQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBY0YsU0FBZCxFQUF5QkcsT0FBekIsQ0FBaUNGLE1BQWpDLEVBQXlDLFlBQU07QUFDM0NILElBQUFBLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRixTQUFkLEVBQXlCSSxNQUF6QjtBQUNBTixJQUFBQSxRQUFRLENBQUNPLFdBQVQsQ0FBcUIsaUJBQXJCOztBQUNBLFFBQUksT0FBT04sUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNoQyxhQUFPQSxRQUFRLEVBQWY7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQVBEO0FBUUgsQ0Fa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QixNQUFNLGtJQUFxSEcsSUFBckgseUJBQTlCOztBQUNBLFFBQUlZLEtBQUosRUFBVztBQUNQRCxNQUFBQSxHQUFHLENBQUNHLFFBQUosdUJBQTRCRixLQUE1QjtBQUNIOztBQUNERCxJQUFBQSxHQUFHLENBQUNZLE9BQUosQ0FBWUgsZUFBWjtBQUNILEdBTkQsTUFNTztBQUNILFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNILENBbkJEOzs7O0FBcUJBLElBQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNmLEdBQUQsRUFBUztBQUN0QixNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFVBQU0sSUFBSUUsS0FBSixDQUFVLHNCQUFWLENBQU47QUFDSDs7QUFFREYsRUFBQUEsR0FBRyxDQUFDRyxRQUFKLENBQWEscUNBQWI7O0FBQ0EsTUFBSUgsR0FBRyxDQUFDTCxJQUFKLENBQVMsOEJBQVQsRUFBeUNnQixNQUF6QyxLQUFvRCxDQUF4RCxFQUEyRDtBQUN2RCxRQUFNSyxRQUFRLEdBQUcsaURBQWpCO0FBQ0EsV0FBT2hCLEdBQUcsQ0FBQ1ksT0FBSixDQUFZSSxRQUFaLENBQVA7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSCxDQVhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZnVuY3Rpb24gZXNjYXBlKHVuc2FmZVRleHQpIHtcbiAgICBjb25zdCBzYWZlVGV4dCA9ICQoJzxkaXYgLz4nKS50ZXh0KHVuc2FmZVRleHQpLnRleHQoKTtcbiAgICByZXR1cm4gc2FmZVRleHQ7XG59XG5cbmNvbnN0IHN0b3AgPSAoJGVsZW1lbnQsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gJy5zZC1sb2FkaW5nLWJveC13cmFwcGVyLCAuc2QtbG9hZGluZy1waWxsLXdyYXBwZXIsIC5zZC1idXR0b24tbG9hZGluZy13cmFwcGVyLCAuc2QtbG9hZGluZy1za2VsZXRvbi13cmFwcGVyJztcbiAgICBjb25zdCB0aW1pbmcgPSAxNTA7XG5cbiAgICAkZWxlbWVudC5maW5kKHNlbGVjdG9ycykuZmFkZU91dCh0aW1pbmcsICgpID0+IHtcbiAgICAgICAgJGVsZW1lbnQuZmluZChzZWxlY3RvcnMpLnJlbW92ZSgpO1xuICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygnc2QtbG9hZGluZ3N0YXRlJyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuXG5jb25zdCBidXR0b24gPSAoJGVsLCB0ZXh0LCBzdHlsZSkgPT4ge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3MoJ3NkLWxvYWRpbmctYnV0dG9uJyk7XG4gICAgJGVsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCAkdGhlQnV0dG9uID0gJCh0aGlzKTtcbiAgICAgICAgJHRoZUJ1dHRvbi5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gJHRoZUJ1dHRvbi5jc3MoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIGlmICgoZGlzcGxheSA9PT0gJ2lubGluZS1ibG9jaycpIHx8IChkaXNwbGF5ID09PSAnaW5saW5lLWZsZXgnKSkge1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uYWRkQ2xhc3MoJ21vZC1sb2FkaW5nLWJ1dHRvbi1pbmxpbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInNkLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwic2QtYnV0dG9uLWxvYWRpbmdcIj48L2Rpdj48L2Rpdj4ke3RleHR9YCk7XG4gICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5odG1sKGxvYWRpbmdDb250ZW50cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCR0aGVCdXR0b24uZmluZCgnLnNkLWJ1dHRvbi1sb2FkaW5nJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKCc8ZGl2IGNsYXNzPVwic2QtYnV0dG9uLWxvYWRpbmctd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJzZC1idXR0b24tbG9hZGluZ1wiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24ucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHRoZUJ1dHRvbi5hZGRDbGFzcygnc2QtbG9hZGluZ3N0YXRlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5jb25zdCBib3ggPSAoJGVsLCB0ZXh0LCBzdHlsZSkgPT4ge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG4gICAgdGV4dCA9IHRleHQgfHwgJyc7XG5cbiAgICAkZWwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NkLWxvYWRpbmctYm94IHNkLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCcuc2QtbG9hZGluZy1ib3gtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKGA8ZGl2IGNsYXNzPVwic2QtbG9hZGluZy1ib3gtd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJzZC1ib3gtbG9hZGluZ1wiPjwvZGl2PjxzcGFuPiR7dGV4dH08L3NwYW4+PC9kaXY+YCk7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKGBtb2QtbG9hZGluZy0ke3N0eWxlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGVsLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgcGlsbCA9ICgkZWwsIHRleHQsIHN0eWxlKSA9PiB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyB0ZXh0IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygnc2QtbG9hZGluZy1waWxsIHNkLWxvYWRpbmdzdGF0ZScpO1xuICAgIGlmICgkZWwuZmluZCgnLnNkLWxvYWRpbmctcGlsbC13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInNkLWxvYWRpbmctcGlsbC13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInNkLWxvYWRpbmctcGlsbC1zaGFwZVwiPjxkaXYgY2xhc3M9XCJzZC1waWxsLWxvYWRpbmdcIj48L2Rpdj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvZGl2PjwvZGl2PmApO1xuICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICRlbC5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAgICAgfVxuICAgICAgICAkZWwucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IHNrZWxldG9uID0gKCRlbCkgPT4ge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3MoJ3NkLWxvYWRpbmctc2tlbGV0b24gc2QtbG9hZGluZ3N0YXRlJyk7XG4gICAgaWYgKCRlbC5maW5kKCcuc2QtbG9hZGluZy1za2VsZXRvbi13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gJzxkaXYgY2xhc3M9XCJzZC1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXJcIj48L2Rpdj4nO1xuICAgICAgICByZXR1cm4gJGVsLnByZXBlbmQoY29udGVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHtcbiAgICBzdG9wLFxuICAgIGJ1dHRvbixcbiAgICBib3gsXG4gICAgcGlsbCxcbiAgICBza2VsZXRvblxufVxuIl19