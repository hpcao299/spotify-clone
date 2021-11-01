// Get Elements
import {
    firstGreetingElement,
    userOptionElement,
    nonUpdatedElements,
    nonSupportedElements,
    headerElement,
} from './constants.js';

// Toast Message
import {
    showNonUpdatedMessage,
    showNonSupportedMessage
} from './toast.js';

// Simple Events
import {
    getTime,
    headerScrollEvents,
    openUserOptions,
} from './simpleevents.js'

// =================================================================


function start() {
    // Get Time To Greetings
    getTime(firstGreetingElement);

    // User Options Click Events
    openUserOptions(userOptionElement);

    // Toast Message For Non Updated Playlists
    nonUpdatedElements.forEach(function (element) {
        element.onclick = function () {
            showNonUpdatedMessage();
        }
    })

    // Toast Message For Non Supported Features
    nonSupportedElements.forEach(function (element) {
        element.onclick = function () {
            showNonSupportedMessage();
        }
    })

    // Header Opacity Scroll Event
    headerScrollEvents(headerElement);

    // Console
    console.log('%cChúc bạn một ngày tốt lành 😊', 'color: #1BB954; font-size: 15px');
    console.log('%cHave a nice day 😊', 'color: #1BB954; font-size: 15px');
}
start();