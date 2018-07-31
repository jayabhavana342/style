import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

class Path extends React.Component {
    render() {
        return (
            <div className="path">
                <SyntaxHighlighter
                    language='html'
                    useInlineStyles={false}>
                        {this.props.children}
                </SyntaxHighlighter>
            </div>
        );
    }
}

export default Path
