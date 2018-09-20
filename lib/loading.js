"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stop = stop;
exports.button = button;
exports.box = box;
exports.pill = pill;
exports.skeleton = skeleton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJlc2NhcGUiLCJ1bnNhZmVUZXh0Iiwic2FmZVRleHQiLCJ0ZXh0Iiwic3RvcCIsIiRlbGVtZW50IiwiY2FsbGJhY2siLCJzZWxlY3RvcnMiLCJ0aW1pbmciLCJmaW5kIiwiZmFkZU91dCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiYnV0dG9uIiwiJGVsIiwic3R5bGUiLCJFcnJvciIsImFkZENsYXNzIiwiZWFjaCIsIiR0aGVCdXR0b24iLCJjbGljayIsImRpc3BsYXkiLCJjc3MiLCJsb2FkaW5nQ29udGVudHMiLCJodG1sIiwibGVuZ3RoIiwicHJlcGVuZCIsImJveCIsInBvc2l0aW9uIiwicGlsbCIsInNrZWxldG9uIiwiY29udGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxVQUFoQixFQUE0QjtBQUN4QixNQUFNQyxRQUFRLEdBQUcscUJBQUUsU0FBRixFQUFhQyxJQUFiLENBQWtCRixVQUFsQixFQUE4QkUsSUFBOUIsRUFBakI7QUFDQSxTQUFPRCxRQUFQO0FBQ0g7O0FBRUQsU0FBU0UsSUFBVCxDQUFjQyxRQUFkLEVBQXdCQyxRQUF4QixFQUFrQztBQUM5QixNQUFNQyxTQUFTLEdBQUcsNkdBQWxCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFFQUgsRUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNGLFNBQWQsRUFBeUJHLE9BQXpCLENBQWlDRixNQUFqQyxFQUF5QyxZQUFNO0FBQzNDSCxJQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBY0YsU0FBZCxFQUF5QkksTUFBekI7QUFDQU4sSUFBQUEsUUFBUSxDQUFDTyxXQUFULENBQXFCLGlCQUFyQjs7QUFDQSxRQUFJLE9BQU9OLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDaEMsYUFBT0EsUUFBUSxFQUFmO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0FQRDtBQVFIOztBQUVELFNBQVNPLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCWCxJQUFyQixFQUEyQlksS0FBM0IsRUFBa0M7QUFDOUIsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDTixVQUFNLElBQUlFLEtBQUosQ0FBVSxzQkFBVixDQUFOO0FBQ0g7O0FBRURGLEVBQUFBLEdBQUcsQ0FBQ0csUUFBSixDQUFhLG1CQUFiO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLFlBQVk7QUFDakIsUUFBTUMsVUFBVSxHQUFHLHFCQUFFLElBQUYsQ0FBbkI7QUFDQUEsSUFBQUEsVUFBVSxDQUFDQyxLQUFYLENBQWlCLFlBQU07QUFDbkIsVUFBTUMsT0FBTyxHQUFHRixVQUFVLENBQUNHLEdBQVgsQ0FBZSxTQUFmLENBQWhCOztBQUNBLFVBQUtELE9BQU8sS0FBSyxjQUFiLElBQWlDQSxPQUFPLEtBQUssYUFBakQsRUFBaUU7QUFDN0RGLFFBQUFBLFVBQVUsQ0FBQ0YsUUFBWCxDQUFvQiwyQkFBcEI7QUFDSDs7QUFDRCxVQUFJRixLQUFKLEVBQVc7QUFDUEksUUFBQUEsVUFBVSxDQUFDRixRQUFYLHVCQUFtQ0YsS0FBbkM7QUFDSDs7QUFDRCxVQUFJWixJQUFKLEVBQVU7QUFDTixZQUFNb0IsZUFBZSxHQUFHdkIsTUFBTSxpR0FBc0ZHLElBQXRGLEVBQTlCO0FBQ0FnQixRQUFBQSxVQUFVLENBQUNLLElBQVgsQ0FBZ0JELGVBQWhCO0FBQ0gsT0FIRCxNQUdPLElBQUlKLFVBQVUsQ0FBQ1YsSUFBWCxDQUFnQixvQkFBaEIsRUFBc0NnQixNQUF0QyxLQUFpRCxDQUFyRCxFQUF3RDtBQUMzRCxZQUFNRixnQkFBZSxHQUFHdkIsTUFBTSxDQUFDLG9GQUFELENBQTlCOztBQUNBbUIsUUFBQUEsVUFBVSxDQUFDTyxPQUFYLENBQW1CSCxnQkFBbkI7QUFDSDs7QUFDREosTUFBQUEsVUFBVSxDQUFDRixRQUFYLENBQW9CLGlCQUFwQjtBQUNILEtBaEJEO0FBaUJILEdBbkJEO0FBb0JBLFNBQU8sSUFBUDtBQUNIOztBQUVELFNBQVNVLEdBQVQsQ0FBYWIsR0FBYixFQUFrQlgsSUFBbEIsRUFBd0JZLEtBQXhCLEVBQStCYSxRQUEvQixFQUF5QztBQUNyQyxNQUFJLENBQUNkLEdBQUwsRUFBVTtBQUNOLFVBQU0sSUFBSUUsS0FBSixDQUFVLHNCQUFWLENBQU47QUFDSDs7QUFDRGIsRUFBQUEsSUFBSSxHQUFHQSxJQUFJLElBQUksRUFBZjtBQUNBeUIsRUFBQUEsUUFBUSxHQUFHQSxRQUFRLHFCQUFjQSxRQUFkLElBQTJCLEVBQTlDO0FBRUFkLEVBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLFlBQVk7QUFDakIseUJBQUUsSUFBRixFQUFRRCxRQUFSLENBQWlCLGdDQUFqQjs7QUFDQSxRQUFJLHFCQUFFLElBQUYsRUFBUVIsSUFBUixDQUFhLHlCQUFiLEVBQXdDZ0IsTUFBeEMsS0FBbUQsQ0FBdkQsRUFBMEQ7QUFDdEQsVUFBTUYsZUFBZSxHQUFHdkIsTUFBTSwrQ0FBdUM0QixRQUF2QywwREFBNEZ6QixJQUE1RixtQkFBOUI7O0FBQ0EsVUFBSVksS0FBSixFQUFXO0FBQ1AsNkJBQUUsSUFBRixFQUFRRSxRQUFSLHVCQUFnQ0YsS0FBaEM7QUFDSDs7QUFDREQsTUFBQUEsR0FBRyxDQUFDWSxPQUFKLENBQVlILGVBQVo7QUFDSDs7QUFBQTtBQUNKLEdBVEQ7QUFVQSxTQUFPLElBQVA7QUFDSDs7QUFFRCxTQUFTTSxJQUFULENBQWNmLEdBQWQsRUFBbUJYLElBQW5CLEVBQXlCWSxLQUF6QixFQUFnQztBQUM1QixNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNOLFVBQU0sSUFBSUUsS0FBSixDQUFVLHNCQUFWLENBQU47QUFDSDs7QUFDRCxNQUFJLENBQUNiLElBQUwsRUFBVztBQUNQLFVBQU0sSUFBSWEsS0FBSixDQUFVLG1CQUFWLENBQU47QUFDSDs7QUFFREYsRUFBQUEsR0FBRyxDQUFDRyxRQUFKLENBQWEsaUNBQWI7O0FBQ0EsTUFBSUgsR0FBRyxDQUFDTCxJQUFKLENBQVMsMEJBQVQsRUFBcUNnQixNQUFyQyxLQUFnRCxDQUFwRCxFQUF1RDtBQUNuRCxRQUFNRixlQUFlLEdBQUd2QixNQUFNLGtJQUFxSEcsSUFBckgseUJBQTlCOztBQUNBLFFBQUlZLEtBQUosRUFBVztBQUNQRCxNQUFBQSxHQUFHLENBQUNHLFFBQUosdUJBQTRCRixLQUE1QjtBQUNIOztBQUNERCxJQUFBQSxHQUFHLENBQUNZLE9BQUosQ0FBWUgsZUFBWjtBQUNILEdBTkQsTUFNTztBQUNILFdBQU8sS0FBUDtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNIOztBQUVELFNBQVNPLFFBQVQsQ0FBa0JoQixHQUFsQixFQUF1QjtBQUNuQixNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNOLFVBQU0sSUFBSUUsS0FBSixDQUFVLHNCQUFWLENBQU47QUFDSDs7QUFFREYsRUFBQUEsR0FBRyxDQUFDRyxRQUFKLENBQWEscUNBQWI7O0FBQ0EsTUFBSUgsR0FBRyxDQUFDTCxJQUFKLENBQVMsOEJBQVQsRUFBeUNnQixNQUF6QyxLQUFvRCxDQUF4RCxFQUEyRDtBQUN2RCxRQUFNTSxRQUFRLEdBQUcsaURBQWpCO0FBQ0EsV0FBT2pCLEdBQUcsQ0FBQ1ksT0FBSixDQUFZSyxRQUFaLENBQVA7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmZ1bmN0aW9uIGVzY2FwZSh1bnNhZmVUZXh0KSB7XG4gICAgY29uc3Qgc2FmZVRleHQgPSAkKCc8ZGl2IC8+JykudGV4dCh1bnNhZmVUZXh0KS50ZXh0KCk7XG4gICAgcmV0dXJuIHNhZmVUZXh0O1xufVxuXG5mdW5jdGlvbiBzdG9wKCRlbGVtZW50LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9ICcuc2QtbG9hZGluZy1ib3gtd3JhcHBlciwgLnNkLWxvYWRpbmctcGlsbC13cmFwcGVyLCAuc2QtYnV0dG9uLWxvYWRpbmctd3JhcHBlciwgLnNkLWxvYWRpbmctc2tlbGV0b24td3JhcHBlcic7XG4gICAgY29uc3QgdGltaW5nID0gMTUwO1xuXG4gICAgJGVsZW1lbnQuZmluZChzZWxlY3RvcnMpLmZhZGVPdXQodGltaW5nLCAoKSA9PiB7XG4gICAgICAgICRlbGVtZW50LmZpbmQoc2VsZWN0b3JzKS5yZW1vdmUoKTtcbiAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3NkLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYnV0dG9uKCRlbCwgdGV4dCwgc3R5bGUpIHtcbiAgICBpZiAoISRlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKCdzZC1sb2FkaW5nLWJ1dHRvbicpO1xuICAgICRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgJHRoZUJ1dHRvbiA9ICQodGhpcyk7XG4gICAgICAgICR0aGVCdXR0b24uY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9ICR0aGVCdXR0b24uY3NzKCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICBpZiAoKGRpc3BsYXkgPT09ICdpbmxpbmUtYmxvY2snKSB8fCAoZGlzcGxheSA9PT0gJ2lubGluZS1mbGV4JykpIHtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLmFkZENsYXNzKCdtb2QtbG9hZGluZy1idXR0b24taW5saW5lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLmFkZENsYXNzKGBtb2QtbG9hZGluZy0ke3N0eWxlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoYDxkaXYgY2xhc3M9XCJzZC1idXR0b24tbG9hZGluZy13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInNkLWJ1dHRvbi1sb2FkaW5nXCI+PC9kaXY+PC9kaXY+JHt0ZXh0fWApO1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uaHRtbChsb2FkaW5nQ29udGVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkdGhlQnV0dG9uLmZpbmQoJy5zZC1idXR0b24tbG9hZGluZycpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZSgnPGRpdiBjbGFzcz1cInNkLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwic2QtYnV0dG9uLWxvYWRpbmdcIj48L2Rpdj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR0aGVCdXR0b24uYWRkQ2xhc3MoJ3NkLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYm94KCRlbCwgdGV4dCwgc3R5bGUsIHBvc2l0aW9uKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cbiAgICB0ZXh0ID0gdGV4dCB8fCAnJztcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID8gYG1vZC1ib3gtJHtwb3NpdGlvbn1gIDogJyc7XG5cbiAgICAkZWwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NkLWxvYWRpbmctYm94IHNkLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCcuc2QtbG9hZGluZy1ib3gtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKGA8ZGl2IGNsYXNzPVwic2QtbG9hZGluZy1ib3gtd3JhcHBlciAke3Bvc2l0aW9ufVwiPjxkaXYgY2xhc3M9XCJzZC1ib3gtbG9hZGluZ1wiPjwvZGl2PjxzcGFuPiR7dGV4dH08L3NwYW4+PC9kaXY+YCk7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKGBtb2QtbG9hZGluZy0ke3N0eWxlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGVsLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcGlsbCgkZWwsIHRleHQsIHN0eWxlKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyB0ZXh0IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygnc2QtbG9hZGluZy1waWxsIHNkLWxvYWRpbmdzdGF0ZScpO1xuICAgIGlmICgkZWwuZmluZCgnLnNkLWxvYWRpbmctcGlsbC13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInNkLWxvYWRpbmctcGlsbC13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInNkLWxvYWRpbmctcGlsbC1zaGFwZVwiPjxkaXYgY2xhc3M9XCJzZC1waWxsLWxvYWRpbmdcIj48L2Rpdj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvZGl2PjwvZGl2PmApO1xuICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICRlbC5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAgICAgfVxuICAgICAgICAkZWwucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNrZWxldG9uKCRlbCkge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3MoJ3NkLWxvYWRpbmctc2tlbGV0b24gc2QtbG9hZGluZ3N0YXRlJyk7XG4gICAgaWYgKCRlbC5maW5kKCcuc2QtbG9hZGluZy1za2VsZXRvbi13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gJzxkaXYgY2xhc3M9XCJzZC1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXJcIj48L2Rpdj4nO1xuICAgICAgICByZXR1cm4gJGVsLnByZXBlbmQoY29udGVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHtcbiAgICBzdG9wLFxuICAgIGJ1dHRvbixcbiAgICBib3gsXG4gICAgcGlsbCxcbiAgICBza2VsZXRvblxufVxuIl19