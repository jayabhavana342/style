import React from 'react'
import Header from './components/header.jsx'
import Nav from './components/navigation.jsx'
import Contents from './components/contents.jsx'

export class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navShowing: false,
            currentSection: null
        }
        this.navClickHandler = this.navClickHandler.bind(this)
        this.setCurrentSection = this.setCurrentSection.bind(this)
    }

    navClickHandler() {
        this.setState((prevState) => {
            return {
                navShowing: !prevState.navShowing
            }
        })
    }

    setCurrentSection = (section) => {
        this.setState({
            currentSection: section
        })
    }

    render() {
        const showingClass = this.state.navShowing ? 'mod-showing' : '';
        return (
            <div className="parent" ref={this.nav}>
                <div className={`nav-overlay ${showingClass}`} onClick={this.navClickHandler}></div>
                <Header navShowing={this.state.navShowing} navClickHandler={this.navClickHandler} />
                <Nav navShowing={this.state.navShowing}
                    navClickHandler={this.navClickHandler}
                    showingClass={showingClass}
                    setSection={this.setCurrentSection}
                    currentSection={this.state.currentSection} />
                <Contents setSection={this.setCurrentSection} />
            </div>
        )
    }
}

export default Main
