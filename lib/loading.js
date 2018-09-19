"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(unsafeText) {
  var safeText = (0, _jquery.default)('<div />').text(unsafeText).text();
  return safeText;
}

function loadingStop($element, callback) {
  var selectors = '.ttam-loading-box-wrapper, .ttam-loading-pill-wrapper, .ttam-button-loading-wrapper, .ttam-loading-skeleton-wrapper';
  var timing = 150;
  $element.find(selectors).fadeOut(timing, function () {
    $element.find(selectors).remove();
    $element.removeClass('ttam-loadingstate');

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

  $el.addClass('ttam-loading-button');
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
        var loadingContents = escape("<div class=\"ttam-button-loading-wrapper\"><div class=\"ttam-button-loading\"></div></div>".concat(text));
        $theButton.html(loadingContents);
      } else if ($theButton.find('.ttam-button-loading').length === 0) {
        var _loadingContents = escape('<div class="ttam-button-loading-wrapper"><div class="ttam-button-loading"></div></div>');

        $theButton.prepend(_loadingContents);
      }

      $theButton.addClass('ttam-loadingstate');
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
    (0, _jquery.default)(this).addClass('ttam-loading-box ttam-loadingstate');

    if ((0, _jquery.default)(this).find('.ttam-loading-box-wrapper').length === 0) {
      var loadingContents = escape("<div class=\"ttam-loading-box-wrapper ".concat(position, "\"><div class=\"ttam-box-loading\"></div><span>").concat(text, "</span></div>"));

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

  $el.addClass('ttam-loading-pill ttam-loadingstate');

  if ($el.find('.ttam-loading-pill-wrapper').length === 0) {
    var loadingContents = escape("<div class=\"ttam-loading-pill-wrapper\"><div class=\"ttam-loading-pill-shape\"><div class=\"ttam-pill-loading\"></div><span>".concat(text, "</span></div></div>"));

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

  $el.addClass('ttam-loading-skeleton ttam-loadingstate');

  if ($el.find('.ttam-loading-skeleton-wrapper').length === 0) {
    var contents = '<div class="ttam-loading-skeleton-wrapper"></div>';
    return $el.prepend(contents);
  }

  return true;
}

module.exports = {
  Stop: loadingStop,
  Button: loadingButton,
  Box: loadingBox,
  Pill: loadingPill,
  Skeleton: loadingSkeleton
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJlc2NhcGUiLCJ1bnNhZmVUZXh0Iiwic2FmZVRleHQiLCJ0ZXh0IiwibG9hZGluZ1N0b3AiLCIkZWxlbWVudCIsImNhbGxiYWNrIiwic2VsZWN0b3JzIiwidGltaW5nIiwiZmluZCIsImZhZGVPdXQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImxvYWRpbmdCdXR0b24iLCIkZWwiLCJzdHlsZSIsIkVycm9yIiwiYWRkQ2xhc3MiLCJlYWNoIiwiJHRoZUJ1dHRvbiIsImNsaWNrIiwiZGlzcGxheSIsImNzcyIsImxvYWRpbmdDb250ZW50cyIsImh0bWwiLCJsZW5ndGgiLCJwcmVwZW5kIiwibG9hZGluZ0JveCIsInBvc2l0aW9uIiwibG9hZGluZ1BpbGwiLCJsb2FkaW5nU2tlbGV0b24iLCJjb250ZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJTdG9wIiwiQnV0dG9uIiwiQm94IiwiUGlsbCIsIlNrZWxldG9uIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsVUFBaEIsRUFBNEI7QUFDeEIsTUFBTUMsUUFBUSxHQUFHLHFCQUFFLFNBQUYsRUFBYUMsSUFBYixDQUFrQkYsVUFBbEIsRUFBOEJFLElBQTlCLEVBQWpCO0FBQ0EsU0FBT0QsUUFBUDtBQUNIOztBQUVELFNBQVNFLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCQyxRQUEvQixFQUF5QztBQUNyQyxNQUFNQyxTQUFTLEdBQUcscUhBQWxCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFFQUgsRUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNGLFNBQWQsRUFBeUJHLE9BQXpCLENBQWlDRixNQUFqQyxFQUF5QyxZQUFNO0FBQzNDSCxJQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBY0YsU0FBZCxFQUF5QkksTUFBekI7QUFDQU4sSUFBQUEsUUFBUSxDQUFDTyxXQUFULENBQXFCLG1CQUFyQjs7QUFDQSxRQUFJLE9BQU9OLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDaEMsYUFBT0EsUUFBUSxFQUFmO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0FQRDtBQVFIOztBQUVELFNBQVNPLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCWCxJQUE1QixFQUFrQ1ksS0FBbEMsRUFBeUM7QUFDckMsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDTixVQUFNLElBQUlFLEtBQUosQ0FBVSxzQkFBVixDQUFOO0FBQ0g7O0FBRURGLEVBQUFBLEdBQUcsQ0FBQ0csUUFBSixDQUFhLHFCQUFiO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLFlBQVk7QUFDakIsUUFBTUMsVUFBVSxHQUFHLHFCQUFFLElBQUYsQ0FBbkI7QUFDQUEsSUFBQUEsVUFBVSxDQUFDQyxLQUFYLENBQWlCLFlBQU07QUFDbkIsVUFBTUMsT0FBTyxHQUFHRixVQUFVLENBQUNHLEdBQVgsQ0FBZSxTQUFmLENBQWhCOztBQUNBLFVBQUtELE9BQU8sS0FBSyxjQUFiLElBQWlDQSxPQUFPLEtBQUssYUFBakQsRUFBaUU7QUFDN0RGLFFBQUFBLFVBQVUsQ0FBQ0YsUUFBWCxDQUFvQiwyQkFBcEI7QUFDSDs7QUFDRCxVQUFJRixLQUFKLEVBQVc7QUFDUEksUUFBQUEsVUFBVSxDQUFDRixRQUFYLHVCQUFtQ0YsS0FBbkM7QUFDSDs7QUFDRCxVQUFJWixJQUFKLEVBQVU7QUFDTixZQUFNb0IsZUFBZSxHQUFHdkIsTUFBTSxxR0FBMEZHLElBQTFGLEVBQTlCO0FBQ0FnQixRQUFBQSxVQUFVLENBQUNLLElBQVgsQ0FBZ0JELGVBQWhCO0FBQ0gsT0FIRCxNQUdPLElBQUlKLFVBQVUsQ0FBQ1YsSUFBWCxDQUFnQixzQkFBaEIsRUFBd0NnQixNQUF4QyxLQUFtRCxDQUF2RCxFQUEwRDtBQUM3RCxZQUFNRixnQkFBZSxHQUFHdkIsTUFBTSxDQUFDLHdGQUFELENBQTlCOztBQUNBbUIsUUFBQUEsVUFBVSxDQUFDTyxPQUFYLENBQW1CSCxnQkFBbkI7QUFDSDs7QUFDREosTUFBQUEsVUFBVSxDQUFDRixRQUFYLENBQW9CLG1CQUFwQjtBQUNILEtBaEJEO0FBaUJILEdBbkJEO0FBb0JBLFNBQU8sSUFBUDtBQUNIOztBQUVELFNBQVNVLFVBQVQsQ0FBb0JiLEdBQXBCLEVBQXlCWCxJQUF6QixFQUErQlksS0FBL0IsRUFBc0NhLFFBQXRDLEVBQWdEO0FBQzVDLE1BQUksQ0FBQ2QsR0FBTCxFQUFVO0FBQ04sVUFBTSxJQUFJRSxLQUFKLENBQVUsc0JBQVYsQ0FBTjtBQUNIOztBQUNEYixFQUFBQSxJQUFJLEdBQUdBLElBQUksSUFBSSxFQUFmO0FBQ0F5QixFQUFBQSxRQUFRLEdBQUdBLFFBQVEscUJBQWNBLFFBQWQsSUFBMkIsRUFBOUM7QUFFQWQsRUFBQUEsR0FBRyxDQUFDSSxJQUFKLENBQVMsWUFBWTtBQUNqQix5QkFBRSxJQUFGLEVBQVFELFFBQVIsQ0FBaUIsb0NBQWpCOztBQUNBLFFBQUkscUJBQUUsSUFBRixFQUFRUixJQUFSLENBQWEsMkJBQWIsRUFBMENnQixNQUExQyxLQUFxRCxDQUF6RCxFQUE0RDtBQUN4RCxVQUFNRixlQUFlLEdBQUd2QixNQUFNLGlEQUF5QzRCLFFBQXpDLDREQUFnR3pCLElBQWhHLG1CQUE5Qjs7QUFDQSxVQUFJWSxLQUFKLEVBQVc7QUFDUCw2QkFBRSxJQUFGLEVBQVFFLFFBQVIsdUJBQWdDRixLQUFoQztBQUNIOztBQUNERCxNQUFBQSxHQUFHLENBQUNZLE9BQUosQ0FBWUgsZUFBWjtBQUNIOztBQUFBO0FBQ0osR0FURDtBQVVBLFNBQU8sSUFBUDtBQUNIOztBQUVELFNBQVNNLFdBQVQsQ0FBcUJmLEdBQXJCLEVBQTBCWCxJQUExQixFQUFnQ1ksS0FBaEMsRUFBdUM7QUFDbkMsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDTixVQUFNLElBQUlFLEtBQUosQ0FBVSxzQkFBVixDQUFOO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDYixJQUFMLEVBQVc7QUFDUCxVQUFNLElBQUlhLEtBQUosQ0FBVSxtQkFBVixDQUFOO0FBQ0g7O0FBRURGLEVBQUFBLEdBQUcsQ0FBQ0csUUFBSixDQUFhLHFDQUFiOztBQUNBLE1BQUlILEdBQUcsQ0FBQ0wsSUFBSixDQUFTLDRCQUFULEVBQXVDZ0IsTUFBdkMsS0FBa0QsQ0FBdEQsRUFBeUQ7QUFDckQsUUFBTUYsZUFBZSxHQUFHdkIsTUFBTSx3SUFBMkhHLElBQTNILHlCQUE5Qjs7QUFDQSxRQUFJWSxLQUFKLEVBQVc7QUFDUEQsTUFBQUEsR0FBRyxDQUFDRyxRQUFKLHVCQUE0QkYsS0FBNUI7QUFDSDs7QUFDREQsSUFBQUEsR0FBRyxDQUFDWSxPQUFKLENBQVlILGVBQVo7QUFDSCxHQU5ELE1BTU87QUFDSCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSDs7QUFFRCxTQUFTTyxlQUFULENBQXlCaEIsR0FBekIsRUFBOEI7QUFDMUIsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixVQUFNLElBQUlFLEtBQUosQ0FBVSxzQkFBVixDQUFOO0FBQ0g7O0FBRURGLEVBQUFBLEdBQUcsQ0FBQ0csUUFBSixDQUFhLHlDQUFiOztBQUNBLE1BQUlILEdBQUcsQ0FBQ0wsSUFBSixDQUFTLGdDQUFULEVBQTJDZ0IsTUFBM0MsS0FBc0QsQ0FBMUQsRUFBNkQ7QUFDekQsUUFBTU0sUUFBUSxHQUFHLG1EQUFqQjtBQUNBLFdBQU9qQixHQUFHLENBQUNZLE9BQUosQ0FBWUssUUFBWixDQUFQO0FBQ0g7O0FBQ0QsU0FBTyxJQUFQO0FBQ0g7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxFQUFBQSxJQUFJLEVBQUU5QixXQURPO0FBRWIrQixFQUFBQSxNQUFNLEVBQUV0QixhQUZLO0FBR2J1QixFQUFBQSxHQUFHLEVBQUVULFVBSFE7QUFJYlUsRUFBQUEsSUFBSSxFQUFFUixXQUpPO0FBS2JTLEVBQUFBLFFBQVEsRUFBRVI7QUFMRyxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmZ1bmN0aW9uIGVzY2FwZSh1bnNhZmVUZXh0KSB7XG4gICAgY29uc3Qgc2FmZVRleHQgPSAkKCc8ZGl2IC8+JykudGV4dCh1bnNhZmVUZXh0KS50ZXh0KCk7XG4gICAgcmV0dXJuIHNhZmVUZXh0O1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nU3RvcCgkZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSAnLnR0YW0tbG9hZGluZy1ib3gtd3JhcHBlciwgLnR0YW0tbG9hZGluZy1waWxsLXdyYXBwZXIsIC50dGFtLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXIsIC50dGFtLWxvYWRpbmctc2tlbGV0b24td3JhcHBlcic7XG4gICAgY29uc3QgdGltaW5nID0gMTUwO1xuXG4gICAgJGVsZW1lbnQuZmluZChzZWxlY3RvcnMpLmZhZGVPdXQodGltaW5nLCAoKSA9PiB7XG4gICAgICAgICRlbGVtZW50LmZpbmQoc2VsZWN0b3JzKS5yZW1vdmUoKTtcbiAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3R0YW0tbG9hZGluZ3N0YXRlJyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nQnV0dG9uKCRlbCwgdGV4dCwgc3R5bGUpIHtcbiAgICBpZiAoISRlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKCd0dGFtLWxvYWRpbmctYnV0dG9uJyk7XG4gICAgJGVsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCAkdGhlQnV0dG9uID0gJCh0aGlzKTtcbiAgICAgICAgJHRoZUJ1dHRvbi5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gJHRoZUJ1dHRvbi5jc3MoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIGlmICgoZGlzcGxheSA9PT0gJ2lubGluZS1ibG9jaycpIHx8IChkaXNwbGF5ID09PSAnaW5saW5lLWZsZXgnKSkge1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uYWRkQ2xhc3MoJ21vZC1sb2FkaW5nLWJ1dHRvbi1pbmxpbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInR0YW0tYnV0dG9uLWxvYWRpbmctd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJ0dGFtLWJ1dHRvbi1sb2FkaW5nXCI+PC9kaXY+PC9kaXY+JHt0ZXh0fWApO1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uaHRtbChsb2FkaW5nQ29udGVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkdGhlQnV0dG9uLmZpbmQoJy50dGFtLWJ1dHRvbi1sb2FkaW5nJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKCc8ZGl2IGNsYXNzPVwidHRhbS1idXR0b24tbG9hZGluZy13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInR0YW0tYnV0dG9uLWxvYWRpbmdcIj48L2Rpdj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR0aGVCdXR0b24uYWRkQ2xhc3MoJ3R0YW0tbG9hZGluZ3N0YXRlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nQm94KCRlbCwgdGV4dCwgc3R5bGUsIHBvc2l0aW9uKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cbiAgICB0ZXh0ID0gdGV4dCB8fCAnJztcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID8gYG1vZC1ib3gtJHtwb3NpdGlvbn1gIDogJyc7XG5cbiAgICAkZWwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3R0YW0tbG9hZGluZy1ib3ggdHRhbS1sb2FkaW5nc3RhdGUnKTtcbiAgICAgICAgaWYgKCQodGhpcykuZmluZCgnLnR0YW0tbG9hZGluZy1ib3gtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKGA8ZGl2IGNsYXNzPVwidHRhbS1sb2FkaW5nLWJveC13cmFwcGVyICR7cG9zaXRpb259XCI+PGRpdiBjbGFzcz1cInR0YW0tYm94LWxvYWRpbmdcIj48L2Rpdj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvZGl2PmApO1xuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRlbC5wcmVwZW5kKGxvYWRpbmdDb250ZW50cyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdQaWxsKCRlbCwgdGV4dCwgc3R5bGUpIHtcbiAgICBpZiAoISRlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgfVxuICAgIGlmICghdGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHRleHQgcGFzc2VkIGluJyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKCd0dGFtLWxvYWRpbmctcGlsbCB0dGFtLWxvYWRpbmdzdGF0ZScpO1xuICAgIGlmICgkZWwuZmluZCgnLnR0YW0tbG9hZGluZy1waWxsLXdyYXBwZXInKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKGA8ZGl2IGNsYXNzPVwidHRhbS1sb2FkaW5nLXBpbGwtd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJ0dGFtLWxvYWRpbmctcGlsbC1zaGFwZVwiPjxkaXYgY2xhc3M9XCJ0dGFtLXBpbGwtbG9hZGluZ1wiPjwvZGl2PjxzcGFuPiR7dGV4dH08L3NwYW4+PC9kaXY+PC9kaXY+YCk7XG4gICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgJGVsLmFkZENsYXNzKGBtb2QtbG9hZGluZy0ke3N0eWxlfWApO1xuICAgICAgICB9XG4gICAgICAgICRlbC5wcmVwZW5kKGxvYWRpbmdDb250ZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ1NrZWxldG9uKCRlbCkge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3MoJ3R0YW0tbG9hZGluZy1za2VsZXRvbiB0dGFtLWxvYWRpbmdzdGF0ZScpO1xuICAgIGlmICgkZWwuZmluZCgnLnR0YW0tbG9hZGluZy1za2VsZXRvbi13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRzID0gJzxkaXYgY2xhc3M9XCJ0dGFtLWxvYWRpbmctc2tlbGV0b24td3JhcHBlclwiPjwvZGl2Pic7XG4gICAgICAgIHJldHVybiAkZWwucHJlcGVuZChjb250ZW50cyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBTdG9wOiBsb2FkaW5nU3RvcCxcbiAgICBCdXR0b246IGxvYWRpbmdCdXR0b24sXG4gICAgQm94OiBsb2FkaW5nQm94LFxuICAgIFBpbGw6IGxvYWRpbmdQaWxsLFxuICAgIFNrZWxldG9uOiBsb2FkaW5nU2tlbGV0b25cbn07XG4iXX0=