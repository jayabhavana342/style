"use strict";

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

module.exports = {
  Stop: loadingStop,
  Button: loadingButton,
  Box: loadingBox,
  Pill: loadingPill,
  Skeleton: loadingSkeleton
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJlc2NhcGUiLCJ1bnNhZmVUZXh0Iiwic2FmZVRleHQiLCJ0ZXh0IiwibG9hZGluZ1N0b3AiLCIkZWxlbWVudCIsImNhbGxiYWNrIiwic2VsZWN0b3JzIiwidGltaW5nIiwiZmluZCIsImZhZGVPdXQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImxvYWRpbmdCdXR0b24iLCIkZWwiLCJzdHlsZSIsIkVycm9yIiwiYWRkQ2xhc3MiLCJlYWNoIiwiJHRoZUJ1dHRvbiIsImNsaWNrIiwiZGlzcGxheSIsImNzcyIsImxvYWRpbmdDb250ZW50cyIsImh0bWwiLCJsZW5ndGgiLCJwcmVwZW5kIiwibG9hZGluZ0JveCIsInBvc2l0aW9uIiwibG9hZGluZ1BpbGwiLCJsb2FkaW5nU2tlbGV0b24iLCJjb250ZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJTdG9wIiwiQnV0dG9uIiwiQm94IiwiUGlsbCIsIlNrZWxldG9uIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsVUFBaEIsRUFBNEI7QUFDeEIsTUFBTUMsUUFBUSxHQUFHLHFCQUFFLFNBQUYsRUFBYUMsSUFBYixDQUFrQkYsVUFBbEIsRUFBOEJFLElBQTlCLEVBQWpCO0FBQ0EsU0FBT0QsUUFBUDtBQUNIOztBQUVELFNBQVNFLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCQyxRQUEvQixFQUF5QztBQUNyQyxNQUFNQyxTQUFTLEdBQUcsNkdBQWxCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFFQUgsRUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNGLFNBQWQsRUFBeUJHLE9BQXpCLENBQWlDRixNQUFqQyxFQUF5QyxZQUFNO0FBQzNDSCxJQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBY0YsU0FBZCxFQUF5QkksTUFBekI7QUFDQU4sSUFBQUEsUUFBUSxDQUFDTyxXQUFULENBQXFCLGlCQUFyQjs7QUFDQSxRQUFJLE9B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Q0FBQ0csUUFBSixDQUFhLGlDQUFiOztBQUNBLE1BQUlILEdBQUcsQ0FBQ0wsSUFBSixDQUFTLDBCQUFULEVBQXFDZ0IsTUFBckMsS0FBZ0QsQ0FBcEQsRUFBdUQ7QUFDbkQsUUFBTUYsZUFBZSxHQUFHdkIsTUFBTSxrSUFBcUhHLElBQXJILHlCQUE5Qjs7QUFDQSxRQUFJWSxLQUFKLEVBQVc7QUFDUEQsTUFBQUEsR0FBRyxDQUFDRyxRQUFKLHVCQUE0QkYsS0FBNUI7QUFDSDs7QUFDREQsSUFBQUEsR0FBRyxDQUFDWSxPQUFKLENBQVlILGVBQVo7QUFDSCxHQU5ELE1BTU87QUFDSCxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSDs7QUFFRCxTQUFTTyxlQUFULENBQXlCaEIsR0FBekIsRUFBOEI7QUFDMUIsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDTixVQUFNLElBQUlFLEtBQUosQ0FBVSxzQkFBVixDQUFOO0FBQ0g7O0FBRURGLEVBQUFBLEdBQUcsQ0FBQ0csUUFBSixDQUFhLHFDQUFiOztBQUNBLE1BQUlILEdBQUcsQ0FBQ0wsSUFBSixDQUFTLDhCQUFULEVBQXlDZ0IsTUFBekMsS0FBb0QsQ0FBeEQsRUFBMkQ7QUFDdkQsUUFBTU0sUUFBUSxHQUFHLGlEQUFqQjtBQUNBLFdBQU9qQixHQUFHLENBQUNZLE9BQUosQ0FBWUssUUFBWixDQUFQO0FBQ0g7O0FBQ0QsU0FBTyxJQUFQO0FBQ0g7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxFQUFBQSxJQUFJLEVBQUU5QixXQURPO0FBRWIrQixFQUFBQSxNQUFNLEVBQUV0QixhQUZLO0FBR2J1QixFQUFBQSxHQUFHLEVBQUVULFVBSFE7QUFJYlUsRUFBQUEsSUFBSSxFQUFFUixXQUpPO0FBS2JTLEVBQUFBLFFBQVEsRUFBRVI7QUFMRyxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmZ1bmN0aW9uIGVzY2FwZSh1bnNhZmVUZXh0KSB7XG4gICAgY29uc3Qgc2FmZVRleHQgPSAkKCc8ZGl2IC8+JykudGV4dCh1bnNhZmVUZXh0KS50ZXh0KCk7XG4gICAgcmV0dXJuIHNhZmVUZXh0O1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nU3RvcCgkZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSAnLnNkLWxvYWRpbmctYm94LXdyYXBwZXIsIC5zZC1sb2FkaW5nLXBpbGwtd3JhcHBlciwgLnNkLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXIsIC5zZC1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXInO1xuICAgIGNvbnN0IHRpbWluZyA9IDE1MDtcblxuICAgICRlbGVtZW50LmZpbmQoc2VsZWN0b3JzKS5mYWRlT3V0KHRpbWluZywgKCkgPT4ge1xuICAgICAgICAkZWxlbWVudC5maW5kKHNlbGVjdG9ycykucmVtb3ZlKCk7XG4gICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCdzZC1sb2FkaW5nc3RhdGUnKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdCdXR0b24oJGVsLCB0ZXh0LCBzdHlsZSkge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3MoJ3NkLWxvYWRpbmctYnV0dG9uJyk7XG4gICAgJGVsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCAkdGhlQnV0dG9uID0gJCh0aGlzKTtcbiAgICAgICAgJHRoZUJ1dHRvbi5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gJHRoZUJ1dHRvbi5jc3MoJ2Rpc3BsYXknKTtcbiAgICAgICAgICAgIGlmICgoZGlzcGxheSA9PT0gJ2lubGluZS1ibG9jaycpIHx8IChkaXNwbGF5ID09PSAnaW5saW5lLWZsZXgnKSkge1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uYWRkQ2xhc3MoJ21vZC1sb2FkaW5nLWJ1dHRvbi1pbmxpbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInNkLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwic2QtYnV0dG9uLWxvYWRpbmdcIj48L2Rpdj48L2Rpdj4ke3RleHR9YCk7XG4gICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5odG1sKGxvYWRpbmdDb250ZW50cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCR0aGVCdXR0b24uZmluZCgnLnNkLWJ1dHRvbi1sb2FkaW5nJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKCc8ZGl2IGNsYXNzPVwic2QtYnV0dG9uLWxvYWRpbmctd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJzZC1idXR0b24tbG9hZGluZ1wiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24ucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHRoZUJ1dHRvbi5hZGRDbGFzcygnc2QtbG9hZGluZ3N0YXRlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nQm94KCRlbCwgdGV4dCwgc3R5bGUsIHBvc2l0aW9uKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cbiAgICB0ZXh0ID0gdGV4dCB8fCAnJztcbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID8gYG1vZC1ib3gtJHtwb3NpdGlvbn1gIDogJyc7XG5cbiAgICAkZWwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NkLWxvYWRpbmctYm94IHNkLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCcuc2QtbG9hZGluZy1ib3gtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKGA8ZGl2IGNsYXNzPVwic2QtbG9hZGluZy1ib3gtd3JhcHBlciAke3Bvc2l0aW9ufVwiPjxkaXYgY2xhc3M9XCJzZC1ib3gtbG9hZGluZ1wiPjwvZGl2PjxzcGFuPiR7dGV4dH08L3NwYW4+PC9kaXY+YCk7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKGBtb2QtbG9hZGluZy0ke3N0eWxlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGVsLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ1BpbGwoJGVsLCB0ZXh0LCBzdHlsZSkge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gdGV4dCBwYXNzZWQgaW4nKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3MoJ3NkLWxvYWRpbmctcGlsbCBzZC1sb2FkaW5nc3RhdGUnKTtcbiAgICBpZiAoJGVsLmZpbmQoJy5zZC1sb2FkaW5nLXBpbGwtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoYDxkaXYgY2xhc3M9XCJzZC1sb2FkaW5nLXBpbGwtd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJzZC1sb2FkaW5nLXBpbGwtc2hhcGVcIj48ZGl2IGNsYXNzPVwic2QtcGlsbC1sb2FkaW5nXCI+PC9kaXY+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2Rpdj48L2Rpdj5gKTtcbiAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgJGVsLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nU2tlbGV0b24oJGVsKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygnc2QtbG9hZGluZy1za2VsZXRvbiBzZC1sb2FkaW5nc3RhdGUnKTtcbiAgICBpZiAoJGVsLmZpbmQoJy5zZC1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXInKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSAnPGRpdiBjbGFzcz1cInNkLWxvYWRpbmctc2tlbGV0b24td3JhcHBlclwiPjwvZGl2Pic7XG4gICAgICAgIHJldHVybiAkZWwucHJlcGVuZChjb250ZW50cyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBTdG9wOiBsb2FkaW5nU3RvcCxcbiAgICBCdXR0b246IGxvYWRpbmdCdXR0b24sXG4gICAgQm94OiBsb2FkaW5nQm94LFxuICAgIFBpbGw6IGxvYWRpbmdQaWxsLFxuICAgIFNrZWxldG9uOiBsb2FkaW5nU2tlbGV0b25cbn07XG4iXX0=