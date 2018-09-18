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
}; // SD.loading = {
// stop: ($element, callback) => {
//     const selectors = '.ttam-loading-box-wrapper, .ttam-loading-pill-wrapper, .ttam-button-loading-wrapper, .ttam-loading-skeleton-wrapper';
//     const timing = 150;
//     $element.find(selectors).fadeOut(timing, () => {
//         $element.find(selectors).remove();
//         $element.removeClass('ttam-loadingstate');
//         if (typeof callback === 'function') {
//             return callback();
//         }
//         return true;
//     });
// },
// button: ($el, text, style) => {
//     if (!$el) {
//         throw new Error('no element passed in');
//     }
//     $el.addClass('ttam-loading-button');
//     $el.each(function () {
//         const $theButton = $(this);
//         $theButton.click(() => {
//             $theButton.addClass('ttam-loadingstate');
//             if (style) {
//                 $theButton.addClass(`mod-loading-${style}`);
//             }
//             if (text) {
//                 const loadingContents = escape(`<div class="ttam-button-loading-wrapper"><div class="ttam-button-loading"></div></div>${text}`);
//                 $theButton.html(loadingContents);
//             } else if ($theButton.find('.ttam-button-loading').length === 0) {
//                 const loadingContents = escape('<div class="ttam-button-loading-wrapper"><div class="ttam-button-loading"></div></div>');
//                 $theButton.prepend(loadingContents);
//             }
//         });
//     });
//     return true;
// },
// box: ($el, text, style, position) => {
//     if (!$el) {
//         throw new Error('no element passed in');
//     }
//     text = text || '';
//     position = position ? `mod-box-${position}` : '';
//     $el.each(function () {
//         $(this).addClass('ttam-loading-box ttam-loadingstate');
//         if ($(this).find('.ttam-loading-box-wrapper').length === 0) {
//             const loadingContents = escape(`<div class="ttam-loading-box-wrapper ${position}"><div class="ttam-box-loading"></div><span>${text}</span></div>`);
//             if (style) {
//                 $(this).addClass(`mod-loading-${style}`);
//             }
//             $el.prepend(loadingContents);
//         }
//     });
//     return true;
// },
// pill: ($el, text, style) => {
//     if (!$el) {
//         throw new Error('no element passed in');
//     }
//     if (!text) {
//         throw new Error('no text passed in');
//     }
//     $el.addClass('ttam-loading-pill ttam-loadingstate');
//     if ($el.find('.ttam-loading-pill-wrapper').length === 0) {
//         const loadingContents = escape(`<div class="ttam-loading-pill-wrapper"><div class="ttam-loading-pill-shape"><div class="ttam-pill-loading"></div><span>${text}</span></div></div>`);
//         if (style) {
//             $el.addClass(`mod-loading-${style}`);
//         }
//         $el.prepend(loadingContents);
//     } else {
//         return false;
//     }
//     return true;
// },
//     skeleton: ($el) => {
//         if (!$el) {
//             throw new Error('no element passed in');
//         }
//         $el.addClass('ttam-loading-skeleton ttam-loadingstate');
//         if ($el.find('.ttam-loading-skeleton-wrapper').length === 0) {
//             const contents = '<div class="ttam-loading-skeleton-wrapper"></div>';
//             return $el.prepend(contents);
//         }
//         return true;
//     },
// };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJlc2NhcGUiLCJ1bnNhZmVUZXh0Iiwic2FmZVRleHQiLCJ0ZXh0IiwibG9hZGluZ1N0b3AiLCIkZWxlbWVudCIsImNhbGxiYWNrIiwic2VsZWN0b3JzIiwidGltaW5nIiwiZmluZCIsImZhZGVPdXQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImxvYWRpbmdCdXR0b24iLCIkZWwiLCJzdHlsZSIsIkVycm9yIiwiYWRkQ2xhc3MiLCJlYWNoIiwiJHRoZUJ1dHRvbiIsImNsaWNrIiwiZGlzcGxheSIsImNzcyIsImxvYWRpbmdDb250ZW50cyIsImh0bWwiLCJsZW5ndGgiLCJwcmVwZW5kIiwibG9hZGluZ0JveCIsInBvc2l0aW9uIiwibG9hZGluZ1BpbGwiLCJsb2FkaW5nU2tlbGV0b24iLCJjb250ZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJTdG9wIiwiQnV0dG9uIiwiQm94IiwiUGlsbCIsIlNrZWxldG9uIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsVUFBaEIsRUFBNEI7QUFDeEIsTUFBTUMsUUFBUSxHQUFHLHFCQUFFLFNBQUYsRUFBYUMsSUFBYixDQUFrQkYsVUFBbEIsRUFBOEJFLElBQTlCLEVBQWpCO0FBQ0EsU0FBT0QsUUFBUDtBQUNIOztBQUVELFNBQVNFLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCQyxRQUEvQixFQUF5QztBQUNyQyxNQUFNQyxTQUFTLEdBQUcscUhBQWxCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFFQUgsRUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNGLFNBQWQsRUFBeUJHLE9BQXpCLENBQWlDRixNQUFqQyxFQUF5QyxZQUFNO0FBQzNDSCxJQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBY0YsU0FBZCxFQUF5QkksTUFBekI7QUFDQU4sSUFBQUEsUUFBUSxDQUFDTyxXQUFULENBQXFCLG1CQUFyQjs7QUFDQSxRQUFJLE9B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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5mdW5jdGlvbiBlc2NhcGUodW5zYWZlVGV4dCkge1xuICAgIGNvbnN0IHNhZmVUZXh0ID0gJCgnPGRpdiAvPicpLnRleHQodW5zYWZlVGV4dCkudGV4dCgpO1xuICAgIHJldHVybiBzYWZlVGV4dDtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ1N0b3AoJGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gJy50dGFtLWxvYWRpbmctYm94LXdyYXBwZXIsIC50dGFtLWxvYWRpbmctcGlsbC13cmFwcGVyLCAudHRhbS1idXR0b24tbG9hZGluZy13cmFwcGVyLCAudHRhbS1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXInO1xuICAgIGNvbnN0IHRpbWluZyA9IDE1MDtcblxuICAgICRlbGVtZW50LmZpbmQoc2VsZWN0b3JzKS5mYWRlT3V0KHRpbWluZywgKCkgPT4ge1xuICAgICAgICAkZWxlbWVudC5maW5kKHNlbGVjdG9ycykucmVtb3ZlKCk7XG4gICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCd0dGFtLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ0J1dHRvbigkZWwsIHRleHQsIHN0eWxlKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygndHRhbS1sb2FkaW5nLWJ1dHRvbicpO1xuICAgICRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgJHRoZUJ1dHRvbiA9ICQodGhpcyk7XG4gICAgICAgICR0aGVCdXR0b24uY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9ICR0aGVCdXR0b24uY3NzKCdkaXNwbGF5Jyk7XG4gICAgICAgICAgICBpZiAoKGRpc3BsYXkgPT09ICdpbmxpbmUtYmxvY2snKSB8fCAoZGlzcGxheSA9PT0gJ2lubGluZS1mbGV4JykpIHtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLmFkZENsYXNzKCdtb2QtbG9hZGluZy1idXR0b24taW5saW5lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLmFkZENsYXNzKGBtb2QtbG9hZGluZy0ke3N0eWxlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoYDxkaXYgY2xhc3M9XCJ0dGFtLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwidHRhbS1idXR0b24tbG9hZGluZ1wiPjwvZGl2PjwvZGl2PiR7dGV4dH1gKTtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLmh0bWwobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJHRoZUJ1dHRvbi5maW5kKCcudHRhbS1idXR0b24tbG9hZGluZycpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZSgnPGRpdiBjbGFzcz1cInR0YW0tYnV0dG9uLWxvYWRpbmctd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJ0dGFtLWJ1dHRvbi1sb2FkaW5nXCI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5wcmVwZW5kKGxvYWRpbmdDb250ZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkdGhlQnV0dG9uLmFkZENsYXNzKCd0dGFtLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ0JveCgkZWwsIHRleHQsIHN0eWxlLCBwb3NpdGlvbikge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG4gICAgdGV4dCA9IHRleHQgfHwgJyc7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbiA/IGBtb2QtYm94LSR7cG9zaXRpb259YCA6ICcnO1xuXG4gICAgJGVsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0dGFtLWxvYWRpbmctYm94IHR0YW0tbG9hZGluZ3N0YXRlJyk7XG4gICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy50dGFtLWxvYWRpbmctYm94LXdyYXBwZXInKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInR0YW0tbG9hZGluZy1ib3gtd3JhcHBlciAke3Bvc2l0aW9ufVwiPjxkaXYgY2xhc3M9XCJ0dGFtLWJveC1sb2FkaW5nXCI+PC9kaXY+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2Rpdj5gKTtcbiAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkZWwucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nUGlsbCgkZWwsIHRleHQsIHN0eWxlKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cbiAgICBpZiAoIXRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyB0ZXh0IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygndHRhbS1sb2FkaW5nLXBpbGwgdHRhbS1sb2FkaW5nc3RhdGUnKTtcbiAgICBpZiAoJGVsLmZpbmQoJy50dGFtLWxvYWRpbmctcGlsbC13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInR0YW0tbG9hZGluZy1waWxsLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwidHRhbS1sb2FkaW5nLXBpbGwtc2hhcGVcIj48ZGl2IGNsYXNzPVwidHRhbS1waWxsLWxvYWRpbmdcIj48L2Rpdj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvZGl2PjwvZGl2PmApO1xuICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICRlbC5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAgICAgfVxuICAgICAgICAkZWwucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdTa2VsZXRvbigkZWwpIHtcbiAgICBpZiAoISRlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKCd0dGFtLWxvYWRpbmctc2tlbGV0b24gdHRhbS1sb2FkaW5nc3RhdGUnKTtcbiAgICBpZiAoJGVsLmZpbmQoJy50dGFtLWxvYWRpbmctc2tlbGV0b24td3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBjb250ZW50cyA9ICc8ZGl2IGNsYXNzPVwidHRhbS1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXJcIj48L2Rpdj4nO1xuICAgICAgICByZXR1cm4gJGVsLnByZXBlbmQoY29udGVudHMpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgU3RvcDogbG9hZGluZ1N0b3AsXG4gICAgQnV0dG9uOiBsb2FkaW5nQnV0dG9uLFxuICAgIEJveDogbG9hZGluZ0JveCxcbiAgICBQaWxsOiBsb2FkaW5nUGlsbCxcbiAgICBTa2VsZXRvbjogbG9hZGluZ1NrZWxldG9uXG59O1xuXG5cbi8vIFNELmxvYWRpbmcgPSB7XG4gICAgLy8gc3RvcDogKCRlbGVtZW50LCBjYWxsYmFjaykgPT4ge1xuICAgIC8vICAgICBjb25zdCBzZWxlY3RvcnMgPSAnLnR0YW0tbG9hZGluZy1ib3gtd3JhcHBlciwgLnR0YW0tbG9hZGluZy1waWxsLXdyYXBwZXIsIC50dGFtLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXIsIC50dGFtLWxvYWRpbmctc2tlbGV0b24td3JhcHBlcic7XG4gICAgLy8gICAgIGNvbnN0IHRpbWluZyA9IDE1MDtcbiAgICAvLyAgICAgJGVsZW1lbnQuZmluZChzZWxlY3RvcnMpLmZhZGVPdXQodGltaW5nLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAkZWxlbWVudC5maW5kKHNlbGVjdG9ycykucmVtb3ZlKCk7XG4gICAgLy8gICAgICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcygndHRhbS1sb2FkaW5nc3RhdGUnKTtcbiAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9LFxuICAgIC8vIGJ1dHRvbjogKCRlbCwgdGV4dCwgc3R5bGUpID0+IHtcbiAgICAvLyAgICAgaWYgKCEkZWwpIHtcbiAgICAvLyAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAkZWwuYWRkQ2xhc3MoJ3R0YW0tbG9hZGluZy1idXR0b24nKTtcbiAgICAvLyAgICAgJGVsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgY29uc3QgJHRoZUJ1dHRvbiA9ICQodGhpcyk7XG4gICAgLy8gICAgICAgICAkdGhlQnV0dG9uLmNsaWNrKCgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAkdGhlQnV0dG9uLmFkZENsYXNzKCd0dGFtLWxvYWRpbmdzdGF0ZScpO1xuICAgIC8vICAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLmFkZENsYXNzKGBtb2QtbG9hZGluZy0ke3N0eWxlfWApO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBpZiAodGV4dCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoYDxkaXYgY2xhc3M9XCJ0dGFtLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwidHRhbS1idXR0b24tbG9hZGluZ1wiPjwvZGl2PjwvZGl2PiR7dGV4dH1gKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5odG1sKGxvYWRpbmdDb250ZW50cyk7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIGlmICgkdGhlQnV0dG9uLmZpbmQoJy50dGFtLWJ1dHRvbi1sb2FkaW5nJykubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZSgnPGRpdiBjbGFzcz1cInR0YW0tYnV0dG9uLWxvYWRpbmctd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJ0dGFtLWJ1dHRvbi1sb2FkaW5nXCI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICR0aGVCdXR0b24ucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gfSxcbiAgICAvLyBib3g6ICgkZWwsIHRleHQsIHN0eWxlLCBwb3NpdGlvbikgPT4ge1xuICAgIC8vICAgICBpZiAoISRlbCkge1xuICAgIC8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRleHQgPSB0ZXh0IHx8ICcnO1xuICAgIC8vICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uID8gYG1vZC1ib3gtJHtwb3NpdGlvbn1gIDogJyc7XG5cbiAgICAvLyAgICAgJGVsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndHRhbS1sb2FkaW5nLWJveCB0dGFtLWxvYWRpbmdzdGF0ZScpO1xuICAgIC8vICAgICAgICAgaWYgKCQodGhpcykuZmluZCgnLnR0YW0tbG9hZGluZy1ib3gtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInR0YW0tbG9hZGluZy1ib3gtd3JhcHBlciAke3Bvc2l0aW9ufVwiPjxkaXYgY2xhc3M9XCJ0dGFtLWJveC1sb2FkaW5nXCI+PC9kaXY+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2Rpdj5gKTtcbiAgICAvLyAgICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgJGVsLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgIC8vIH0sXG4gICAgLy8gcGlsbDogKCRlbCwgdGV4dCwgc3R5bGUpID0+IHtcbiAgICAvLyAgICAgaWYgKCEkZWwpIHtcbiAgICAvLyAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoIXRleHQpIHtcbiAgICAvLyAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gdGV4dCBwYXNzZWQgaW4nKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgICRlbC5hZGRDbGFzcygndHRhbS1sb2FkaW5nLXBpbGwgdHRhbS1sb2FkaW5nc3RhdGUnKTtcbiAgICAvLyAgICAgaWYgKCRlbC5maW5kKCcudHRhbS1sb2FkaW5nLXBpbGwtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKGA8ZGl2IGNsYXNzPVwidHRhbS1sb2FkaW5nLXBpbGwtd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJ0dGFtLWxvYWRpbmctcGlsbC1zaGFwZVwiPjxkaXYgY2xhc3M9XCJ0dGFtLXBpbGwtbG9hZGluZ1wiPjwvZGl2PjxzcGFuPiR7dGV4dH08L3NwYW4+PC9kaXY+PC9kaXY+YCk7XG4gICAgLy8gICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAvLyAgICAgICAgICAgICAkZWwuYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICAkZWwucHJlcGVuZChsb2FkaW5nQ29udGVudHMpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgIC8vIH0sXG4vLyAgICAgc2tlbGV0b246ICgkZWwpID0+IHtcbi8vICAgICAgICAgaWYgKCEkZWwpIHtcbi8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgICRlbC5hZGRDbGFzcygndHRhbS1sb2FkaW5nLXNrZWxldG9uIHR0YW0tbG9hZGluZ3N0YXRlJyk7XG4vLyAgICAgICAgIGlmICgkZWwuZmluZCgnLnR0YW0tbG9hZGluZy1za2VsZXRvbi13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBjb250ZW50cyA9ICc8ZGl2IGNsYXNzPVwidHRhbS1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXJcIj48L2Rpdj4nO1xuLy8gICAgICAgICAgICAgcmV0dXJuICRlbC5wcmVwZW5kKGNvbnRlbnRzKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9LFxuLy8gfTtcbiJdfQ==