import React from 'react'
import Buttons from '../sections/buttons.jsx'
import Colors from '../sections/colors.jsx'
import Cards from '../sections/cards.jsx'
import Elevations from '../sections/elevations.jsx'
import Waypoint from 'react-waypoint'

class Contents extends React.Component {
    render() {
        return (
            <section className="contents-wrapper">
                <Waypoint scrollableAncestor={window} onEnter={()=> {this.props.setSection('buttons')}}>
                    <Buttons />
                </Waypoint>
                <Waypoint scrollableAncestor={window} onEnter={()=> {this.props.setSection('colors')}}>
                    <Colors />
                </Waypoint>
                <Waypoint scrollableAncestor={window} onEnter={()=> {this.props.setSection('cards')}}>
                    <Cards />
                </Waypoint>
                <Waypoint scrollableAncestor={window} onEnter={()=> {this.props.setSection('elevations')}}>
                    <Elevations />
                </Waypoint>
            </section>
        );
    }
}

export default Contents
