import React from 'react';
import Buttons from '../sections/buttons.jsx';
import Colors from '../sections/colors.jsx';
import Cards from '../sections/cards.jsx';
import Elevations from '../sections/elevations.jsx';
import Loading from '../sections/loading.jsx';
import GettingStarted from '../sections/getting_started.jsx';
import Waypoint from 'react-waypoint'

class Contents extends React.Component {
    render() {
        return (
            <section className="contents-wrapper">
                <div id="getting-started-section">
                    <Waypoint scrollableAncestor={window} onEnter={()=> {this.props.setSection('getting-started')}}>
                        <GettingStarted />
                    </Waypoint>
                </div>
                <div className="section-wrapper">
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
                    <Waypoint scrollableAncestor={window} onEnter={()=> {this.props.setSection('elevations')}}>
                        <Loading />
                    </Waypoint>
                </div>
            </section>
        );
    }
}

export default Contents
