import React from 'react'
import Colors from '../sections/colors.jsx'
import Cards from '../sections/cards.jsx'


class Contents extends React.Component {
    render() {
        return (
            <section className="contents-wrapper">
                <Colors />
                <Cards />
            </section>
        );
    }
}

export default Contents
