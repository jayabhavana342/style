import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/styles/hljs';

class Code extends React.Component {
    render() {
        return (
            <div className="code-example">
                <div class="code-example-tab">{this.props.language}</div>
                <SyntaxHighlighter language={this.props.language} style={docco}>{this.props.children}</SyntaxHighlighter>
            </div>
        );
    }
}

export default Code
