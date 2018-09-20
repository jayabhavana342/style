import $ from 'jquery';

function escape(unsafeText) {
    const safeText = $('<div />').text(unsafeText).text();
    return safeText;
}

function stop($element, callback) {
    const selectors = '.sd-loading-box-wrapper, .sd-loading-pill-wrapper, .sd-button-loading-wrapper, .sd-loading-skeleton-wrapper';
    const timing = 150;

    $element.find(selectors).fadeOut(timing, () => {
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
        const $theButton = $(this);
        $theButton.click(() => {
            const display = $theButton.css('display');
            if ((display === 'inline-block') || (display === 'inline-flex')) {
                $theButton.addClass('mod-loading-button-inline');
            }
            if (style) {
                $theButton.addClass(`mod-loading-${style}`);
            }
            if (text) {
                const loadingContents = escape(`<div class="sd-button-loading-wrapper"><div class="sd-button-loading"></div></div>${text}`);
                $theButton.html(loadingContents);
            } else if ($theButton.find('.sd-button-loading').length === 0) {
                const loadingContents = escape('<div class="sd-button-loading-wrapper"><div class="sd-button-loading"></div></div>');
                $theButton.prepend(loadingContents);
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
    position = position ? `mod-box-${position}` : '';

    $el.each(function () {
        $(this).addClass('sd-loading-box sd-loadingstate');
        if ($(this).find('.sd-loading-box-wrapper').length === 0) {
            const loadingContents = escape(`<div class="sd-loading-box-wrapper ${position}"><div class="sd-box-loading"></div><span>${text}</span></div>`);
            if (style) {
                $(this).addClass(`mod-loading-${style}`);
            }
            $el.prepend(loadingContents);
        };
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
        const loadingContents = escape(`<div class="sd-loading-pill-wrapper"><div class="sd-loading-pill-shape"><div class="sd-pill-loading"></div><span>${text}</span></div></div>`);
        if (style) {
            $el.addClass(`mod-loading-${style}`);
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
        const contents = '<div class="sd-loading-skeleton-wrapper"></div>';
        return $el.prepend(contents);
    }
    return true;
}

export {
    stop,
    button,
    box,
    pill,
    skeleton
}
