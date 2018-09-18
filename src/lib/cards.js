import $ from 'jquery';

class TTAMCard {
    constructor(options) {
        this.root = $(options.root);
        this.setUpDismiss();
    }

    setUpDismiss() {
        this.root.find('.js-ttam-card-dismiss').click(() => {
            this.root.addClass('dismissed');

            this.root.one('transitionend', () => {
                this.root.addClass('hide');

                this.root.trigger('ttamCard.dismissed');
            });
        });
    }
}
$(function() {
    $('.ttam-card').each((index, el) => {
        new TTAMCard({
            root: el,
        });
    });
})
