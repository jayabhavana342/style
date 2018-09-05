import React from 'react'
import Buttons from '../sections/buttons.jsx'
import Colors from '../sections/colors.jsx'
import Cards from '../sections/cards.jsx'
import Elevations from '../sections/elevations.jsx'
import Waypoint from 'react-waypoint'

class Contents extends React.Component {
    _handleWaypointEnter = (section) => {
        console.log(section);
        this.setState({
            sectionInView: section
        })
    }
    render() {
        return (
            <section className="contents-wrapper">
                <Waypoint scrollableAncestor={window} onEnter={()=> {this._handleWaypointEnter('buttons')}}>
                    <Buttons />
                </Waypoint>
                <Waypoint scrollableAncestor={window} onEnter={()=> {this._handleWaypointEnter('colors')}}>
                    <Colors />
                </Waypoint>
                <Waypoint scrollableAncestor={window} onEnter={()=> {this._handleWaypointEnter('cards')}}>
                    <Cards />
                </Waypoint>
                <Waypoint scrollableAncestor={window} onEnter={()=> {this._handleWaypointEnter('elevations')}}>
                    <Elevations />
                </Waypoint>
            </section>
        );
    }
}

export default Contents
