import React from 'react'
import BlockCode from '../components/block_code.jsx'
import InlineCode from '../components/inline_code.jsx'
import $ from 'jquery'

class Contents extends React.Component {
    exampleAlert1() {
        alert('This is a button!');
    }
    exampleAlert2() {
        alert('This is a button with no styling');
    }
    render() {
        return (
            <div className="sg-section sg-buttons" id="buttons-section" ref={this.props.innerRef}>
                <h1>Buttons</h1>
                <p>
                    Use the mixin to create individual buttons. There are button styles that are already created, please use where appropriate.
                </p>
                <hr />

                <h3>Mixin usage</h3>
                <p><InlineCode>@include ttam-button(color, size, type);</InlineCode></p>
                <p><strong>Options</strong></p>
                <ul>
                    <li><strong>Color:</strong> <em>blue (default), green, pink, red, gray, white, disabled. You can add additional colors in the mixin if needed.</em></li>
                    <li><strong>Size:</strong> <em>large (default), medium, small</em></li>
                    <li><strong>Type:</strong> <em>solid (default), outlined</em></li>
                </ul>
                <div className="code-example">
                    <button className="ttam-button">Button</button>&nbsp;
                    <button className="example-button">Example button</button>&nbsp;
                    <button className="another-example-button">Another button</button>&nbsp;

                    <BlockCode language='scss'>
                        {
`.ttam-button {
    @include ttam-button();
}
.example-button {
    @include ttam-button(pink, large, solid);
}
.another-example-button {
    @include ttam-button(green, medium, outlined);
}`
                        }
                    </BlockCode>

                    <BlockCode language='html'>
                        {
`<button class="ttam-button">Button</button>
<button class="example-button">Example button</button>
<button class="another-example-button">Another button</button>`
                        }
                    </BlockCode>
                </div>

                <h2 className="subsection-title">Button specs</h2>
                <hr />
                <h3>Button sizes</h3>
                <p>Large and medium sizes</p>
                <p>
                    For large buttons, height is 48px, font size is <InlineCode>$sd-base-text</InlineCode> (16px), left and right padding is 24px with a minimum width of 120px.
                </p>
                <p>
                    For medium buttons, height is 36px, font size is <InlineCode>$sd-x-small-text</InlineCode> (14px), left and right padding is 18px with a minimum width of 72px.
                </p>
                <div className="code-example">
                    <button className="blue-primary">Large Primary</button>&nbsp;
                    <button className="blue-medium">Medium Primary</button>&nbsp;
                </div>

                <h3>Button types</h3>
                <p>Primary (solid background) and Secondary (outlined style)</p>
                <p>
                    Outlined buttons are used where the color meaning is important but the button action is secondary to an adjacent button.
                </p>
                <div className="code-example">
                    <button className="blue-primary">Primary</button>&nbsp;
                    <button className="blue-secondary">Secondary</button>&nbsp;
                    <button className="blue-primary" disabled>Disabled</button>&nbsp;
                </div>

                <h3>Button color meanings</h3>
                <div className="code-example">
                    <div className="sg-buttons-sidebyside">
                        <div className="button-side"><button className="blue-primary">Blue Primary</button></div>
                        <div className="button-definition">Blue buttons are primary actions within the product. These actions drive the experience forward.</div>
                    </div>

                    <div className="sg-buttons-sidebyside">
                        <div className="button-side"><button className="pink-primary">Pink Primary</button></div>
                        <div className="button-definition">Pink buttons are used to indicate a “sale” action like “add to cart” or “upgrade.”</div>
                    </div>

                    <div className="sg-buttons-sidebyside">
                        <div className="button-side"><button className="green-primary">Green Primary</button></div>
                        <div className="button-definition">Green is used to filter results or indicate notifications.</div>
                    </div>

                    <div className="sg-buttons-sidebyside">
                        <div className="button-side"><button className="red-primary">Red Primary</button></div>
                        <div className="button-definition">Red is used only for negative or critical actions like “Delete” or “No” which are permanent decisions.</div>
                    </div>

                    <div className="sg-buttons-sidebyside">
                        <div className="button-side"><button className="gray-primary">Gray Primary</button></div>
                        <div className="button-definition">Light Gray buttons are for actions like “Back” or “Print” which do not drive the experience forward.</div>
                    </div>

                    <div className="sg-buttons-sidebyside mod-dark-example">
                        <div className="button-side"><button className="white-primary">White Primary</button></div>
                        <div className="button-definition">White buttons are used on dark backgrounds to create sufficient contrast but lack specific meaning.</div>
                    </div>
                </div>

                <h3>Limited use</h3>
                <p>These buttons are used in Research Discoveries and for FAQs in Ancestry and Health reports.</p>
                <p>
                    For small buttons, height is 24px, font size is <InlineCode>$sd-x-small-text</InlineCode> (14px), left and right padding is 18px with a minimum width of 72px.
                </p>
                <div className="code-example">
                    <button className="small-yes">Yes</button>
                    <button className="small-no">No</button>
                </div>

                <h2 className="subsection-title">Button styles</h2>
                <p>File location: <InlineCode>you/assets/scss/components/_ttam-buttons.scss</InlineCode></p>
                <h3>Reusable classes</h3>
                <p>
                    The blue primary button is the most used button style and we should not recreate it with a mixin every time it is needed.
                </p>
                <p>Use <InlineCode>ttam-button</InlineCode> class to create the blue primary button.</p>
                <div className="code-example">
                    <button className="ttam-button">Primary button</button>
                    <a className="ttam-button">Primary button</a>
                    <BlockCode language='html'>
                        {
`<button class="ttam-button">Primary button</button>
<a class="ttam-button" href="...">Primary button</a>`
                        }
                    </BlockCode>
                </div>
                <h3>Extending styles</h3>
                <p>To extend the buttons, use a modifier class with the prefix <InlineCode>mod-.</InlineCode></p>
                <p>
                    Current modifier classes include <InlineCode>mod-wide</InlineCode> & <InlineCode>mod-wide-mobile</InlineCode>
                </p>
                <div className="code-example">
                    <p>This is a wide button. It will expand horizontally to fill the width of its parent container.</p>
                    <button className="ttam-button mod-wide">Wide button</button>
                    <br /><br />
                    <p>This is a button, that is wide for mobile devices (screen sizes &lt; 768px wide).</p>
                    <button className="ttam-button mod-wide-mobile">Wide for mobile button</button>
                    <BlockCode language='html'>
                        {
`<button class="ttam-button mod-wide">Wide button</button>
<button class="ttam-button mod-wide-mobile">Wide for mobile button</button>`
                        }
                    </BlockCode>
                </div>
                <h2 className="subsection-title">Accessibility concerns</h2>
                <p>
                    <InlineCode>{`<a>`}</InlineCode> vs. <InlineCode>{`<button>`}</InlineCode>
                </p>
                <p>
                    Is your link or button taking you to a location? Please use the anchor element.
                </p>
                <p>
                    Is your link or button doing something like submitting a form or opening a modal? Please use a button element.
                </p>
                <p>
                    Buttons are expected to be triggered using the Space key or Enter key, while links are expected to be triggered through the Enter key only. Also, using divs and spans for buttons or links can cause problems with tab order and keyboard interaction.
                </p>
                <p>
                    <a href="http://itstiredinhere.blogspot.com/2014/08/the-anchor-button-bad-for-accessibility.html" target="_blank" rel="noopener noreferrer">More info here</a>
                    and <a href="https://css-tricks.com/use-button-element/" target="_blank" rel="noopener noreferrer">here</a>
                    and <a href="https://marcysutton.com/links-vs-buttons-in-modern-web-applications/" target="_blank" rel="noopener noreferrer">here too</a>.
                </p>

                <h3 className="subsection-title">Using anchor element with the a button style:</h3>
                <p>
                    If you are using <InlineCode>{`<a>`}</InlineCode> with no href, please consider using the <InlineCode>{`<button>`}</InlineCode> element instead for accessibility reasons.
                </p>
                <div className="code-example">
                    <BlockCode language='html'>
                        {
`<a class="ttam-button" href="...">This button uses an anchor element</a>`
                        }
                    </BlockCode>
                </div>

                <h3 className="subsection-title">Buttons that looks like links</h3>
                <p>
                    Sometimes we need our button to looks like a link:&nbsp;
                    <button className="button-anchor" onClick={this.exampleAlert1}>This is a button</button>
                </p>
                <p>
                    <strong>Example use case:</strong> The "Invite a relative or friend" link on the Neanderthal Ancestry page.
                    <br />Use class: <InlineCode>button-anchor</InlineCode>
                </p>
                <div className="code-example">
                    <BlockCode language='html'>
                        {
`<button class="button-anchor">This is a button</button>`
                        }
                    </BlockCode>
                </div>

                <h3 className="subsection-title">Buttons with no style</h3>
                <p>
                    Sometimes we need the button to be stripped of all styling:&nbsp;
                    <button className="sd-unbutton" onClick={this.exampleAlert2}>This is a button</button>
                </p>
                <p>
                    <strong>Example use case:</strong> The gear icon in Your Connections to the right side of each connection.
                    <br />Use class: <InlineCode>sd-unbutton</InlineCode>
                </p>
                <div className="code-example">
                    <BlockCode language='html'>
                        {
`<button class="sd-unbutton">This is a button</button>`
                        }
                    </BlockCode>
                </div>
            </div>
        );
    }
}

export default Contents
