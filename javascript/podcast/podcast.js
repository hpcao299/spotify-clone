import {
    playlistDescriptionOpenOptions,
    headerScroll,
    clickOpenEvents,
    preventNormalSpaceEvent,
} from './podcast-simpleevents.js';

import {
    playlistDescription,
    seeMoreBtn,
    showLessBtn,
    headerElement,
    headerPlaylistName,
    playlistOptionWrapper,
    userOptionElement,
    nonUpdatedInfo,
    nonSupportedElements,
} from '../constants.js';

import audioEvents from './podcast-audio.js';

import {
    showNonSupportedMessage,
    showNonUpdatedInfo
} from '../toast.js';

// //////////////////////////////////////////////////////////////////////////////////
function start() {
    // Open / Close Description Text Click Events
    playlistDescriptionOpenOptions(playlistDescription, seeMoreBtn, showLessBtn);

    // Header Scroll Events
    headerScroll(headerElement, headerPlaylistName);

    // Open / Close User Options & Playlist Options
    clickOpenEvents(userOptionElement, playlistOptionWrapper);

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

    // Audio Events
    audioEvents();

    // Prevent Default Event Of Spacebar
    preventNormalSpaceEvent();

    // Console
    console.log('%cChúc bạn một ngày tốt lành 😊', 'color: #1BB954; font-size: 15px');
    console.log('%cHave a nice day 😊', 'color: #1BB954; font-size: 15px');
}
start();