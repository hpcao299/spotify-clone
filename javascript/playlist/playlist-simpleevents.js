export function clickOpenEvents(userElement, playlistElement, songElement) {
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

// Header Scroll Events
export function headerScroll(header, headerPlayBtn, headerPlaylistName, contentBackgroundImage, contentBackgroundColor, songDes) {
    const distance = songDes ? songDes.offsetTop - 72 : null;
    document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop >= 180) {
            header.style.opacity = 1;
        } else {
            header.style.opacity = 0;
        }

        if (scrollTop >= 285) {
            headerPlayBtn.style.opacity = 1;
            setTimeout(() => {
                headerPlaylistName.style.opacity = 1;
            }, 150);
        } else {
            headerPlayBtn.style.opacity = 0;
            setTimeout(() => {
                headerPlaylistName.style.opacity = 0;
            }, 150);
        }

        if (contentBackgroundImage && contentBackgroundColor) {
            const scale = 1.1 - (scrollTop / 6050);
            contentBackgroundImage.style.transform = `scale(${scale})`;
            contentBackgroundColor.style.opacity = scrollTop / 130;
            if (scrollTop >= 125) {
                contentBackgroundImage.style.opacity = 0;
            } else {
                contentBackgroundImage.style.opacity = 0.7;
            }
        }

        if (songDes) {
            if (scrollTop >= distance) {
                songDes.classList.add('fixed');
                document.querySelector('.songs-list').classList.add('margin');
            } else {
                songDes.classList.remove('fixed');
                document.querySelector('.songs-list').classList.remove('margin');
            }
        }
    }
}

// Playlist Like Button Click Event
export function playlistLikeClickEvent(playlistButtonElement) {
    var playlistIsLike = false;
    playlistButtonElement.onclick = function () {
        if (playlistIsLike) {
            playlistButtonElement.classList.remove('active');
            playlistIsLike = false;
            likeNoti('Bạn đã bỏ thích playlist');
        } else {
            playlistButtonElement.classList.add('active');
            playlistIsLike = true;
            likeNoti('Bạn đã thêm thích playlist');
        }
    }
}

// Notifications when click playlist / songs liked button
export function likeNoti(message) {
    const main = document.querySelector('.like-notifications-wrapper');
    if (main) {
        const wrapper = document.createElement('div')
        wrapper.classList.add('notifi-wrapper')
        wrapper.innerHTML = `
        <div class="like-notifications flex-center js-like-notifications">
                <h1 class="js-like-message">${message}</h1>
        </div>
        `
        main.appendChild(wrapper);
        setTimeout(() => {
            main.removeChild(wrapper);
        }, 3250)
    }
}

export function closeOpenSongOptions(songElement) {
    var songIsOpen = false;
    document.onclick = function (e) {
        if (e.target.closest('.js-song-options-btn')) {
            if (songIsOpen) {
                songElement.classList.remove('open');
                songIsOpen = false;
            } else {
                songElement.classList.add('open');
                songIsOpen = true;
            }
        } else if (songIsOpen) {
            songElement.classList.remove('open');
            songIsOpen = false;
        }
    }
}

// Prevent Default Event Of Spacebar
export function preventNormalSpaceEvent() {
    window.addEventListener("keydown", function (event) {
        if (
            ['input', 'textarea', 'select', 'button']
                .indexOf(document.activeElement.tagName.toLowerCase()) == -1
        ) {
            event.preventDefault();
        } else {

        }
    })
}