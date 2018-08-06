import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

class Inline extends React.Component {
    render() {
        return (
            <div className="inline-code">
                <SyntaxHighlighter
                    language='html'
                    useInlineStyles={false}>
                        {this.props.children}
                </SyntaxHighlighter>
            </div>
        );
    }
}

export default Inline
