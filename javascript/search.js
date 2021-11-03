"use strict";
const topGenres = document.querySelector('.js-top-genres');
const scrollLeftBtn = document.querySelector('.js-scroll-left-btn');
const scrollRightBtn = document.querySelector('.js-scroll-right-btn');
const searchInput = document.querySelector('.js-header-search-input');
const searchClearBtn = document.querySelector('.js-header-search-clear-btn');
const contentHeader = document.querySelector('.js-content-header');
const nonUpdatedGenres = document.querySelectorAll('.js-non-updated-genres');
const userElement = document.querySelector('.js-user-btn');

import {
    showNonUpdatedSearchFeature,
    showNonUpdatedGenres
} from './toast.js';

document.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop >= 212) {
        contentHeader.style.opacity = 1;
    } else {
        contentHeader.style.opacity = 0;
    }
}

topGenres.onscroll = function () {
    var scrollLeft = topGenres.scrollLeft;

    setTimeout(function () {
        if (scrollLeft > 1) {
            scrollLeftBtn.style.display = 'flex';
        } else {
            scrollLeftBtn.style.display = 'none';
        }
    }, 200)

    setTimeout(function () {
        if (scrollLeft < 227) {
            scrollRightBtn.style.display = 'flex';
        } else {
            scrollRightBtn.style.display = 'none';
        }
    }, 200)
}

scrollLeftBtn.onclick = function () {
    topGenres.scrollLeft = 0;
}

scrollRightBtn.onclick = function () {
    topGenres.scrollLeft = topGenres.clientWidth;
}

searchInput.oninput = function (e) {
    if (e.target.value.length > 0) {
        searchClearBtn.style.display = 'block';
    } else {
        searchClearBtn.style.display = 'none';
    }
}

document.addEventListener("keydown", function (event) {
    var isFocused = (document.activeElement === searchInput);
    var x = event.which || event.keyCode;

    // Search 
    if (x == 13) {
        if (isFocused) {
            showNonUpdatedSearchFeature();
            searchClearBtn.click();
        }
    }
});

var userIsOpen = false;
document.onclick = function (e) {
    // User Options Click Events
    if (e.target.closest('.js-user-btn')) {
        if (userIsOpen) {
            userElement.classList.remove('open');
            userIsOpen = false;
        } else {
            userElement.classList.add('open');
            userIsOpen = true;
        }
    } else if (userIsOpen) {
        userElement.classList.remove('open');
        userIsOpen = false;
    }
}

searchClearBtn.onclick = function () {
    searchInput.value = '';
    searchClearBtn.style.display = 'none';
}

nonUpdatedGenres.forEach(function (genre) {
    genre.onclick = function () {
        showNonUpdatedGenres();
    }
})