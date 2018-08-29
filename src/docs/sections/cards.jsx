import React from 'react'
import BlockCode from '../components/block_code.jsx'
import InlineCode from '../components/inline_code.jsx'
import $ from 'jquery'
import '../../lib/js/ttam_card.js'

function cardsFunc() {
    $('#custom-card-dismiss').on('ttamCard.dismissed', () => {
        window.alert('I have been dismissed!');
    });

    $('.reset-card-button').click((event) => {
        event.target.parentNode.querySelector('.ttam-card').classList.remove('hide', 'dismissed');
    });
}

class Contents extends React.Component {
    componentDidMount() {
        cardsFunc();
    }
    componentDidUpdate() {
        cardsFunc();
    }
    render() {
        return (
            <div className="sg-section sg-cards" id="cards-section">
                <hr className="widerule" />
                <h1>Cards</h1>
                <p>
                    Note: Cards can have any elevation level. Elevations need to be specified each time you add a card.
                </p>
                <hr />

                <h3 className="subsection-title mod-shorttop">Example: Card 1 (24px padding on desktop and mobile)</h3>
                <div className="code-example">
                    <div className="ttam-card mod-card-1 ttam-elevation-2">
                        <h5>Card 1</h5>
                        <h6>24px padding on desktop, 24px padding on mobile</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque elementum, hendrerit dolor molestie, viverra erat. Fusce euismod velit quis nibh ornare, id luctus libero posuere. </p>
                    </div>
                    <BlockCode language='html'>
                        {
`<div class="ttam-card mod-card-1 ttam-elevation-2">
    <h5>Card 1</h5>
    ...
</div>`
                        }
                    </BlockCode>
                </div>

                <h3 className="subsection-title mod-shorttop">Example: Card 2 (32px padding on desktop, 24px padding on mobile)</h3>
                <div className="code-example">
                    <div className="ttam-card mod-card-2 ttam-elevation-2">
                        <h5>Card 2</h5>
                        <h6>32px padding on desktop, 24px padding on mobile</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque elementum, hendrerit dolor molestie, viverra erat. Fusce euismod velit quis nibh ornare, id luctus libero posuere.</p>
                    </div>
                    <BlockCode language='html'>
                        {
`<div class="ttam-card mod-card-2 ttam-elevation-2">
    <h5>Card 2</h5>
    ...
</div>`
                        }
                    </BlockCode>
                </div>

                <h3 className="subsection-title mod-shorttop">Example: Card 3 (40px padding on desktop, 24px padding on mobile)</h3>
                <div className="code-example">
                    <div className="ttam-card mod-card-3 ttam-elevation-2">
                        <h5>Card 3</h5>
                        <h6>40px padding on desktop, 24px padding on mobile</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque elementum, hendrerit dolor molestie, viverra erat. Fusce euismod velit quis nibh ornare, id luctus libero posuere.</p>
                    </div>
                    <BlockCode language='html'>
                        {
`<div class="ttam-card mod-card-2 ttam-elevation-2">
    <h5>Card 2</h5>
    ...
</div>`
                        }
                    </BlockCode>
                </div>

                <h2 className="subsection-title">Cards with Close (Dismiss) Icons</h2>
                <hr />
                <p>The close (x) icon will be in the top right.</p>
                <p>
                    If you don't need fancy behavior after the card is dismissed, you just need to include a close button with the
                    <InlineCode>js-ttam-card-dismiss</InlineCode> class.
                </p>
                <div className="code-example">
                    <div className="ttam-card mod-card-2 ttam-elevation-3">
                        <button type="button" className="unbutton dismiss-button js-ttam-card-dismiss">
                            <img src='img/close.svg' alt='Close Menu Icon' alt="Close" />
                        </button>
                        <div className="content">
                            <h5>We've improved our Traits reports</h5>
                            <p>We've redesigned the design of our Traits reports as part of our ongoing improvements. Learn more about the genetics behind your traits with these updated reports.</p>
                        </div>
                    </div>

                    <button type="button" className="ttam-button reset-card-button">Reset the card</button>

                    <BlockCode language='html'>
                        {
`<div class="ttam-card mod-card-2 ttam-elevation-3">
    <button type="button" class="unbutton dismiss-button js-ttam-card-dismiss">
        <img class="dismiss-icon" src="/static/img/components/dismiss_icon.svg" alt="Close" />
    </button>
   ...
</div>`
                        }
                    </BlockCode>
                </div>

                <h2 className="subsection-title">Close functionality with a callback</h2>
                <p>
                    If you do need to add custom handlers after the card is closed, you can hook into the <InlineCode>ttamCard.dismissed</InlineCode> event, which fires when the card is finished closing:
                </p>
                <div className="code-example">
                    <div className="ttam-card mod-card-2 ttam-elevation-3" id="custom-card-dismiss">
                        <button type="button" className="unbutton dismiss-button js-ttam-card-dismiss">
                            <img src='img/close.svg' alt='Close Menu Icon' alt="Close" />
                        </button>
                        <div className="content">
                            <h5>We've improved our Traits reports</h5>
                            <p>We've redesigned the design of our Traits reports as part of our ongoing improvements. Learn more about the genetics behind your traits with these updated reports.</p>
                        </div>
                    </div>

                    <button type="button" className="ttam-button reset-card-button">Reset the card</button>

                    <BlockCode language='html'>
                        {
`<div class="ttam-card mod-card-2 ttam-elevation-3" id="custom-card-dismiss">
    <button type="button" class="unbutton dismiss-button js-ttam-card-dismiss">
        <img class="dismiss-icon" src="/static/img/components/dismiss_icon.svg" alt="Close" />
    </button>
    ...
</div>

<script>
TTAM.ready(function() {
    $('#custom-card-dismiss').on('ttamCard.dismissed', () => {
        window.alert('I have been dismissed!');
    });
});
</script>`
                        }
                    </BlockCode>
                </div>

                <h2 className="subsection-title">Cards with Action Icon Buttons</h2>
                <hr />
                <p>
                    The icon button will be in the top right of the content box. In this example, the gear icon button is the action icon.
                </p>
                <div className="code-example">
                    <div className="ttam-card mod-card-3 ttam-elevation-2">
                        <button className="action-icon sample-card-icon-button ttam-icon-button mod-compact">
                            <svg><use xlinkHref="img/icon-set.svg#gear" /></svg>
                            <span>Settings</span>
                        </button>
                        <h5>We've improved our Traits reports</h5>
                        <p>We've redesigned the design of our Traits reports as part of our ongoing improvements. Learn more about the genetics behind your traits with these updated reports.</p>
                    </div>
                    <BlockCode language='html'>
                        {
`<div class="ttam-card mod-card-3 ttam-elevation-2">
    <button class="action-icon sample-card-icon-button ttam-icon-button mod-compact">
        <svg><use xlink:href="/static/img/icons/icon-set.svg#gear" /></svg>
        <span>Settings</span>
    </button>
    <h5>We've improved our Traits reports</h5>
    ...
</div>`
                        }
                    </BlockCode>
                </div>

                <h2 className="subsection-title">Cards with Cards with Titles and Inline Presentational Icons</h2>
                <hr />
                <p>
                    If you have a lot of text that will overflow into an inline icon, use
                    <InlineCode>card-header</InlineCode>,
                    <InlineCode>card-title</InlineCode>, and
                    <InlineCode>icon</InlineCode> to make the text wrap to the next line.
                </p>

                <div className="code-example">
                    <div className="ttam-card mod-card-3 ttam-elevation-2">
                        <div className="card-header">
                            <h5 className="card-title">This is a really long title that appears to go on forever so we can test overflowing This is a really long title that appears to go on forever so we can test overflowing</h5>
                            <img className="icon blood-clots-icon" src="img/blood_clots.svg" alt="Blood Clots" />
                        </div>
                        <p>We've redesigned the design of our Traits reports as part of our ongoing improvements. Learn more about the genetics behind your traits with these updated reports.</p>
                    </div>
                    <BlockCode language='html'>
                        {
`<div class="ttam-card mod-card-3 ttam-elevation-2">
    <div class="card-header">
        <h5 class="card-title">This is a really long title that appears to go on forever so we can test overflowing This is a really long title that appears to go on forever so we can test overflowing</h5>
        <img class="icon blood-clots-icon" src="/static/img/research/conditions/blood_clots.svg" alt="Blood Clots" />
    </div>
    ...
</div>`
                        }
                    </BlockCode>
                </div>

                <h2 className="subsection-title">Cards That Function as Links</h2>
                <hr />
                <p>
                    If the card has a button or call-to-action link on it, it should not be a link. Sometimes, however, the entire card will function as a link. In this case, the card element should be an <InlineCode>{`<a>`}</InlineCode> tag and there will be a darkened shadow hover effect.
                </p>
                <div className="code-example">
                    <a className="ttam-card mod-card-3 ttam-elevation-3">
                        <h5>We've improved our Traits reports</h5>

                        <p>We've redesigned the design of our Traits reports as part of our ongoing improvements. Learn more about the genetics behind your traits with these updated reports.</p>
                    </a>
                    <BlockCode language='html'>
                        {
`<a class="ttam-card mod-card-3 ttam-elevation-3">
    ...
</a>`
                        }
                    </BlockCode>
                </div>

                <h2 className="subsection-title">Mobile Cards with Side Gutters</h2>
                <hr />
                <p>
                    By default, a card on mobile will be full-bleed (the edges will extend to the edge of the container). You can add space to the left and right by adding the <InlineCode>mod-has-gutter</InlineCode> class.
                </p>
                <p>
                    Note: This configuration only affects mobile screen sizes!
                </p>
                <p>
                    Shrink your browser window to smaller than 768px or use browser dev tools to simulate a phone screen to see this in action:
                </p>
                <div className="code-example">
                    <a className="ttam-card mod-card-2 ttam-elevation-4 mod-has-gutter">
                        <h5>This card has an 8px gutter to the left and right on mobile</h5>
                        <p>We've redesigned the design of our Traits reports as part of our ongoing improvements. Learn more about the genetics behind your traits with these updated reports.</p>
                    </a>
                </div>
                <p>compared to</p>
                <div className="code-example">
                    <a className="ttam-card mod-card-2 ttam-elevation-4">
                        <h5>This card is a normal full bleed card on mobile</h5>
                        <p>We've redesigned the design of our Traits reports as part of our ongoing improvements. Learn more about the genetics behind your traits with these updated reports.</p>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contents
