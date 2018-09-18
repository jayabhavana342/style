import React from 'react'
import BlockCode from '../components/block_code.jsx'
import InlineCode from '../components/inline_code.jsx'
import $ from 'jquery'
import { Stop, Button, Box, Pill, Skeleton } from '../../lib/loading.js'

$(function() {
    Button($('.example-button1'));
    Button($('.example-button2'), 'Loading');
    Button($('.example-button3'), 'Loading', 'white');
    Button($('.example-button4'), null, 'gray');
});

class Loading extends React.Component {
    // constructor() {
    //     super();
    //     console.log(SD.loading);
    //     // SD.loading.button($('.example-button1'));
    // }
    // componentDidMount() {
    //     console.log($);
    // }
    render() {
        return (
            <div className="sg-section sg-loading" id="loading-section" ref={this.props.innerRef}>
                <hr className="widerule" />
                <h1>Loading</h1>
                <p>
                    Use the loading functionality to make a loading animation and text appear somewhere on the screen. There are a few types of loading functionalities:
                </p>
                <ul>
                    <li><strong>Stop</strong> - stops loading</li>
                    <li><strong>Button</strong> - inside of a button</li>
                    <li><strong>Box</strong> - inside of a constricted box (like a card)</li>
                    <li><strong>Pill</strong> - inside of a large area (like a whole page)</li>
                    <li><strong>Skeleton</strong> - shows content is coming for cards (mostly)</li>
                </ul>
                <h3>General usage</h3>
                <p>
                    Since loading is an event-based component, this entire component relies on JS to handle the event work.
                </p>
                <hr />

                <div className="sub-section">
                    <h2>Stop Loading Animation</h2>
                    <p>Stops above loading animations, specific or broad.</p>
                    <p><strong>NOTE</strong>: This functionality accepts a callback</p>
                    <h3>Arguments</h3>
                    <ul>
                        <li><strong>$el</strong> (required): jQuery object (button element)</li>
                        <li><strong>callback</strong> (optional)</li>
                    </ul>
                    <h3>Example</h3>
                    <div className="code-example">
                        <p>Stop a specific animation on a page</p>
                        <BlockCode language='js'>
                            {
`SD.loading.stop($('#element'), () => {
    // do something (like load in content)
    document.getElementById('blah');
});`
                            }
                        </BlockCode>
                        <p>
                            Stop all animations existing with a broad selector (note, no callback for this example)
                        </p>
                        <BlockCode language='js'>
                            {
`SD.loading.stop($('.elements'));`
                            }
                        </BlockCode>
                    </div>

                    <hr />
                    <h2>Button loading animation</h2>
                    <p>Add a loading animation to a button</p>
                    <p><strong>NOTE</strong>: When using the text argument, the entire contents of the button gets replaced and there is no mechanism to revert back to the contents from before</p>
                    <h3>Arguments</h3>
                    <div className="code-example">
                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <button className="ttam-button loading-example-button example-button1">
                                    Click me!
                                </button>
                            </div>
                            <div>
                                <div className="sg-loading-sidebyside-buttonarea">
                                    Loading animation, same text
                                </div>
                                <InlineCode>SD.loading.button($('.button1'));</InlineCode>
                            </div>
                        </div>

                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <button className="ttam-button loading-example-button example-button2">
                                    Click me!
                                </button>
                            </div>
                            <div>
                                <div className="sg-loading-sidebyside-buttonarea">
                                    Loading animation, new text
                                </div>
                                <InlineCode>SD.loading.button($('.button2'), 'Loading');</InlineCode>
                            </div>
                        </div>

                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <button className="ttam-button loading-example-button example-button3">
                                    Click me!
                                </button>
                            </div>
                            <div>
                                <div className="sg-loading-sidebyside-buttonarea">
                                    Loading animation, new text, different style
                                </div>
                                <InlineCode>SD.loading.button($('.button3'), 'Loading', 'white');</InlineCode>
                            </div>
                        </div>

                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <button className="ttam-button loading-example-button example-button4">
                                    Click me!
                                </button>
                            </div>
                            <div>
                                <div className="sg-loading-sidebyside-buttonarea">
                                    Loading animation, same text, different style
                                </div>
                                <InlineCode>SD.loading.button($('.button4'), null, 'gray');</InlineCode>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading
