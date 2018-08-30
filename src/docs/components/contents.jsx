import React from 'react'
import Buttons from '../sections/buttons.jsx'
import Colors from '../sections/colors.jsx'
import Cards from '../sections/cards.jsx'
import Elevations from '../sections/elevations.jsx'


class Contents extends React.Component {
    render() {
        return (
            <section className="contents-wrapper">
                <Buttons />
                <Colors />
                <Cards />
                <Elevations />
            </section>
        );
    }
}

export default Contents
