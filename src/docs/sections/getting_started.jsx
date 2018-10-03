import React from 'react'
import BlockCode from '../components/block_code.jsx'
import InlineCode from '../components/inline_code.jsx'
import $ from 'jquery'

class GettingStarted extends React.Component {
    render() {
        return (
            <section className="sg-section sg-getting-started" ref={this.props.innerRef}>
                <h1>Getting Started</h1>
                <p>
                    23andMe's design system's purpose is to simplify the usage of global components in the following ways:
                </p>
                <ul>
                    <li>Containing familiar, re-usable, fully-contained snippets of code and references to styling to achieve the desired results</li>
                    <li>Providing a single source of truth</li>
                    <li>Distribute the source methodically</li>
                </ul>

                <h3>Installation</h3>
                <p>
                    To use StyleDot in your repo, just simply install it via NPM:
                </p>
                <InlineCode>npm install styledot --save-dev</InlineCode>

                <h3>Javascript usage</h3>
                <p>
                    Once installed, you'll have access to all design system components. Just import and use. There are import instructions and usage examples for each component in their specific sections.
                </p>

                <h3>SCSS usage</h3>
                <p>
                    Once installed, you can import from your entry point and gain access to all of the classes and mixins using the following syntax:
                </p>
                <InlineCode>@import "../../node_modules/styledot/scss/main";</InlineCode>

                <h3>Repository</h3>
                <p>
                    To observe and contribute, check out <a href="https://www.github.com/23andme/style/" alt="StyleDot on Github">StyleDot on Github</a>
                </p>
            </section>
        );
    }
}

export default GettingStarted
