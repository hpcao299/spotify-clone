const headerCollectionLinks = document.querySelectorAll('.header__collection-link');
const contentHeading = document.querySelector('.js-content-heading');
const playlistLink = document.querySelector('.playlist__link');
const podcastLink = document.querySelector('.podcast__link');
const artistLink = document.querySelector('.artist__link');
const albumLink = document.querySelector('.album__link');


// Console
console.log('%cChúc bạn một ngày tốt lành 😊', 'color: #1BB954; font-size: 15px');
console.log('%cHave a nice day 😊', 'color: #1BB954; font-size: 15px');

import {
    nonSupportedElements,
    userOptionElement
} from './constants.js';

import {
    showNonSupportedMessage
} from './toast.js';

headerCollectionLinks.forEach(function (element) {
    element.onclick = function (e) {
        setTimeout(function () {
            document.querySelector('.header__collection-link.active').classList.remove('active');
            e.target.classList.add('active');
            setTimeout(function () {
                checkCollectionLinks()
                checkContentHeading();
            }, 100);
        }, 50);
    }
})

function checkCollectionLinks() {
    if (playlistLink) {
        if (playlistLink.classList.contains('active')) {
            document.querySelector('.playlists__content').classList.add('active');
        } else {
            document.querySelector('.playlists__content').classList.remove('active');
        }
    }
    if (podcastLink) {
        if (podcastLink.classList.contains('active')) {
            document.querySelector('.podcasts__content').classList.add('active');
        } else {
            document.querySelector('.podcasts__content').classList.remove('active');
        }
    }
    if (artistLink) {
        if (artistLink.classList.contains('active')) {
            document.querySelector('.artists__content').classList.add('active');
        } else {
            document.querySelector('.artists__content').classList.remove('active');
        }
    }
    if (albumLink) {
        if (albumLink.classList.contains('active')) {
            document.querySelector('.albums__content').classList.add('active');
        } else {
            document.querySelector('.albums__content').classList.remove('active');
        }
    }
}

function checkContentHeading() {
    if (playlistLink.classList.contains('active')) {
        contentHeading.innerText = 'Playlists'
    } else if (podcastLink.classList.contains('active')) {
        contentHeading.innerText = 'Podcasts'
    } else if (artistLink.classList.contains('active')) {
        contentHeading.innerText = 'Artists'
    } else if (albumLink.classList.contains('active')) {
        contentHeading.innerText = '';
    }
}

nonSupportedElements.forEach(function (element) {
    element.onclick = function () {
        showNonSupportedMessage();
    }
})

function openUserOptions(element) {
    var isOpen = false;
    document.onclick = function (e) {
        const target = e.target;
        if (target.closest('.js-user-btn')) {
            if (isOpen) {
                element.classList.remove('open');
                isOpen = false;
            } else {
                element.classList.add('open');
                isOpen = true;
            }
        } else {
            if (isOpen) {
                element.classList.remove('open');
                isOpen = false;
            }
        }
    }
}
openUserOptions(userOptionElement);