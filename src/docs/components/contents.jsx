import React from 'react'
import Buttons from '../sections/buttons.jsx'
import Colors from '../sections/colors.jsx'
import Cards from '../sections/cards.jsx'


class Contents extends React.Component {
    render() {
        return (
            <section className="contents-wrapper">
                <Buttons />
                <Colors />
                <Cards />
            </section>
        );
    }
}

export default Contents
