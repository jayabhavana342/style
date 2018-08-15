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

                <div className="sub-section">
                    <h2 className="subsection-title">Card 1 (24px padding on desktop and mobile)</h2>

                </div>
            </div>
        );
    }
}

export default Contents
