import $ from 'jquery';

class SDCard {
    constructor(options) {
        this.root = $(options.root);
        this.setUpDismiss();
    }

    setUpDismiss() {
        this.root.find('.js-sd-card-dismiss').click(() => {
            this.root.addClass('dismissed');

            this.root.one('transitionend', () => {
                this.root.addClass('hide');

                this.root.trigger('sdCard.dismissed');
            });
        });
    }
}
$(function() {
    $('.sd-card').each((index, el) => {
        new SDCard({
            root: el,
        });
    });
})
