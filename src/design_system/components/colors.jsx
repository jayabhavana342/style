import React from 'react'
import Code from '../../guide/components/code.jsx'
import Path from '../../guide/components/path.jsx'

class Contents extends React.Component {
    render() {
        const htmlString = `<div class="blah">
    <span>test</span>
</div>
<div class="blah"></div>
<div class="blah"></div>
<div class="blah"></div>
<div class="blah"></div>
<div class="blah"></div>`
        const path = '/path/to/a/thing.jpg'
        return (
            <div>
                <h1>Colors</h1>
                <Path>{path}</Path>
                <Code language='html'>{htmlString}</Code>
            </div>
        );
    }
}

export default Contents
