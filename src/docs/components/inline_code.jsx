import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

class Inline extends React.Component {
    constructor(props) {
        super(props);
        this.test_class = props.test_class ? this.props.test_class : '';
    }
    render() {
        return (
            <span className={`inline-code ${this.test_class}`}>
                <SyntaxHighlighter
                    language='html'
                    useInlineStyles={false}>
                        {this.props.children}
                </SyntaxHighlighter>
            </span>
        );
    }
}

export default Inline
