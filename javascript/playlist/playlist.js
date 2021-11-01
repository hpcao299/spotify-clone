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
    songLikeBtns
} from '../constants.js';

import {
    clickOpenEvents,
    headerScroll,
    playlistLikeClickEvent,
    songLikeClickEvent
} from './playlist-simpleevents.js';

import {
    showNonSupportedMessage,
    showNonUpdatedInfo
} from '../toast.js';

// //////////////////////////////////////////////////////////////////

function start() {
    // Header Scroll Events
    headerScroll(headerElement, headerPlayBtn, headerPlaylistName);

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

    // Song Like Button Click Events
    songLikeClickEvent(songLikeBtns);

    // Playlist Like Button Click Event
    playlistLikeClickEvent(playlistLikeBtn);


    // Click Events
    clickOpenEvents(userOptionElement, playlistOptionWrapper, songElement);
};
start();