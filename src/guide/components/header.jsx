import React from 'react'

export class Header extends React.Component {
    render () {
        return (
            <section className="header">
                <div className="header-wrapper">
                    <button className="header-burg" aria-label="Open Menu">
                        <img src="img/burg.svg" alt="Menu Open Icon" />
                    </button>
                    <button className="header-close u-hide-for-desktop" aria-label="Close Menu">
                        <img src="img/close.svg" alt="Close Menu Icon" />
                    </button>
                    <img src="img/23wire-header.svg" className="header-mark" alt="23andMe Wire Mark" />
                </div>
            </section>
        )
    }
}

export default Header
