import React from 'react'
import BlockCode from '../components/block_code.jsx'
import InlineCode from '../components/inline_code.jsx'

class Contents extends React.Component {
    render() {
        return (
            <div className="sg-section sg-colors">
                <h1 className="mod-updated">Colors</h1>
                <p>
                    This is the color palette for YouDot. Use Sass (SCSS) variables to keep these colors
                    consistent. We should not be using any colors outside of these variables.
                    <a href="https://sass-lang.com/guide#topic-2" target="_blank" rel="noopener noreferrer">
                    More on Sass Variables</a>
                </p>
                <hr />
                <p>File location: <InlineCode>you/assets/scss/base/_colors.scss</InlineCode></p>

                <div className="sub-section">
                    <div className="colors">
                        <div className="lime">
                            $lime <span className="def">#92C746</span>
                        </div>
                        <div className="dark-lime">
                            $dark-lime <span className="def">#74A529</span>
                        </div>
                        <div className="green">
                            $green <span className="def">#3BA510</span>
                        </div>
                        <div className="dark-green">
                            $dark-green <span className="def">#327216</span>
                        </div>
                        <div className="teal">
                            $teal <span className="def">#00B5B5</span>
                        </div>
                        <div className="dark-teal">
                            $dark-teal <span className="def">#0E8C8C</span>
                        </div>
                        <div className="blue">
                            $blue <span className="def">#53C8ED</span>
                        </div>
                        <div className="dark-blue">
                            $dark-blue <span className="def">#0081A5</span>
                        </div>
                        <div className="periwinkle">
                            $periwinkle <span className="def">#3595D6</span>
                        </div>
                        <div className="dark-periwinkle">
                            $dark-periwinkle <span className="def">#005B98</span>
                        </div>
                        <div className="ultra-marine">
                            $ultra-marine <span className="def">#425DBF</span>
                        </div>
                        <div className="dark-ultra-marine">
                            $dark-ultra-marine <span className="def">#132D89</span>
                        </div>
                        <div className="violet">
                            $violet <span className="def">#6F3598</span>
                        </div>
                        <div className="dark-violet">
                            $dark-violet <span className="def">#4A1672</span>
                        </div>
                        <div className="purple">
                            $purple <span className="def">#9F0F7B</span>
                        </div>
                        <div className="dark-purple">
                            $dark-purple <span className="def">#74125D</span>
                        </div>
                        <div className="pink">
                            $pink <span className="def">#D50F67</span>
                        </div>
                        <div className="dark-pink">
                            $dark-pink <span className="def">#8C0E45</span>
                        </div>
                        <div className="scarlet">
                            $scarlet <span className="def">#FF6D19</span>
                        </div>
                        <div className="dark-scarlet">
                             $dark-scarlet <span className="def">#D12F11</span>
                        </div>
                        <div className="booster-red">
                            $booster-red <span className="def">#AF1111</span>
                        </div>
                        <div className="orange">
                            $orange <span className="def">#FFBA32</span>
                        </div>
                        <div className="dark-orange">
                            $dark-orange <span className="def">#E58900</span>
                        </div>
                        <div className="yellow">
                            $yellow <span className="def">#FADA6C</span>
                        </div>
                        <div className="dark-yellow">
                            $dark-yellow <span className="def">#F2C100</span>
                        </div>
                    </div>
                </div>

                <h2 className="subsection-title">Accessible colors</h2>
                <hr />
                <p>
                    For accessibility purposes, these colors are intended to be used with white overlaying text, or
                    olored text on top of
                    <InlineCode>$white</InlineCode> or <InlineCode>$gray1</InlineCode>.
                    <a href="https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/" target="_blank" rel="noopener noreferrer">
                    More on color contrast</a>. <a href="http://contrast-grid.eightshapes.com/" target="_blank" rel="noopener noreferrer">A useful contrast tool</a>.
                </p>
                <div className="sub-section ttam-colors-section">
                    <div className="colors">
                        <div className="accessible-blue">
                            $accessible-blue <span className="def">#1976D2</span>
                        </div>
                        <div className="accessible-green">
                            $accessible-green <span className="def">#2F850D</span>
                        </div>
                    </div>
                </div>

                <h2 className="subsection-title">Grays</h2>
                <hr />
                <div className="sub-section ttam-colors-section">
                    <div className="colors">
                        <div className="white">
                            $white <span className="def">#FFF</span>
                        </div>
                        <div className="gray1">
                            $gray1 <span className="def">#F7F9FA</span>
                        </div>
                        <div className="gray1b">
                            $gray1b <span className="def">#F2F5F7</span>
                        </div>
                        <div className="gray2">
                            $gray2 <span className="def">#EDEFF0</span>
                        </div>
                        <div className="gray3">
                            $gray3 <span className="def">#E3E5E6</span>
                        </div>
                        <div className="gray4">
                            $gray4 <span className="def">#D4D6D6</span>
                        </div>
                        <div className="gray5">
                            $gray5 <span className="def">#C0C1C2</span>
                        </div>
                        <div className="gray6">
                            $gray6 <span className="def">#9C9EA1</span>
                        </div>
                        <div className="gray7">
                            $gray7 <span className="def">#6B6B6B</span>
                        </div>
                        <div className="gray8">
                            $gray8 <span className="def">#333435</span>
                        </div>
                    </div>
                </div>

                <h2 className="subsection-title">Example</h2>
                <hr />
                <div className="sg-colors-code-example">
                    TEXT
                </div>
                <BlockCode language='scss' test_class='test-comp-colors-code'>
                    {
`.example {
    background-color: $pink;
    color: $white;
    &:hover {
        background-color: $dark-pink;
    }
}`
                    }
                </BlockCode>
            </div>
        );
    }
}

export default Contents
