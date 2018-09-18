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
      $theButton.addClass('ttam-loadingstate');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJlc2NhcGUiLCJ1bnNhZmVUZXh0Iiwic2FmZVRleHQiLCJ0ZXh0IiwibG9hZGluZ1N0b3AiLCIkZWxlbWVudCIsImNhbGxiYWNrIiwic2VsZWN0b3JzIiwidGltaW5nIiwiZmluZCIsImZhZGVPdXQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImxvYWRpbmdCdXR0b24iLCIkZWwiLCJzdHlsZSIsIkVycm9yIiwiYWRkQ2xhc3MiLCJlYWNoIiwiJHRoZUJ1dHRvbiIsImNsaWNrIiwibG9hZGluZ0NvbnRlbnRzIiwiaHRtbCIsImxlbmd0aCIsInByZXBlbmQiLCJsb2FkaW5nQm94IiwicG9zaXRpb24iLCJsb2FkaW5nUGlsbCIsImxvYWRpbmdTa2VsZXRvbiIsImNvbnRlbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIlN0b3AiLCJCdXR0b24iLCJCb3giLCJQaWxsIiwiU2tlbGV0b24iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxVQUFoQixFQUE0QjtBQUN4QixNQUFNQyxRQUFRLEdBQUcscUJBQUUsU0FBRixFQUFhQyxJQUFiLENBQWtCRixVQUFsQixFQUE4QkUsSUFBOUIsRUFBakI7QUFDQSxTQUFPRCxRQUFQO0FBQ0g7O0FBRUQsU0FBU0UsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQ3JDLE1BQU1DLFNBQVMsR0FBRyxxSEFBbEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsR0FBZjtBQUVBSCxFQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBY0YsU0FBZCxFQUF5QkcsT0FBekIsQ0FBaUNGLE1BQWpDLEVBQXlDLFlBQU07QUFDM0NILElBQUFBLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjRixTQUFkLEVBQXlCSSxNQUF6QjtBQUNBTixJQUFBQSxRQUFRLENBQUNPLFdBQVQsQ0FBcUIsbUJBQXJCOztBQUNBLFFBQUksT0FBT04sUUFBUCxLQUFvQixV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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5mdW5jdGlvbiBlc2NhcGUodW5zYWZlVGV4dCkge1xuICAgIGNvbnN0IHNhZmVUZXh0ID0gJCgnPGRpdiAvPicpLnRleHQodW5zYWZlVGV4dCkudGV4dCgpO1xuICAgIHJldHVybiBzYWZlVGV4dDtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ1N0b3AoJGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gJy50dGFtLWxvYWRpbmctYm94LXdyYXBwZXIsIC50dGFtLWxvYWRpbmctcGlsbC13cmFwcGVyLCAudHRhbS1idXR0b24tbG9hZGluZy13cmFwcGVyLCAudHRhbS1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXInO1xuICAgIGNvbnN0IHRpbWluZyA9IDE1MDtcblxuICAgICRlbGVtZW50LmZpbmQoc2VsZWN0b3JzKS5mYWRlT3V0KHRpbWluZywgKCkgPT4ge1xuICAgICAgICAkZWxlbWVudC5maW5kKHNlbGVjdG9ycykucmVtb3ZlKCk7XG4gICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCd0dGFtLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ0J1dHRvbigkZWwsIHRleHQsIHN0eWxlKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygndHRhbS1sb2FkaW5nLWJ1dHRvbicpO1xuICAgICRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgJHRoZUJ1dHRvbiA9ICQodGhpcyk7XG4gICAgICAgICR0aGVCdXR0b24uY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgJHRoZUJ1dHRvbi5hZGRDbGFzcygndHRhbS1sb2FkaW5nc3RhdGUnKTtcbiAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInR0YW0tYnV0dG9uLWxvYWRpbmctd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJ0dGFtLWJ1dHRvbi1sb2FkaW5nXCI+PC9kaXY+PC9kaXY+JHt0ZXh0fWApO1xuICAgICAgICAgICAgICAgICR0aGVCdXR0b24uaHRtbChsb2FkaW5nQ29udGVudHMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkdGhlQnV0dG9uLmZpbmQoJy50dGFtLWJ1dHRvbi1sb2FkaW5nJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKCc8ZGl2IGNsYXNzPVwidHRhbS1idXR0b24tbG9hZGluZy13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInR0YW0tYnV0dG9uLWxvYWRpbmdcIj48L2Rpdj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxvYWRpbmdCb3goJGVsLCB0ZXh0LCBzdHlsZSwgcG9zaXRpb24pIHtcbiAgICBpZiAoISRlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgfVxuICAgIHRleHQgPSB0ZXh0IHx8ICcnO1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPyBgbW9kLWJveC0ke3Bvc2l0aW9ufWAgOiAnJztcblxuICAgICRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndHRhbS1sb2FkaW5nLWJveCB0dGFtLWxvYWRpbmdzdGF0ZScpO1xuICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCcudHRhbS1sb2FkaW5nLWJveC13cmFwcGVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoYDxkaXYgY2xhc3M9XCJ0dGFtLWxvYWRpbmctYm94LXdyYXBwZXIgJHtwb3NpdGlvbn1cIj48ZGl2IGNsYXNzPVwidHRhbS1ib3gtbG9hZGluZ1wiPjwvZGl2PjxzcGFuPiR7dGV4dH08L3NwYW4+PC9kaXY+YCk7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKGBtb2QtbG9hZGluZy0ke3N0eWxlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGVsLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbG9hZGluZ1BpbGwoJGVsLCB0ZXh0LCBzdHlsZSkge1xuICAgIGlmICghJGVsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICB9XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gdGV4dCBwYXNzZWQgaW4nKTtcbiAgICB9XG5cbiAgICAkZWwuYWRkQ2xhc3MoJ3R0YW0tbG9hZGluZy1waWxsIHR0YW0tbG9hZGluZ3N0YXRlJyk7XG4gICAgaWYgKCRlbC5maW5kKCcudHRhbS1sb2FkaW5nLXBpbGwtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoYDxkaXYgY2xhc3M9XCJ0dGFtLWxvYWRpbmctcGlsbC13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInR0YW0tbG9hZGluZy1waWxsLXNoYXBlXCI+PGRpdiBjbGFzcz1cInR0YW0tcGlsbC1sb2FkaW5nXCI+PC9kaXY+PHNwYW4+JHt0ZXh0fTwvc3Bhbj48L2Rpdj48L2Rpdj5gKTtcbiAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAkZWwuYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgJGVsLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBsb2FkaW5nU2tlbGV0b24oJGVsKSB7XG4gICAgaWYgKCEkZWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IHBhc3NlZCBpbicpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcygndHRhbS1sb2FkaW5nLXNrZWxldG9uIHR0YW0tbG9hZGluZ3N0YXRlJyk7XG4gICAgaWYgKCRlbC5maW5kKCcudHRhbS1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXInKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgY29udGVudHMgPSAnPGRpdiBjbGFzcz1cInR0YW0tbG9hZGluZy1za2VsZXRvbi13cmFwcGVyXCI+PC9kaXY+JztcbiAgICAgICAgcmV0dXJuICRlbC5wcmVwZW5kKGNvbnRlbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFN0b3A6IGxvYWRpbmdTdG9wLFxuICAgIEJ1dHRvbjogbG9hZGluZ0J1dHRvbixcbiAgICBCb3g6IGxvYWRpbmdCb3gsXG4gICAgUGlsbDogbG9hZGluZ1BpbGwsXG4gICAgU2tlbGV0b246IGxvYWRpbmdTa2VsZXRvblxufTtcblxuXG4vLyBTRC5sb2FkaW5nID0ge1xuICAgIC8vIHN0b3A6ICgkZWxlbWVudCwgY2FsbGJhY2spID0+IHtcbiAgICAvLyAgICAgY29uc3Qgc2VsZWN0b3JzID0gJy50dGFtLWxvYWRpbmctYm94LXdyYXBwZXIsIC50dGFtLWxvYWRpbmctcGlsbC13cmFwcGVyLCAudHRhbS1idXR0b24tbG9hZGluZy13cmFwcGVyLCAudHRhbS1sb2FkaW5nLXNrZWxldG9uLXdyYXBwZXInO1xuICAgIC8vICAgICBjb25zdCB0aW1pbmcgPSAxNTA7XG4gICAgLy8gICAgICRlbGVtZW50LmZpbmQoc2VsZWN0b3JzKS5mYWRlT3V0KHRpbWluZywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgJGVsZW1lbnQuZmluZChzZWxlY3RvcnMpLnJlbW92ZSgpO1xuICAgIC8vICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3R0YW0tbG9hZGluZ3N0YXRlJyk7XG4gICAgLy8gICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfSxcbiAgICAvLyBidXR0b246ICgkZWwsIHRleHQsIHN0eWxlKSA9PiB7XG4gICAgLy8gICAgIGlmICghJGVsKSB7XG4gICAgLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgJGVsLmFkZENsYXNzKCd0dGFtLWxvYWRpbmctYnV0dG9uJyk7XG4gICAgLy8gICAgICRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0ICR0aGVCdXR0b24gPSAkKHRoaXMpO1xuICAgIC8vICAgICAgICAgJHRoZUJ1dHRvbi5jbGljaygoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgJHRoZUJ1dHRvbi5hZGRDbGFzcygndHRhbS1sb2FkaW5nc3RhdGUnKTtcbiAgICAvLyAgICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgJHRoZUJ1dHRvbi5hZGRDbGFzcyhgbW9kLWxvYWRpbmctJHtzdHlsZX1gKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgaWYgKHRleHQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NvbnRlbnRzID0gZXNjYXBlKGA8ZGl2IGNsYXNzPVwidHRhbS1idXR0b24tbG9hZGluZy13cmFwcGVyXCI+PGRpdiBjbGFzcz1cInR0YW0tYnV0dG9uLWxvYWRpbmdcIj48L2Rpdj48L2Rpdj4ke3RleHR9YCk7XG4gICAgLy8gICAgICAgICAgICAgICAgICR0aGVCdXR0b24uaHRtbChsb2FkaW5nQ29udGVudHMpO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSBpZiAoJHRoZUJ1dHRvbi5maW5kKCcudHRhbS1idXR0b24tbG9hZGluZycpLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoJzxkaXYgY2xhc3M9XCJ0dGFtLWJ1dHRvbi1sb2FkaW5nLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwidHRhbS1idXR0b24tbG9hZGluZ1wiPjwvZGl2PjwvZGl2PicpO1xuICAgIC8vICAgICAgICAgICAgICAgICAkdGhlQnV0dG9uLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xuICAgIC8vIH0sXG4gICAgLy8gYm94OiAoJGVsLCB0ZXh0LCBzdHlsZSwgcG9zaXRpb24pID0+IHtcbiAgICAvLyAgICAgaWYgKCEkZWwpIHtcbiAgICAvLyAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBwYXNzZWQgaW4nKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0ZXh0ID0gdGV4dCB8fCAnJztcbiAgICAvLyAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA/IGBtb2QtYm94LSR7cG9zaXRpb259YCA6ICcnO1xuXG4gICAgLy8gICAgICRlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3R0YW0tbG9hZGluZy1ib3ggdHRhbS1sb2FkaW5nc3RhdGUnKTtcbiAgICAvLyAgICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy50dGFtLWxvYWRpbmctYm94LXdyYXBwZXInKS5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ29udGVudHMgPSBlc2NhcGUoYDxkaXYgY2xhc3M9XCJ0dGFtLWxvYWRpbmctYm94LXdyYXBwZXIgJHtwb3NpdGlvbn1cIj48ZGl2IGNsYXNzPVwidHRhbS1ib3gtbG9hZGluZ1wiPjwvZGl2PjxzcGFuPiR7dGV4dH08L3NwYW4+PC9kaXY+YCk7XG4gICAgLy8gICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoYG1vZC1sb2FkaW5nLSR7c3R5bGV9YCk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICRlbC5wcmVwZW5kKGxvYWRpbmdDb250ZW50cyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyB9LFxuICAgIC8vIHBpbGw6ICgkZWwsIHRleHQsIHN0eWxlKSA9PiB7XG4gICAgLy8gICAgIGlmICghJGVsKSB7XG4gICAgLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKCF0ZXh0KSB7XG4gICAgLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIHRleHQgcGFzc2VkIGluJyk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICAkZWwuYWRkQ2xhc3MoJ3R0YW0tbG9hZGluZy1waWxsIHR0YW0tbG9hZGluZ3N0YXRlJyk7XG4gICAgLy8gICAgIGlmICgkZWwuZmluZCgnLnR0YW0tbG9hZGluZy1waWxsLXdyYXBwZXInKS5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGxvYWRpbmdDb250ZW50cyA9IGVzY2FwZShgPGRpdiBjbGFzcz1cInR0YW0tbG9hZGluZy1waWxsLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwidHRhbS1sb2FkaW5nLXBpbGwtc2hhcGVcIj48ZGl2IGNsYXNzPVwidHRhbS1waWxsLWxvYWRpbmdcIj48L2Rpdj48c3Bhbj4ke3RleHR9PC9zcGFuPjwvZGl2PjwvZGl2PmApO1xuICAgIC8vICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgLy8gICAgICAgICAgICAgJGVsLmFkZENsYXNzKGBtb2QtbG9hZGluZy0ke3N0eWxlfWApO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgJGVsLnByZXBlbmQobG9hZGluZ0NvbnRlbnRzKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyB9LFxuLy8gICAgIHNrZWxldG9uOiAoJGVsKSA9PiB7XG4vLyAgICAgICAgIGlmICghJGVsKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgcGFzc2VkIGluJyk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICAkZWwuYWRkQ2xhc3MoJ3R0YW0tbG9hZGluZy1za2VsZXRvbiB0dGFtLWxvYWRpbmdzdGF0ZScpO1xuLy8gICAgICAgICBpZiAoJGVsLmZpbmQoJy50dGFtLWxvYWRpbmctc2tlbGV0b24td3JhcHBlcicpLmxlbmd0aCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgY29uc3QgY29udGVudHMgPSAnPGRpdiBjbGFzcz1cInR0YW0tbG9hZGluZy1za2VsZXRvbi13cmFwcGVyXCI+PC9kaXY+Jztcbi8vICAgICAgICAgICAgIHJldHVybiAkZWwucHJlcGVuZChjb250ZW50cyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfSxcbi8vIH07XG4iXX0=