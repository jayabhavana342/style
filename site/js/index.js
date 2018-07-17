(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    const body = document.getElementsByTagName('body')[0];
    const headerBurg = document.querySelector('.header-burg');
    const nav = document.querySelector('.nav');
    const closeMobileNav = document.querySelector('.nav-close');
    const contents = document.querySelector('.contents-wrapper');
    const mobileHeader = document.querySelector('.header-wrapper');
    const overlay = document.querySelector('.nav-overlay');
    const headerClose = document.querySelector('.header-close');

    function detectDesktopBurger() {
        if (window.getComputedStyle(headerClose).order === '0') {
            return false;
        } else {
            return true;
        }
    }

    function openNav() {
        if (detectDesktopBurger()) {
            headerBurg.classList.add('u-hide-for-desktop');
            headerClose.classList.remove('u-hide-for-desktop');
        }
        nav.classList.add('mod-showing');
        contents.classList.add('mod-moved');
        mobileHeader.classList.add('mod-moved');
        body.classList.add('noscroll');
        overlay.classList.add('mod-showing');
    }

    function closeNav() {
        if (detectDesktopBurger()) {
            headerBurg.classList.remove('u-hide-for-desktop');
            headerClose.classList.add('u-hide-for-desktop');
        }
        nav.classList.remove('mod-showing');
        contents.classList.remove('mod-moved');
        mobileHeader.classList.remove('mod-moved');
        body.classList.remove('noscroll');
        overlay.classList.remove('mod-showing');
    }

    headerBurg.addEventListener('click', () => {
        openNav();
    });

    closeMobileNav.addEventListener('click', () => {
        closeNav();
    });

    overlay.addEventListener('click', () => {
        closeNav();
    });

    headerClose.addEventListener('click', () => {
        closeNav();
    });

    // Handle resizes since the close button is entirely different for mobile vs desktop
    window.addEventListener('resize', function() {
        if (nav.classList.contains('mod-showing')) {
            if (detectDesktopBurger()) {
                headerBurg.classList.add('u-hide-for-desktop');
                headerClose.classList.remove('u-hide-for-desktop');
            }
        }
    }, true);

})));
