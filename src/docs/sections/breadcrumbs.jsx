import React from 'react'
import BlockCode from '../components/block_code.jsx'
import InlineCode from '../components/inline_code.jsx'

class Breadcrumbs extends React.Component {
    render() {
        return (
            <div className="sg-section sg-breadcrumbs" id="breadcrumbs-section" ref={this.props.innerRef}>
                <hr className="widerule" />
                <h1>Breadcrumbs</h1>
                <p>
                    Explicit reverse navigation located at the top of pages
                </p>
                <p>
                    <strong>Note: This is a YouDot specific component, only styling is included</strong>
                </p>
                <hr />
                <h3>YouDot usage</h3>
                <p className="mod-headroom">Simply just include the partial wherever needed</p>
                <BlockCode language='python'>
                    {
`{% include "partials/navigation/breadcrumbs.dtml" %}`
                    }
                </BlockCode>

                <h3>Other usage</h3>
                <p>
                    For use in repositories other than YouDot, a helper to handle the logic in the fashion of the YouDot partial must be created. For reference, that partial can be found at:
                    <InlineCode>you/you/templates/partials/navigation/breadcrumbs.dtml</InlineCode>
                </p>

                <hr />
                <h2>Examples</h2>
                <p>These examples only show the styling of the breadcrumbs, additional logic is required to make this robust</p>

                <h3 className="subsection-title mod-shorttop">Solo breadcrumb</h3>
                <p>For when the directory structure is only 1 level deep</p>
                <p><strong>Note:</strong> This example assumes a YouDot path structure</p>
                <div className="code-example">
                    <nav class="sd-breadcrumbs-nav" aria-label="breadcrumb">
                        <ol class="sd-breadcrumbs">
                            <li class="sd-breadcrumb solo-breadcrumb">
                                <a class="sd-breadcrumb-link" href="/styleguide/">
                                    Styleguide
                                </a>
                            </li>
                        </ol>
                    </nav>

                    <BlockCode language='html'>
                        {
`<nav class="sd-breadcrumbs-nav" aria-label="breadcrumb">
    <ol class="sd-breadcrumbs">
        <li class="sd-breadcrumb solo-breadcrumb">
            <a class="sd-breadcrumb-link" href="/styleguide/">
                Styleguide
            </a>
        </li>
    </ol>
</nav>`
                        }
                    </BlockCode>
                </div>

                <h3 className="subsection-title mod-shorttop">Multi-depth Breadcrumbs</h3>
                <p>For when the directory structure is traversed more than 1 level</p>
                <p><strong>Note:</strong> This example assumes a YouDot path structure</p>
                <div className="code-example">
                    <nav className="sd-breadcrumbs-nav" aria-label="breadcrumb">
                        <ol className="sd-breadcrumbs">
                            <li className="sd-breadcrumb">
                                <a className="sd-breadcrumb-link" href="/styleguide/" data-ga-click-event-bool="true" data-ga-click-event-category="youdot_navigation" data-ga-click-event-action="breadcrumb_click" data-ga-click-event-label="styleguide" data-ga-click-event-value="0">
                                    Styleguide
                                </a>
                            </li>
                            <li className="sd-breadcrumb">
                                <a className="sd-breadcrumb-link" href="/styleguide/components/" data-ga-click-event-bool="true" data-ga-click-event-category="youdot_navigation" data-ga-click-event-action="breadcrumb_click" data-ga-click-event-label="component_library" data-ga-click-event-value="0">
                                    Component Library
                                </a>
                            </li>
                        </ol>
                    </nav>

                    <BlockCode language='html'>
                        {
`<nav className="sd-breadcrumbs-nav" aria-label="breadcrumb">
    <ol className="sd-breadcrumbs">
        <li className="sd-breadcrumb">
            <a className="sd-breadcrumb-link" href="/styleguide/" data-ga-click-event-bool="true" data-ga-click-event-category="youdot_navigation" data-ga-click-event-action="breadcrumb_click" data-ga-click-event-label="styleguide" data-ga-click-event-value="0">
                Styleguide
            </a>
        </li>
        <li className="sd-breadcrumb">
            <a className="sd-breadcrumb-link" href="/styleguide/components/" data-ga-click-event-bool="true" data-ga-click-event-category="youdot_navigation" data-ga-click-event-action="breadcrumb_click" data-ga-click-event-label="component_library" data-ga-click-event-value="0">
                Component Library
            </a>
        </li>
    </ol>
</nav>`
                        }
                    </BlockCode>
                </div>
            </div>
        );
    }
}

export default Breadcrumbs
