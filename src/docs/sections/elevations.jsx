import React from 'react'
import BlockCode from '../components/block_code.jsx'
import InlineCode from '../components/inline_code.jsx'

class Elevations extends React.Component {
    render() {
        return (
            <div className="sg-section sg-elevations" id="elevations-section" ref={this.props.innerRef}>
                <hr className="widerule" />
                <h1>Elevations</h1>
                <p>
                    Elevations are containers that give a sense of depth using drop shadows. There are several levels of elevation depending on how emphasized the content is.
                </p>
                <p>
                    Note: by default, elevations should appear on a <InlineCode>$gray1b-colored</InlineCode> background.
                </p>
                <hr />

                <div className="sub-section">
                    <h3>Level 1</h3>
                    <div className="sd-card sd-elevation-1">level 1 elevation</div>
                    <BlockCode language='html'>
                        {
`<div class="sd-card sd-elevation-1">level 1 elevation</div>`
                        }
                    </BlockCode>

                    <h3>Level 2</h3>
                    <div className="sd-card sd-elevation-2">level 2 elevation</div>
                    <BlockCode language='html'>
                        {
`<div class="sd-card sd-elevation-2">level 2 elevation</div>`
                        }
                    </BlockCode>

                    <h3>Level 3</h3>
                    <div className="sd-card sd-elevation-3">level 3 elevation</div>
                    <BlockCode language='html'>
                        {
`<div class="sd-card sd-elevation-3">level 3 elevation</div>`
                        }
                    </BlockCode>

                    <h3>Level 4</h3>
                    <div className="sd-card sd-elevation-4">level 4 elevation</div>
                    <BlockCode language='html'>
                        {
`<div class="sd-card sd-elevation-4">level 4 elevation</div>`
                        }
                    </BlockCode>

                    <h3>Level 5</h3>
                    <div className="sd-card sd-elevation-5">level 5 elevation</div>
                    <BlockCode language='html'>
                        {
`<div class="sd-card sd-elevation-5">level 5 elevation</div>`
                        }
                    </BlockCode>
                </div>

            </div>
        );
    }
}

export default Elevations
