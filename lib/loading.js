"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stop = loadingStop;
exports.button = loadingButton;
exports.box = loadingBox;
exports.pill = loadingPill;
exports.skeleton = loadingSkeleton;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(unsafeText) {
  var safeText = (0, _jquery.default)('<div />').text(unsafeText).text();
  return safeText;
}

function loadingStop($element, callback) {
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

function loadingButton($el, text, style) {
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

function loadingBox($el, text, style, position) {
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

function loadingPill($el, text, style) {
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

function loadingSkeleton($el) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJlc2NhcGUiLCJ1bnNhZmVUZXh0Iiwic2FmZVRleHQiLCJ0ZXh0IiwibG9hZGluZ1N0b3AiLCIkZWxlbWVudCIsImNhbGxiYWNrIiwic2VsZWN0b3JzIiwidGltaW5nIiwiZmluZCIsImZhZGVPdXQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImxvYWRpbmdCdXR0b24iLCIkZWwiLCJzdHlsZSIsIkVycm9yIiwiYWRkQ2xhc3MiLCJlYWNoIiwiJHRoZUJ1dHRvbiIsImNsaWNrIiwiZGlzcGxheSIsImNzcyIsImxvYWRpbmdDb250ZW50cyIsImh0bWwiLCJsZW5ndGgiLCJwcmVwZW5kIiwibG9hZGluZ0JveCIsInBvc2l0aW9uIiwibG9hZGluZ1BpbGwiLCJsb2FkaW5nU2tlbGV0b24iLCJjb250ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLFVBQWhCLEVBQTRCO0FBQ3hCLE1BQU1DLFFBQVEsR0FBRyxxQkFBRSxTQUFGLEVBQWFDLElBQWIsQ0FBa0JGLFVBQWxCLEVBQThCRSxJQUE5QixFQUFqQjtBQUNBLFNBQU9ELFFBQVA7QUFDSDs7QUFFRCxTQUFTRSxXQUFULENBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBeUM7QUFDckMsTUFBTUMsU0FBUyxHQUFHLDZHQUFsQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxHQUFmO0FBRUFILEVBQUFBLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRixTQUFkLEVBQXlCRyxPQUF6QixDQUFpQ0YsTUFBakMsRUFBeUMsWUFBTTtBQUMzQ0gsSUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNGLFNBQWQsRUFBeUJJLE1BQXpCO0FBQ0FOLElBQUFBLFFBQVEsQ0FBQ08sV0FBVCxDQUFxQixpQkFBckI7O0FBQ0EsUUFBSSxPQUFPTixRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2hDLGFBQU9BLFFBQVEsRUFBZjtB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Q0FBUywwQkFBVCxFQUFxQ2dCLE1BQXJDLEtBQWdELENBQXBELEVBQXVEO0FBQ25ELFFBQU1GLGVBQWUsR0FBR3ZCLE1BQU0sa0lBQXFIRyxJQUFySCx5QkFBOUI7O0FBQ0EsUUFBSVksS0FBSixFQUFXO0FBQ1BELE1BQUFBLEdBQUcsQ0FBQ0csUUFBSix1QkFBNEJGLEtBQTVCO0FBQ0g7O0FBQ0RELElBQUFBLEdBQUcsQ0FBQ1ksT0FBSixDQUFZSCxlQUFaO0FBQ0gsR0FORCxNQU1PO0FBQ0gsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBTyxJQUFQO0FBQ0g7O0FBRUQsU0FBU08sZUFBVCxDQUF5QmhCLEdBQXpCLEVBQThCO0FBQzFCLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sVUFBTSxJQUFJRSxLQUFKLENBQVUsc0JBQVYsQ0FBTjtBQUNIOztBQUVERixFQUFBQSxHQUFHLENBQUNHLFFBQUosQ0FBYSxxQ0FBYjs7QUFDQSxNQUFJSCxHQUFHLENBQUNMLElBQUosQ0FBUyw4QkFBVCxFQUF5Q2dCLE1BQXpDLEtBQW9ELENBQXhELEVBQTJEO0FBQ3ZELFFBQU1NLFFBQVEsR0FBRyxpREFBakI7QUFDQSxXQUFPakIsR0FBRyxDQUFDWSxPQUFKLENBQVlLLFFBQVosQ0FBUDtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZnVuY3Rpb24gZXNjYXBlKHVuc2FmZVRleHQpIHtcbiAgICBjb25zdCBzYWZlVGV4dCA9ICQoJzxkaXYgLz4nKS50ZXh0KHVuc2FmZVRleHQpLnRleHQoKTtcbiAgICByZXR1cm4gc2FmZVRleHQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdTdG9wKCRlbGVtZW50LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9ICcuc2QtbG9hZGluZy1ib3gtd3JhcHBlciwgLnNkLWxvYWRpbmctcGlsbC13cmFwcGVyLCAuc2QtYnV0dG9uLWxvYWRpbmctd3JhcHBlciwgLnNkLWxvYWRpbmctc2tlbGV0b24td3JhcHBlcic7XG4gICAgY29uc3QgdGltaW5nID0gMTUwO1xuXG4gICAgJGVsZW1lbnQuZmluZChzZWxlY3RvcnMpLmZhZGVPdXQodGltaW5nLCAoKSA9PiB7XG4gICAgICAgICRlbGVtZW50LmZpbmQoc2VsZWN0b3JzKS5yZW1vdmUoKTtcbiAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3NkLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ0J1dHRvbigkZWwsIHRleHQsIHN0eWxlKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygnc2QtbG9hZGluZy1idXR0b24nKTtcbiAgICAkZWwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0ICR0aGVCdXR0b24gPSAkKHRoaXMpO1xuICAgICAgICAkdGhlQnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSAkdGhlQnV0dG9uLmNzcygnZGlzcGxheScpO1xuICAgICAgICAgICAgaWYgKChkaXNwbGF5ID09PSAnaW5saW5lLWJsb2NrJykgfHwgKGRpc3BsYXkgPT09ICdpbmxpbmUtZmxleCcpKSB7XG4gICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5hZGRDbGFzcygnbW9kLWxvYWRpbmctYnV0dG9uLWlubGluZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKGA8ZGl2IGNsYXNzPVwic2QtYnV0dG9uLWxvYWRpbmctd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJzZC1idXR0b24tbG9hZGluZ1wiPjwvZGl2PjwvZGl2PiR7dGV4dH1gKTtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLmh0bWwobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJHRoZUJ1dHRvbi5maW5kKCcuc2QtYnV0dG9uLWxvYWRpbmcnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoJzxkaXYgY2xhc3M9XCJzZC1idXR0b24tbG9hZGluZy13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInNkLWJ1dHRvbi1sb2FkaW5nXCI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5wcmVwZW5kKGxvYWRpbmdDb250ZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkdGhlQnV0dG9uLmFkZENsYXNzKCdzZC1sb2FkaW5nc3RhdGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdCb3goJGVsLCB0ZXh0LCBzdHlsZSwgcG9zaXRpb24pIHtcbiAgICBpZiAoISRlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgfVxuICAgIHRleHQgPSB0ZXh0IHx8ICcnO1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPyBgbW9kLWJveC0ke3Bvc2l0aW9ufWAgOiAnJztcblxuICAgICRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2QtbG9hZGluZy1ib3ggc2QtbG9hZGluZ3N0YXRlJyk7XG4gICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy5zZC1sb2FkaW5nLWJveC13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoYDxkaXYgY2xhc3M9XCJzZC1sb2FkaW5nLWJveC13cmFwcGVyICR7cG9zaXRpb259XCI+PGRpdiBjbGFzcz1cInNkLWJveC1sb2FkaW5nXCI+PC9kaXY+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2Rpdj5gKTtcbiAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkZWwucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nUGlsbCgkZWwsIHRleHQsIHN0eWxlKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyB0ZXh0IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygnc2QtbG9hZGluZy1waWxsIHNkLWxvYWRpbmdzdGF0ZScpO1xuICAgIGlmICgkZWwuZmluZCgnLnNkLWxvYWRpbmctcGlsbC13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInNkLWxvYWRpbmctcGlsbC13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInNkLWxvYWRpbmctcGlsbC1zaGFwZVwiPjxkaXYgY2xhc3M9XCJzZC1waWxsLWxvYWRpbmdcIj48L2Rpdj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvZGl2PjwvZGl2PmApO1xuICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICRlbC5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAgICAgfVxuICAgICAgICAkZWwucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdTa2VsZXRvbigkZWwpIHtcbiAgICBpZiAoISRlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKCdzZC1sb2FkaW5nLXNrZWxldG9uIHNkLWxvYWRpbmdzdGF0ZScpO1xuICAgIGlmICgkZWwuZmluZCgnLnNkLWxvYWRpbmctc2tlbGV0b24td3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBjb250ZW50cyA9ICc8ZGl2IGNsYXNzPVwic2QtbG9hZGluZy1za2VsZXRvbi13cmFwcGVyXCI+PC9kaXY+JztcbiAgICAgICAgcmV0dXJuICRlbC5wcmVwZW5kKGNvbnRlbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7XG4gICAgbG9hZGluZ1N0b3AgYXMgc3RvcCxcbiAgICBsb2FkaW5nQnV0dG9uIGFzIGJ1dHRvbixcbiAgICBsb2FkaW5nQm94IGFzIGJveCxcbiAgICBsb2FkaW5nUGlsbCBhcyBwaWxsLFxuICAgIGxvYWRpbmdTa2VsZXRvbiBhcyBza2VsZXRvblxufVxuIl19