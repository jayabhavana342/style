import React from 'react'

class Header extends React.Component {
    render () {

        const openMenu = (
            <button className='header-burg' aria-label='Open Menu' onClick={this.props.navClickHandler}>
                <img src='img/burg.svg' alt='Open Menu Icon' />
            </button>
        )
        const closeMenu = (
            <button className='header-close' aria-label='Close Menu' onClick={this.props.navClickHandler}>
                <img src='img/close.svg' alt='Close Menu Icon' />
            </button>
        )

        return (
            <section className="header">
                <div className="header-wrapper">
                    {this.props.navShowing ? closeMenu : openMenu}
                    <img src="img/wire-logo.svg" className="header-mark" alt="23andMe Wire Mark" />
                </div>
            </section>
        )
    }
}

export default Header
