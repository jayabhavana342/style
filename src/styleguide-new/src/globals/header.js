import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <section class="header">
                <div class="header-wrapper">
                    <button class="header-burg" aria-label="Open Menu">
                        <img src="img/burg.svg" alt="Menu Open Icon" />
                    </button>
                    <button class="header-close u-hide-for-desktop" aria-label="Close Menu">
                        <img src="img/close.svg" alt="Close Menu Icon" />
                    </button>
                    <img src="img/23wire-header.svg" class="header-mark" alt="23andMe Wire Mark" />
                </div>
            </section>
        )
    }
}

export default Header;
