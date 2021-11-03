import {
    userOptionElement,
    nonUpdatedInfo,
    nonSupportedElements,
    headerElement,
    playlistOptionWrapper,
    songElement,
    headerPlayBtn,
    headerPlaylistName,
    playlistLikeBtn,
    contentBackgroundColor,
    contentBackgroundImage
} from '../constants.js';

import {
    clickOpenEvents,
    headerScroll,
    playlistLikeClickEvent,
    preventNormalSpaceEvent
} from './playlist-simpleevents.js';

import {
    showNonSupportedMessage,
    showNonUpdatedInfo
} from '../toast.js';

import audioEvents from './playlist-audio.js'

// //////////////////////////////////////////////////////////////////

function start() {
    // Audio Events
    audioEvents(songs);

    // Header Scroll Events
    headerScroll(headerElement, headerPlayBtn, headerPlaylistName, contentBackgroundImage, contentBackgroundColor);

    // Non Supported Message
    nonSupportedElements.forEach((element) => {
        element.onclick = function () {
            showNonSupportedMessage();
        }
    })

    // Non Updated Info
    nonUpdatedInfo.forEach(function (element) {
        element.onclick = function () {
            showNonUpdatedInfo();
        }
    })

    // Playlist Like Button Click Event
    playlistLikeClickEvent(playlistLikeBtn);


    // Click Events
    clickOpenEvents(userOptionElement, playlistOptionWrapper, songElement);

    // Prevent Default Event Of Spacebar
    preventNormalSpaceEvent();

};
start();