import React from 'react'
import Buttons from '../sections/buttons.jsx'
import Colors from '../sections/colors.jsx'
import Cards from '../sections/cards.jsx'
import Elevations from '../sections/elevations.jsx'
import Waypoint from 'react-waypoint'



class Contents extends React.Component {
    _handleWaypointEnter = (event) => {
        console.log('enter');
        console.log(event);
    }
    _handleWaypointLeave = (event) => {
        console.log('leave');
        console.log(event);
    }
    render() {
        return (
            <section className="contents-wrapper">
                <Waypoint section="buttons" scrollableAncestor={window} onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave}>
                    <Buttons />
                </Waypoint>
                <Colors />
                <Cards />
                <Elevations />
            </section>
        );
    }
}

export default Contents
