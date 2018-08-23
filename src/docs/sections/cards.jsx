import React from 'react'
import BlockCode from '../components/block_code.jsx'
import InlineCode from '../components/inline_code.jsx'

class Contents extends React.Component {
    render() {
        return (
            <div className="sg-section sg-cards">
                <hr className="widerule" />
                <h1>Cards</h1>
                <p>
                    Note: Cards can have any elevation level. Elevations need to be specified each time you add a card.
                </p>
                <hr />

                <h2 className="subsection-title mod-shorttop">Example: Card 1 (24px padding on desktop and mobile)</h2>
                <div className="sg-colors-code-example">
                    <div className="cards-container">
                        <div className="ttam-card mod-card-1 ttam-elevation-2">
                            <h5>Card 1</h5>
                            <h6>24px padding on desktop, 24px padding on mobile</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque elementum, hendrerit dolor molestie, viverra erat. Fusce euismod velit quis nibh ornare, id luctus libero posuere. </p>
                        </div>
                    </div>
                </div>
                <BlockCode language='html' test_class='test-comp-colors-code'>
                    {
`<div class="ttam-card mod-card-1 ttam-elevation-2">
    <h5>Card 1</h5>
    ...
</div>`
                    }
                </BlockCode>

                <h2 className="subsection-title mod-shorttop">Example: Card 2 (32px padding on desktop, 24px padding on mobile)</h2>
                <div className="sg-colors-code-example">
                    <div className="cards-container">
                        <div className="ttam-card mod-card-2 ttam-elevation-2">
                            <h5>Card 2</h5>
                            <h6>32px padding on desktop, 24px padding on mobile</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque elementum, hendrerit dolor molestie, viverra erat. Fusce euismod velit quis nibh ornare, id luctus libero posuere.</p>
                        </div>
                    </div>
                </div>
                <BlockCode language='html' test_class='test-comp-colors-code'>
                    {
`<div class="ttam-card mod-card-2 ttam-elevation-2">
    <h5>Card 2</h5>
    ...
</div>`
                    }
                </BlockCode>

                <h2 className="subsection-title mod-shorttop">Example: Card 3 (40px padding on desktop, 24px padding on mobile)</h2>
                <div className="sg-colors-code-example">
                    <div className="cards-container">
                        <div className="ttam-card mod-card-3 ttam-elevation-2">
                            <h5>Card 3</h5>
                            <h6>40px padding on desktop, 24px padding on mobile</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec neque elementum, hendrerit dolor molestie, viverra erat. Fusce euismod velit quis nibh ornare, id luctus libero posuere.</p>
                        </div>
                    </div>
                </div>
                <BlockCode language='html' test_class='test-comp-colors-code'>
                    {
`<div class="ttam-card mod-card-2 ttam-elevation-2">
    <h5>Card 2</h5>
    ...
</div>`
                    }
                </BlockCode>

                <h2 className="subsection-title">Cards with Close (Dismiss) Icons</h2>
                <p>The close (x) icon will be in the top right.</p>
                <p>
                    If you don't need fancy behavior after the card is dismissed, you just need to include a close button with the
                    <InlineCode>js-ttam-card-dismiss</InlineCode> class.
                </p>
                <hr />
                <div className="ttam-card mod-card-2 ttam-elevation-3">
                    <button type="button" className="unbutton dismiss-button js-ttam-card-dismiss">
                        <img src='img/close.svg' alt='Close Menu Icon' alt="Close" />
                    </button>
                    <div className="content">
                        <h5>We've improved our Traits reports</h5>
                        <p>We've redesigned the design of our Traits reports as part of our ongoing improvements. Learn more about the genetics behind your traits with these updated reports.</p>
                    </div>
                </div>
                <BlockCode language='html' test_class='test-comp-colors-code'>
                    {
`<div class="ttam-card mod-card-2 ttam-elevation-3">
    <button type="button" class="unbutton dismiss-button js-ttam-card-dismiss">
        <img class="dismiss-icon" src="/static/img/components/dismiss_icon.svg" alt="Close" />
    </button>
   ...
</div>`
                    }
                </BlockCode>
                <p>
                    If you do need to add custom handlers after the card is closed, you can hook into the ttamCard.dismissed event, which fires when the card is finished closing:
                </p>
            </div>
        );
    }
}

export default Contents
