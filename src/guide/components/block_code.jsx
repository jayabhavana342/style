import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/styles/hljs';

class Inline extends React.Component {
    render() {
        return (
            <div className="block-code">
                <div className="block-code-tab">{this.props.language}</div>
                <SyntaxHighlighter
                    language={this.props.language}
                    style={githubGist}>
                        {this.props.children}
                </SyntaxHighlighter>
            </div>
        );
    }
}

export default Inline
