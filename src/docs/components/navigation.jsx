import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: false,
        }
        this.sectionClickHandler = this.sectionClickHandler.bind(this)
    }
    sectionClickHandler = (e) => {
        console.log(e.target);
        const currentState = this.state.currentSection;
        this.setState({ currentSection: e.target})
    }
    // sectionClickHandler() {
    //     const currentState = this.state.currentSection;
    //     this.setState({ currentSection: id})
    // }
    componentDidUpdate() {
        this.setState((currentSection) => {
            console.log('a thing got clicked');
        })
    }

    render () {

        return (
            <nav className={`nav ${this.props.showingClass}`}>
                <div className="nav-header">
                    <button onClick={this.props.navClickHandler} className="nav-close" aria-label="Close"><img src="img/close.svg" alt="close" /></button>
                    <h3>Pattern Library</h3>
                </div>
                <ul className="nav-items">
                    {/*
                    <li><a href="#" className="nav-link" role="link" aria-label="Home">Home</a></li>
                    <li><a href="#" className="nav-link" role="link" aria-label="Getting Started">Getting Started</a></li>
                    <li><a href="#" className="nav-link nav-link-exp" role="link" aria-label="Style">Style</a></li>
                    */}
                    <li><a href="#" className="nav-link nav-link-exp" role="link" aria-label="Components">Components</a></li>
                    <ul className="nav-subsection">
                        <li><AnchorLink href="#buttons-section" className={`nav-sub-link ${this.state.currentSection ? 'mod-current' : ''}`} aria-label="Buttons" onClick={this.sectionClickHandler} data-id="buttons">Buttons</AnchorLink></li>
                        <li><AnchorLink href="#colors-section" className={`nav-sub-link ${this.state.currentSection ? 'mod-current' : ''}`} aria-label="Colors" onClick={this.sectionClickHandler} data-id="colors">Colors</AnchorLink></li>
                        <li><AnchorLink href="#cards-section" className={`nav-sub-link ${this.state.currentSection ? 'mod-current' : ''}`} aria-label="Cards" onClick={this.sectionClickHandler} data-id="cards">Cards</AnchorLink></li>
                        <li><AnchorLink href="#elevations-section" className={`nav-sub-link ${this.state.currentSection ? 'mod-current' : ''}`} aria-label="Elevations" onClick={this.sectionClickHandler} data-id="elevations">Elevations</AnchorLink></li>
                        {/*
                        <li><a href="#" className="nav-sub-link" aria-label="Specs">Accordion</a></li>
                        <li><a href="#" className="nav-sub-link" aria-label="Styles">Breadcrumbs</a></li>
                        <li>
                            <a href="#" className="nav-sub-link mod-current" aria-label="Buttons">Buttons</a>
                            <ul className="nav-sub-subsection">
                                <li><a href="#" className="nav-sub-sub-link">Link 1</a></li>
                                <li><a href="#" className="nav-sub-sub-link">Link 2</a></li>
                                <li><a href="#" className="nav-sub-sub-link">Link 3</a></li>
                                <li><a href="#" className="nav-sub-sub-link">Link 4</a></li>
                            </ul>
                        </li>

                        <li><a href="#" className="nav-sub-link" aria-label="Cards">Cards</a></li>
                        <li><a href="#" className="nav-sub-link" aria-label="Content Switch">Content Switch</a></li>
                        <li><a href="#" className="nav-sub-link" aria-label="Forms">Forms</a></li>
                        <li><a href="#" className="nav-sub-link" aria-label="Icons">Icons</a></li>
                        <li><a href="#" className="nav-sub-link" aria-label="Loading">Loading</a></li>
                        <li><a href="#" className="nav-sub-link" aria-label="Pagination">Pagination</a></li>
                        <li><a href="#" className="nav-sub-link" aria-label="Tags">Tags</a></li>
                        */}
                    </ul>

                    {/*
                    <li><a href="#" className="nav-link" role="link">Modules</a></li>
                    <li><a href="#" className="nav-link" role="link">Contribute</a></li>
                    <li><a href="#" className="nav-link" role="link">Pricinples</a></li>
                    <li><a href="#" className="nav-link" role="link">Resources</a></li>
                    */}
                </ul>
                <div className="nav-footer">
                    &copy;<script type="text/javascript">document.write(new Date().getFullYear())</script> 23andMe, Inc.
                </div>
            </nav>
        )
    }
}

export default Nav
