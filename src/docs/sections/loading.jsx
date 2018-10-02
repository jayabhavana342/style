import React from 'react';
import BlockCode from '../components/block_code.jsx';
import InlineCode from '../components/inline_code.jsx';
import $ from 'jquery';
import { stop, button, box, pill, skeleton } from '../../lib/loading';

$(function() {
    // Button
    button($('.example-button1'));
    button($('.example-button2'), 'Loading');
    button($('.example-button3'), 'Loading', 'white');
    button($('.example-button4'), null, 'gray');

    // box
    $('.testcard-all-run').click((e) => {
        e.preventDefault();
        box($('.loading-example-box'), 'Loading');
    });
    $('.testcard-all-stop').click((e) => {
        e.preventDefault();
        stop($('.loading-example-box'));
    });

    $('.testcard1-run').click((e) => {
        e.preventDefault();
        box($('.loading-example-box1'), 'Loading');
    });
    $('.testcard1-stop').click((e) => {
        e.preventDefault();
        stop($('.loading-example-box1'));
    });

    $('.testcard2-run').click((e) => {
        e.preventDefault();
        box($('.loading-example-box2'), 'Loading');
    });
    $('.testcard2-stop').click((e) => {
        e.preventDefault();
        stop($('.loading-example-box2'), () => {
            $('.loading-example-box2').html('Updated content!');
        });
    });
    $('.testcard2-reset').click((e) => {
        e.preventDefault();
        stop($('.loading-example-box2'));
        $('.loading-example-box2').html('Some content');
    });

    $('.testcard3-run').click((e) => {
        e.preventDefault();
        box($('.loading-example-box3'), null, 'gray');
    });
    $('.testcard3-stop').click((e) => {
        e.preventDefault();
        stop($('.loading-example-box3'));
    });

    $('.testcard4-run').click((e) => {
        e.preventDefault();
        box($('.loading-example-box4'), 'Loading', null, 'top');
    });
    $('.testcard4-stop').click((e) => {
        e.preventDefault();
        stop($('.loading-example-box4'));
    });

    // Pill
    $('.testpill1-run').click((e) => {
        e.preventDefault();
        pill($('.loading-example-pill1'), 'Loading');
    });
    $('.testpill1-stop').click((e) => {
        e.preventDefault();
        stop($('.loading-example-pill1'), () => {
            $('.loading-example-pill1').html('Updated content!');
        });
    });
    $('.testpill1-reset').click((e) => {
        e.preventDefault();
        stop($('.loading-example-pill1'));
        $('.loading-example-pill1').html('Some content');
    });

    $('.testpill2-run').click((e) => {
        e.preventDefault();
        pill($('.loading-example-pill2'), 'Loading', 'gray');
    });
    $('.testpill2-stop').click((e) => {
        e.preventDefault();
        stop($('.loading-example-pill2'));
    });

    // Skeleton
    $('.testskeleton1-run').click((e) => {
        e.preventDefault();
        skeleton($('.loading-example-skeleton1'));
    });
    $('.testskeleton1-stop').click((e) => {
        e.preventDefault();
        stop($('.loading-example-skeleton1'));
    });
});

