function escape(unsafeText) {
    const safeText = $('<div />').text(unsafeText).text();
    return safeText;
}

TTAM.loading = {
    stop: ($element, callback) => {
        const selectors = '.ttam-loading-box-wrapper, .ttam-loading-pill-wrapper, .ttam-button-loading-wrapper, .ttam-loading-skeleton-wrapper';
        const timing = 150;
        $element.find(selectors).fadeOut(timing, () => {
            $element.find(selectors).remove();
            $element.removeClass('ttam-loadingstate');
            if (typeof callback === 'function') {
                return callback();
            }
            return true;
        });
    },
    button: ($el, text, style) => {
        if (!$el) {
            throw new Error('no element passed in');
        }
        $el.addClass('ttam-loading-button');
        $el.each(function () {
            const $theButton = $(this);
            $theButton.click(() => {
                $theButton.addClass('ttam-loadingstate');
                if (style) {
                    $theButton.addClass(`mod-loading-${style}`);
                }
                if (text) {
                    const loadingContents = escape(`<div class="ttam-button-loading-wrapper"><div class="ttam-button-loading"></div></div>${text}`);
                    $theButton.html(loadingContents);
                } else if ($theButton.find('.ttam-button-loading').length === 0) {
                    const loadingContents = escape('<div class="ttam-button-loading-wrapper"><div class="ttam-button-loading"></div></div>');
                    $theButton.prepend(loadingContents);
                }
            });
        });
        return true;
    },
    box: ($el, text, style, position) => {
        if (!$el) {
            throw new Error('no element passed in');
        }
        text = text || '';
        position = position ? `mod-box-${position}` : '';

        $el.each(function () {
            $(this).addClass('ttam-loading-box ttam-loadingstate');
            if ($(this).find('.ttam-loading-box-wrapper').length === 0) {
                const loadingContents = escape(`<div class="ttam-loading-box-wrapper ${position}"><div class="ttam-box-loading"></div><span>${text}</span></div>`);
                if (style) {
                    $(this).addClass(`mod-loading-${style}`);
                }
                $el.prepend(loadingContents);
            }
        });
        return true;
    },
    pill: ($el, text, style) => {
        if (!$el) {
            throw new Error('no element passed in');
        }
        if (!text) {
            throw new Error('no text passed in');
        }

        $el.addClass('ttam-loading-pill ttam-loadingstate');
        if ($el.find('.ttam-loading-pill-wrapper').length === 0) {
            const loadingContents = escape(`<div class="ttam-loading-pill-wrapper"><div class="ttam-loading-pill-shape"><div class="ttam-pill-loading"></div><span>${text}</span></div></div>`);
            if (style) {
                $el.addClass(`mod-loading-${style}`);
            }
            $el.prepend(loadingContents);
        } else {
            return false;
        }
        return true;
    },
    skeleton: ($el) => {
        if (!$el) {
            throw new Error('no element passed in');
        }

        $el.addClass('ttam-loading-skeleton ttam-loadingstate');
        if ($el.find('.ttam-loading-skeleton-wrapper').length === 0) {
            const contents = '<div class="ttam-loading-skeleton-wrapper"></div>';
            return $el.prepend(contents);
        }
        return true;
    },
};
