import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

class Inline extends React.Component {
    render() {
        return (
            <span className="inline-code">
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