class Loading extends React.Component {
    render() {
        return (
            <div className="sg-section sg-loading" id="loading-section" ref={this.props.innerRef}>
                <hr className="widerule" />
                <h1>Loading</h1>
                <p>
                    Use the loading functionality to make a loading animation and text appear somewhere on the screen. There are a few types of loading functionalities:
                </p>
                <ul>
                    <li><strong>stop</strong> - stops loading</li>
                    <li><strong>button</strong> - inside of a button</li>
                    <li><strong>box</strong> - inside of a constricted box (like a card)</li>
                    <li><strong>pill</strong> - inside of a large area (like a whole page)</li>
                    <li><strong>skeleton</strong> - shows content is coming for cards (mostly)</li>
                </ul>
                <h3>General usage</h3>
                <p>
                    Since loading is an event-based component, this entire component relies on JS to handle the event work.
                </p>

                <div className="code-example">
                    <p>
                        Import specific loading components using your favorite method, ES6 would look like for all options:
                    </p>
                    <BlockCode language="js">
                        {
`import { stop, button, box, pill, skeleton } from 'styledot/loading'`
                        }
                    </BlockCode>
                </div>
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
                        <p>Import 'stop' from the StyleDot component</p>
                        <BlockCode language='js'>
                            {
`import { stop } from 'styledot/loading'`
                            }
                        </BlockCode>
                        <p>Stop a specific animation on a page</p>
                        <BlockCode language='js'>
                            {
`stop($('#element'), () => {
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
`stop($('.elements'));`
                            }
                        </BlockCode>
                    </div>

                    <hr />
                    <h2>Button loading animation</h2>
                    <p>Add a loading animation to a button</p>
                    <p><strong>NOTE</strong>: When using the text argument, the entire contents of the button gets replaced and there is no mechanism to revert back to the contents from before</p>
                    <h3>Arguments</h3>
                    <ul>
                        <li><strong>$el</strong> (required): jQuery object (button element)</li>
                        <li><strong>text</strong> (optional): null, string</li>
                        <li><strong>style</strong> (optional): null, 'white', 'gray'</li>
                    </ul>
                    <div className="code-example">
                        <p>Import 'button' from the StyleDot component</p>
                        <BlockCode language='js'>
                            {
`import { button } from 'styledot/loading'`
                            }
                        </BlockCode>
                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <button className="sd-button loading-example-button example-button1" id="test-loading1">
                                    Click me!
                                </button>
                            </div>
                            <div>
                                <div className="sg-loading-sidebyside-buttonarea">
                                    Loading animation, same text
                                </div>
                                <InlineCode>button($('.button1'));</InlineCode>
                            </div>
                        </div>

                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <button className="sd-button loading-example-button example-button2" id="test-loading2">
                                    Click me!
                                </button>
                            </div>
                            <div>
                                <div className="sg-loading-sidebyside-buttonarea">
                                    Loading animation, new text
                                </div>
                                <InlineCode>Button($('.button2'), 'Loading');</InlineCode>
                            </div>
                        </div>

                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <button className="sd-button loading-example-button example-button3">
                                    Click me!
                                </button>
                            </div>
                            <div>
                                <div className="sg-loading-sidebyside-buttonarea">
                                    Loading animation, new text, different style
                                </div>
                                <InlineCode>button($('.button3'), 'Loading', 'white');</InlineCode>
                            </div>
                        </div>

                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <button className="sd-button loading-example-button example-button4">
                                    Click me!
                                </button>
                            </div>
                            <div>
                                <div className="sg-loading-sidebyside-buttonarea">
                                    Loading animation, same text, different style
                                </div>
                                <InlineCode>button($('.button4'), null, 'gray');</InlineCode>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <h2>Box loading animation</h2>
                    <p>Add a loading animation and text to a "box" type area</p>
                    <h3>Arguments</h3>
                    <ul>
                        <li><strong>$el</strong> (required): jQuery object (button element)</li>
                        <li><strong>text</strong> (optional): null, string</li>
                        <li><strong>style</strong> (optional): null, 'white', 'gray'</li>
                    </ul>
                    <div className="code-example">
                        <p>Import 'box' from the StyleDot component</p>
                        <BlockCode language='js'>
                            {
`import { box } from 'styledot/loading'`
                            }
                        </BlockCode>
                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <p>
                                    Loading animation, with text, for all instances of a class (this example works on the sections below this one)
                                </p>
                            </div>
                            <div className="right-side">
                                <BlockCode language='js'>
                                    {
`box($('.loading-example-box'), 'Loading')`
                                    }
                                </BlockCode>
                                <div className="example-controls">
                                    <a href="#" className="testcard-all-run">run</a> | <a href="#" className="testcard-all-stop">reset</a>
                                </div>
                            </div>
                        </div>

                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <p>
                                    Loading animation, with text
                                </p>
                            </div>
                            <div className="right-side">
                                <BlockCode language='js'>
                                    {
`box($('.loading-example-box1'), 'Loading')`
                                    }
                                </BlockCode>
                                <div className="sg-loading-box-testcard loading-example-box loading-example-box1 sd-card sd-elevation-1">
                                    Some content
                                </div>
                                <div className="example-controls">
                                    <a href="#" className="testcard1-run">run</a> | <a href="#" className="testcard1-stop">stop</a>
                                </div>
                            </div>
                        </div>

                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <p>
                                    Loading animation, without text, with callback
                                </p>
                            </div>
                            <div className="right-side">
                                <BlockCode language='js'>
                                 {
`box($('.loading-example-box2'), 'Loading') // Run

stop($('.loading-example-box2'), () => { // Stop
    $('.loading-example-box2').html('Updated content!')
});`
                                 }
                                </BlockCode>
                                <div className="sg-loading-box-testcard loading-example-box loading-example-box2 sd-card sd-elevation-1">
                                    Some content
                                </div>
                                <div className="example-controls">
                                    <a href="#" className="testcard2-run">run</a> | <a href="#" className="testcard2-stop">stop w/ callback</a> | <a href="#" className="testcard2-reset">reset</a>
                                </div>
                            </div>
                        </div>

                        <div className="sg-loading-sidebyside">
                            <div className="left-side">
                                <p>
                                    Loading animation, without text, different style
                                </p>
                            </div>
                            <div className="right-side">
                                <BlockCode language='js'>
                                    {
`box($('.loading-example-box3'), null, 'gray')`
                                    }
                                </BlockCode>
                                <div className="sg-loading-box-testcard loading-example-box loading-example-box3 sd-card sd-elevation-1">
                                    Some content
                                </div>
                                <div className="example-controls">
                                    <a href="#" className="testcard3-run">run</a> | <a href="#" className="testcard3-stop">stop</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <h2>Pill loading animation</h2>
                    <p>Add a loading animation, wrapped in a pill-shaped, with custom text</p>
                    <h3>Arguments</h3>
                    <ul>
                        <li><strong>$el</strong> (required): jQuery object (button element)</li>
                        <li><strong>text</strong> (optional): null, string</li>
                        <li><strong>style</strong> (optional): null, 'white', 'gray'</li>
                    </ul>
                    <div className="code-example">
                        <p>Import 'pill' from the StyleDot component</p>
                        <BlockCode language='js'>
                            {
`import { pill } from 'styledot/loading'`
                            }
                        </BlockCode>

                        <h3>Pill loading animation, with text, and callback</h3>
                        <BlockCode language='js'>
                            {
`pill($('.loading-example-pill1'), 'Loading');

stop($('.loading-example-pill1'), () => {
    $('.loading-example-pill1').html('Updated content!');
});`
                            }
                        </BlockCode>
                        <div className="loading-example-pill1 loading-example-pill">
                            Some content
                        </div>
                        <div className="example-controls">
                            <a href="#" className="testpill1-run">run</a> | <a href="#" className="testpill1-stop">stop w/ callback</a> | <a href="#" className="testpill1-reset">reset</a>
                        </div>

                        <h3>Pill loading animation, with text, and style change</h3>
                        <BlockCode language='js'>
                            {
`pill($('.loading-example-pill2'), 'Loading', 'gray');`
                            }
                        </BlockCode>
                        <div className="loading-example-pill2 loading-example-pill">
                            Some content
                        </div>
                        <div className="example-controls">
                            <a href="#" className="testpill2-run">run</a> | <a href="#" className="testpill2-stop">stop</a>
                        </div>
                    </div>

                    <hr />
                    <h2>skeleton loading animation</h2>
                    <p>Add a skeleton placeholder to a card</p>
                    <h3>Arguments</h3>
                    <ul>
                        <li><strong>$el</strong> (required): jQuery object (button element)</li>
                    </ul>
                    <div className="code-example">
                        <p>Import 'pill' from the StyleDot component</p>
                        <BlockCode language='js'>
                            {
`import { skeleton } from 'styledot/loading'`
                            }
                        </BlockCode>
                        <BlockCode language='js'>
                            {
`skeleton($('.loading-example-skeleton'));`
                            }
                        </BlockCode>
                        <div className="example-controls">
                            <a href="#" className="testskeleton1-run">run</a> | <a href="#" className="testskeleton1-stop">stop</a>
                        </div>
                        <div className="loading-example-skeleton loading-example-skeleton1">
                            Some content
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading
