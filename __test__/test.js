'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var SyntaxHighlighter = _interopDefault(require('react-syntax-highlighter'));
var hljs = require('react-syntax-highlighter/styles/hljs');
var Enzyme = require('enzyme');
var Enzyme__default = _interopDefault(Enzyme);
var Adapter = _interopDefault(require('enzyme-adapter-react-16'));

var Inline = (function (superclass) {
    function Inline () {
        superclass.apply(this, arguments);
    }

    if ( superclass ) Inline.__proto__ = superclass;
    Inline.prototype = Object.create( superclass && superclass.prototype );
    Inline.prototype.constructor = Inline;

    Inline.prototype.render = function render () {
        return (
            React.createElement( 'div', { className: ("block-code " + (this.props.test_class)) },
                React.createElement( 'div', { className: "block-code-tab" }, this.props.language),
                React.createElement( SyntaxHighlighter, {
                    language: this.props.language, style: hljs.githubGist },
                        this.props.children
                )
            )
        );
    };

    return Inline;
}(React.Component));

var Inline$1 = (function (superclass) {
    function Inline () {
        superclass.apply(this, arguments);
    }

    if ( superclass ) Inline.__proto__ = superclass;
    Inline.prototype = Object.create( superclass && superclass.prototype );
    Inline.prototype.constructor = Inline;

    Inline.prototype.render = function render () {
        return (
            React.createElement( 'span', { className: "inline-code" },
                React.createElement( SyntaxHighlighter, {
                    language: 'html', useInlineStyles: false },
                        this.props.children
                )
            )
        );
    };

    return Inline;
}(React.Component));

var Contents = (function (superclass) {
    function Contents () {
        superclass.apply(this, arguments);
    }

    if ( superclass ) Contents.__proto__ = superclass;
    Contents.prototype = Object.create( superclass && superclass.prototype );
    Contents.prototype.constructor = Contents;

    Contents.prototype.render = function render () {
        return (
            React.createElement( 'div', { className: "sg-section sg-colors" },
                React.createElement( 'h1', { className: "mod-updated" }, "Colors"),
                React.createElement( 'p', null, "This is the color palette for YouDot. Use Sass (SCSS) variables to keep these colors consistent. We should not be using any colors outside of these variables. ", React.createElement( 'a', { href: "https://sass-lang.com/guide#topic-2", target: "_blank", rel: "noopener noreferrer" }, "More on Sass Variables")
                ),
                React.createElement( 'hr', null ),
                React.createElement( 'p', null, "File location: ", React.createElement( Inline$1, null, "you/assets/scss/base/_colors.scss" ) ),

                React.createElement( 'div', { className: "sub-section" },
                    React.createElement( 'div', { className: "colors" },
                        React.createElement( 'div', { className: "lime" }, "$lime ", React.createElement( 'span', { className: "def" }, "#92C746")
                        ),
                        React.createElement( 'div', { className: "dark-lime" }, "$dark-lime ", React.createElement( 'span', { className: "def" }, "#74A529")
                        ),
                        React.createElement( 'div', { className: "green" }, "$green ", React.createElement( 'span', { className: "def" }, "#3BA510")
                        ),
                        React.createElement( 'div', { className: "dark-green" }, "$dark-green ", React.createElement( 'span', { className: "def" }, "#327216")
                        ),
                        React.createElement( 'div', { className: "teal" }, "$teal ", React.createElement( 'span', { className: "def" }, "#00B5B5")
                        ),
                        React.createElement( 'div', { className: "dark-teal" }, "$dark-teal ", React.createElement( 'span', { className: "def" }, "#0E8C8C")
                        ),
                        React.createElement( 'div', { className: "blue" }, "$blue ", React.createElement( 'span', { className: "def" }, "#53C8ED")
                        ),
                        React.createElement( 'div', { className: "dark-blue" }, "$dark-blue ", React.createElement( 'span', { className: "def" }, "#0081A5")
                        ),
                        React.createElement( 'div', { className: "periwinkle" }, "$periwinkle ", React.createElement( 'span', { className: "def" }, "#3595D6")
                        ),
                        React.createElement( 'div', { className: "dark-periwinkle" }, "$dark-periwinkle ", React.createElement( 'span', { className: "def" }, "#005B98")
                        ),
                        React.createElement( 'div', { className: "ultra-marine" }, "$ultra-marine ", React.createElement( 'span', { className: "def" }, "#425DBF")
                        ),
                        React.createElement( 'div', { className: "dark-ultra-marine" }, "$dark-ultra-marine ", React.createElement( 'span', { className: "def" }, "#132D89")
                        ),
                        React.createElement( 'div', { className: "violet" }, "$violet ", React.createElement( 'span', { className: "def" }, "#6F3598")
                        ),
                        React.createElement( 'div', { className: "dark-violet" }, "$dark-violet ", React.createElement( 'span', { className: "def" }, "#4A1672")
                        ),
                        React.createElement( 'div', { className: "purple" }, "$purple ", React.createElement( 'span', { className: "def" }, "#9F0F7B")
                        ),
                        React.createElement( 'div', { className: "dark-purple" }, "$dark-purple ", React.createElement( 'span', { className: "def" }, "#74125D")
                        ),
                        React.createElement( 'div', { className: "pink" }, "$pink ", React.createElement( 'span', { className: "def" }, "#D50F67")
                        ),
                        React.createElement( 'div', { className: "dark-pink" }, "$dark-pink ", React.createElement( 'span', { className: "def" }, "#8C0E45")
                        ),
                        React.createElement( 'div', { className: "scarlet" }, "$scarlet ", React.createElement( 'span', { className: "def" }, "#FF6D19")
                        ),
                        React.createElement( 'div', { className: "dark-scarlet" }, "$dark-scarlet ", React.createElement( 'span', { className: "def" }, "#D12F11")
                        ),
                        React.createElement( 'div', { className: "booster-red" }, "$booster-red ", React.createElement( 'span', { className: "def" }, "#AF1111")
                        ),
                        React.createElement( 'div', { className: "orange" }, "$orange ", React.createElement( 'span', { className: "def" }, "#FFBA32")
                        ),
                        React.createElement( 'div', { className: "dark-orange" }, "$dark-orange ", React.createElement( 'span', { className: "def" }, "#E58900")
                        ),
                        React.createElement( 'div', { className: "yellow" }, "$yellow ", React.createElement( 'span', { className: "def" }, "#FADA6C")
                        ),
                        React.createElement( 'div', { className: "dark-yellow" }, "$dark-yellow ", React.createElement( 'span', { className: "def" }, "#F2C100")
                        )
                    )
                ),

                React.createElement( 'h2', { className: "subsection-title" }, "Accessible colors"),
                React.createElement( 'hr', null ),
                React.createElement( 'p', null, "For accessibility purposes, these colors are intended to be used with white overlaying text, or olored text on top of ", React.createElement( Inline$1, null, "$white" ), " or ", React.createElement( Inline$1, null, "$gray1" ), ". ", React.createElement( 'a', { href: "https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/", target: "_blank", rel: "noopener noreferrer" }, "More on color contrast"), ". ", React.createElement( 'a', { href: "http://contrast-grid.eightshapes.com/", target: "_blank", rel: "noopener noreferrer" }, "A useful contrast tool"), "." ),
                React.createElement( 'div', { className: "sub-section ttam-colors-section" },
                    React.createElement( 'div', { className: "colors" },
                        React.createElement( 'div', { className: "accessible-blue" }, "$accessible-blue ", React.createElement( 'span', { className: "def" }, "#1976D2")
                        ),
                        React.createElement( 'div', { className: "accessible-green" }, "$accessible-green ", React.createElement( 'span', { className: "def" }, "#2F850D")
                        )
                    )
                ),

                React.createElement( 'h2', { className: "subsection-title" }, "Grays"),
                React.createElement( 'hr', null ),
                React.createElement( 'div', { className: "sub-section ttam-colors-section" },
                    React.createElement( 'div', { className: "colors" },
                        React.createElement( 'div', { className: "white" }, "$white ", React.createElement( 'span', { className: "def" }, "#FFF")
                        ),
                        React.createElement( 'div', { className: "gray1" }, "$gray1 ", React.createElement( 'span', { className: "def" }, "#F7F9FA")
                        ),
                        React.createElement( 'div', { className: "gray1b" }, "$gray1b ", React.createElement( 'span', { className: "def" }, "#F2F5F7")
                        ),
                        React.createElement( 'div', { className: "gray2" }, "$gray2 ", React.createElement( 'span', { className: "def" }, "#EDEFF0")
                        ),
                        React.createElement( 'div', { className: "gray3" }, "$gray3 ", React.createElement( 'span', { className: "def" }, "#E3E5E6")
                        ),
                        React.createElement( 'div', { className: "gray4" }, "$gray4 ", React.createElement( 'span', { className: "def" }, "#D4D6D6")
                        ),
                        React.createElement( 'div', { className: "gray5" }, "$gray5 ", React.createElement( 'span', { className: "def" }, "#C0C1C2")
                        ),
                        React.createElement( 'div', { className: "gray6" }, "$gray6 ", React.createElement( 'span', { className: "def" }, "#9C9EA1")
                        ),
                        React.createElement( 'div', { className: "gray7" }, "$gray7 ", React.createElement( 'span', { className: "def" }, "#6B6B6B")
                        ),
                        React.createElement( 'div', { className: "gray8" }, "$gray8 ", React.createElement( 'span', { className: "def" }, "#333435")
                        )
                    )
                ),

                React.createElement( 'h2', { className: "subsection-title" }, "Example"),
                React.createElement( 'hr', null ),
                React.createElement( 'div', { className: "sg-colors-code-example" }, "TEXT"),
                React.createElement( Inline, { language: 'scss', test_class: 'test-comp-colors-code' },
                    ".example {\n    background-color: $pink;\n    color: $white;\n    &:hover {\n        background-color: $dark-pink;\n    }\n}"
                )
            )
        );
    };

    return Contents;
}(React.Component));

Enzyme__default.configure({ adapter: new Adapter() });

var colorWrapperShallow = Enzyme.shallow(React.createElement( Contents, null ));
var colorWrapperFull = Enzyme.mount(React.createElement( Contents, null ));

describe('Colors component loading?', function () {
    it('Renders w/o errors', function () {
        expect(colorWrapperShallow.exists()).toBe(true);
    });
});

describe('Content for "Lime" color loading?', function () {
    it('Renders shows the color box', function () {
        expect(colorWrapperShallow.find('.lime .def').text()).toEqual('#92C746');
    });
});

describe('Code example for colors loading?', function () {
    it('Renders the code example for colors', function () {
        expect(colorWrapperFull.find('.test-comp-colors-code').exists()).toBe(true);
    });
});
//# sourceMappingURL=test.js.map
