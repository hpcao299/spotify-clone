// Open / Close Description Text
export function playlistDescriptionOpenOptions(playlistDesElement, seeMoreBtn, showLessBtn) {
    const isOpen = false;
    if (seeMoreBtn && showLessBtn) {
        seeMoreBtn.onclick = function () {
            playlistDesElement.classList.add('open');

        }
        showLessBtn.onclick = function () {
            playlistDesElement.classList.remove('open');
        }
    }
}

// Header Scroll Events
export function headerScroll(header, headerPlaylistName) {
    document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop >= 250) {
            header.style.opacity = 1;
        } else {
            header.style.opacity = 0;
        }

        if (scrollTop >= 350) {
            headerPlaylistName.style.opacity = 1;
        } else {
            headerPlaylistName.style.opacity = 0;
        }
    }
}

// Open / Close User Options & Playlist Options
export function clickOpenEvents(userElement, playlistElement) {
    var userIsOpen = false;
    var playlistIsOpen = false;
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

        // Playlist Options Click Events
        if (e.target.closest('.js-playlist-options-btn')) {
            if (playlistIsOpen) {
                playlistElement.classList.remove('open');
                playlistIsOpen = false;
            } else {
                playlistElement.classList.add('open');
                playlistIsOpen = true;
            }
        } else if (playlistIsOpen) {
            playlistElement.classList.remove('open');
            playlistIsOpen = false;
        }
    }
}