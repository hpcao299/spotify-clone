export function clickOpenEvents(userElement, playlistElement, songElement) {
    var userIsOpen = false;
    var playlistIsOpen = false;
    var songIsOpen = false;
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

        // Song Options Click Events
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

// Header Scroll Events
export function headerScroll(header, headerPlayBtn, headerPlaylistName) {
    document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        console.log(scrollTop)

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
    }
}

// Playlist Like Button Click Event
export function playlistLikeClickEvent(playlistButtonElement) {
    var playlistIsLike = false;
    playlistButtonElement.onclick = function () {
        if (playlistIsLike) {
            playlistButtonElement.classList.remove('active');
            playlistIsLike = false;
            likeNoti('Bỏ thích playlist thành công');
        } else {
            playlistButtonElement.classList.add('active');
            playlistIsLike = true;
            likeNoti('Thích playlist thành công');
        }
    }
}

// Notifications when click playlist / songs liked button
function likeNoti(message) {
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

// Song Like Button Click Event
export function songLikeClickEvent(songButtonElements) {
    var songIsLike = false;
    songButtonElements.forEach(function (element) {
        element.onclick = function () {
            if (songIsLike) {
                songIsLike = false;
                element.classList.add('active');
                likeNoti('Thích bài hát thành công')
            } else {
                songIsLike = true;
                element.classList.remove('active');
                likeNoti('Bỏ thích bài hát thành công')
            }
        }
    })
}

