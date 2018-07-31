import React from 'react'
import Code from './code.jsx'

class Contents extends React.Component {
    render() {
        const htmlString = `<div class="blah"></div><div class="blah"></div><div class="blah"></div><div class="blah"></div><div class="blah"></div><div class="blah"></div>`
        return (
            <section className="contents-wrapper">
                <Code language='html'>{htmlString}</Code>
            </section>
        );
    }
}

export default Contents
