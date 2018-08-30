import React from 'react'
import Header from './components/header.jsx'
import Nav from './components/navigation.jsx'
import Contents from './components/contents.jsx'

let lastScrollY = 0;
let ticking = false;

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

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    nav = React.createRef();

    handleScroll = () => {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                this.nav.current.style.top = `${lastScrollY}px`;
                ticking = false;
                this.setState({
                    sectionInView: null
                })
            });

            ticking = true;
        }
    };

    render() {
        const showingClass = this.state.navShowing ? 'mod-showing' : '';
        return (
            <div className="parent" ref={this.nav}>
                <div className={`nav-overlay ${showingClass}`} onClick={this.navClickHandler}></div>
                <Header navShowing={this.state.navShowing} navClickHandler={this.navClickHandler} />
                <Nav navShowing={this.state.navShowing} navClickHandler={this.navClickHandler} showingClass={showingClass} />
                <Contents/>
            </div>
        )
    }
}

export default Main
