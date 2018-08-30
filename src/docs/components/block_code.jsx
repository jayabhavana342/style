import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/styles/hljs';

class BlockCode extends React.Component {
    constructor(props) {
        super(props);
        this.test_class = props.test_class ? this.props.test_class : '';
    }
    render() {
        return (
            <div className={`block-code ${this.test_class}`}>
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

export default BlockCode
