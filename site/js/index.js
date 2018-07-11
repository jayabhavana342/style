(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    const body = document.getElementsByTagName('body')[0];
    const headerBurg = document.querySelector('.header-burg');
    const mobileNav = document.querySelector('.nav');
    const closeMobileNav = document.querySelector('.nav-close');
    const contents = document.querySelector('.contents-wrapper');
    const mobileHeader = document.querySelector('.header-wrapper');

    headerBurg.addEventListener('click', () => {
        mobileNav.classList.add('mod-showing');
        contents.classList.add('mod-moved');
        mobileHeader.classList.add('mod-moved');
        body.classList.add('noscroll');
    });

    closeMobileNav.addEventListener('click', () => {
        mobileNav.classList.remove('mod-showing');
        contents.classList.remove('mod-moved');
        mobileHeader.classList.remove('mod-moved');
        body.classList.remove('noscroll');
    });

})));
