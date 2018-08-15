import React from 'react'
import Header from './components/header.jsx'
import Nav from './components/navigation.jsx'
import Contents from './components/contents.jsx'

export class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navShowing: false
        }
        this.navClickHandler = this.navClickHandler.bind(this)
    }

    navClickHandler() {
        this.setState((prevState) => {
            return {
                navShowing: !prevState.navShowing
            }
        })
    }

    render() {
        const showingClass = this.state.navShowing ? 'mod-showing' : '';
        return (
            <div>
                <div className={`nav-overlay ${showingClass}`} onClick={this.navClickHandler}></div>
                <Header navShowing={this.state.navShowing} navClickHandler={this.navClickHandler} />
                <Nav navShowing={this.state.navShowing} navClickHandler={this.navClickHandler} showingClass={showingClass} />
                <Contents />
            </div>
        )
    }
}

export default Main
