import {
    songPlaylist,
    audio,
    songThumb,
    songName,
    songAuthor,
    playBtn,
    audioTimeRange,
    songList,
    nextBtn,
    previousBtn,
    shuffleBtn,
    repeatBtn,
    volumeBar,
    volumeIconWrapper,
    audioDuration,
    audioCurrentTime
} from '../constants.js';

import {
    closeOpenSongOptions,
    likeNoti,
} from './playlist-simpleevents.js'

const PLAYER_STORAGE_KEY = 'SPOTIFY_PLAYER'
// //////////////////////////////////////////////////////////////////////////
export default function audioEvents(songs) {
    const app = {
        date: date,
        songs: songs,
        currentVolume: 1,
        isMute: false,
        isPlaying: false,
        isRandom: false,
        isRepeat: false,
        currentIndex: 0,
        config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
        setConfig: function (key, value) {
            this.config[key] = value;
            localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
        },

        // Properties
        defineProperties: function () {
            Object.defineProperty(this, 'currentSong', {
                get: function () {
                    return this.songs[this.currentIndex];
                }
            });
        },

        // Render UI
        render: function () {
            var htmls = songs.map(function (song, index) {
                return `
                <div class="song ${index === app.currentIndex ? `active` : ''}" data-index="${index}">
                    <div class="song-number">
                        <h2>${index + 1}</h2>
                        <div class="song-play-btn js-audio-song-play-btn">
                            <svg height="16" role="img" width="16" viewBox="0 0 24 24"
                                style="transform: translateX(-3px)">
                                <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="var(--white-color)">
                                </polygon>
                            </svg>
                        </div>
                        <div class="song-play-playing">
                            <img src="/assets/image/playing.gif" alt="" style="width: 14px; height: 14px;">
                        </div>
                    </div>
                    <div class="song-info">
                        <img src="${song.image}" alt=""
                            class="song-playlist-thumb">
                        <div class="song-content">
                            <h2 class="song-name" style="line-height: 100%;">
                                <a href="#" class="js-non-updated-info">${song.name}</a>
                            </h2>
                            <div class="song-des">
                                <span class="song-type flex-center">
                                    <span>E</span>
                                </span>
                                <h3 class="song-author">
                                    <a href="#" class="js-non-updated-info">${song.singer2 ? song.singer + ',' : song.singer}</a>
                                    <a href="#" class="js-non-updated-info">${app.checkSinger2(song.singer2, song.singer3)}</a>
                                    <a href="#" class="js-non-updated-info">${song.singer3 ? song.singer3 : ''}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="song-album">
                        <h2>
                            <a href="#" class="js-non-updated-info">${song.album}</a>
                        </h2>
                    </div>
                    <div class="song-date-added">
                        <h2>${date}</h2>
                    </div>
                    <div class="song-duration">
                        <div class="song-liked js-liked-btn song-list-liked">
                            <svg class="song-unliked-icon" fill="var(--white-color)" role="img" height="16"
                                width="16" viewBox="0 0 16 16">
                                <path
                                    d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z">
                                </path>
                            </svg>
                            <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="song-liked-icon"
                                fill="#1BB954">
                                <path fill="none" d="M0 0h16v16H0z"></path>
                                <path
                                    d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z">
                                </path>
                            </svg>
                        </div>
                        <h2>${song.render}</h2>
                        <div class="song-options js-song-options-btn">
                            <svg role="img" height="16" width="16" viewBox="0 0 16 16" fill="var(--white-color)">
                                <path
                                    d="M2 6.5a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 002 6.5zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 0014 6.5z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <ul class="song-options-list">
                        <li class="song-options-item js-no-supported song-options-item--separate">Add to queue</li>
                        <li class="song-options-item js-no-supported">Go to song audio</li>
                        <li class="song-options-item js-no-supported">Go to artist</li>
                        <li class="song-options-item js-no-supported">Go to album</li>
                        <li class="song-options-item js-no-supported song-options-item--separate">Show credits</li>
                        <li class="song-options-item js-no-supported">Save to your Liked Songs</li>
                        <li class="song-options-item song-options-item--separate song-options-item--more-options">
                            <span>Add to playlist</span>
                            <svg role="img" height="16" width="16" fill="var(--white-color)" viewBox="0 0 16 16"
                                style="transform: rotate(90deg)">
                                <path d="M13 10L8 4.206 3 10z"></path>
                            </svg>
                            <ul class="song-more-options-list">
                                <li class="song-more-options-item js-no-supported">Add to new playlist</li>
                            </ul>
                        </li>
                        <li class="song-options-item song-options-item--separate song-options-item--more-options">
                            <span>Share</span>
                            <svg role="img" height="16" width="16" fill="var(--white-color)" viewBox="0 0 16 16"
                                style="transform: rotate(90deg)">
                                <path d="M13 10L8 4.206 3 10z"></path>
                            </svg>
                            <ul class="song-more-options-list">
                                <li class="song-more-options-item js-no-supported">Copy Song Link</li>
                                <li class="song-more-options-item js-no-supported">Embed track</li>
                            </ul>
                        </li>
                        <li class="song-options-item js-no-supported">Open in Desktop app</li>
                    </ul>
                </div>
                `
            })
            songPlaylist.innerHTML = htmls.join('');
        },
        checkSinger2: function (singer2, singer3) {
            if (singer2) {
                if (singer3) {
                    return singer2 + ','
                } else {
                    return singer2
                }
            } else {
                return '';
            }
        },
        // Render Duration On Player
        renderDuration: function () {
            audio.onloadedmetadata = function () {
                var convertTime = function (time) {
                    var mins = Math.floor(time / 60);
                    if (mins < 10) {
                        mins = '0' + String(mins);
                    }
                    var secs = Math.floor(time % 60);
                    if (secs < 10) {
                        secs = '0' + String(secs);
                    }

                    return mins + ':' + secs;
                }
                audioDuration.innerText = convertTime(audio.duration);
            };
        },
        renderCurrTime: function () {
            audio.addEventListener('timeupdate', (event) => {
                var audioDuration = Math.floor(audio.currentTime);
                var sec = new Number();
                var min = new Number();
                sec = Math.floor(audioDuration);
                min = Math.floor(sec / 60);
                min = min >= 10 ? min : '0' + min;
                sec = Math.floor(sec % 60);
                sec = sec >= 10 ? sec : '0' + sec;

                audioCurrentTime.innerText = `${min}:${sec}`;
            })
        },

        // Playlist Events
        handleEvents: function () {
            const _this = this;
            // Play / Pause Audio Click Events
            playBtn.forEach(function (btn) {
                btn.onclick = function (e) {
                    if (_this.isPlaying) {
                        audio.pause();
                    } else {
                        audio.play();
                    }
                }
            })

            // When Song Is Played
            audio.onplay = function () {
                _this.isPlaying = true;
                playBtn.forEach(function (btn) {
                    btn.classList.add('playing');
                })
                document.querySelector('.song.active').classList.add('playing');
                document.querySelector('.sidebar__playlist-item.active').classList.add('playing');
            }

            // When Song Is Paused
            audio.onpause = function () {
                _this.isPlaying = false;
                playBtn.forEach(function (btn) {
                    btn.classList.remove('playing');
                })
                document.querySelector('.song.active').classList.remove('playing');
                document.querySelector('.sidebar__playlist-item.active').classList.remove('playing');
            }

            // When Audio Time Is Changing
            audio.ontimeupdate = function () {
                if (audio.duration) {
                    const progressPercentage = Math.floor(audio.currentTime / audio.duration * 100);
                    audioTimeRange.value = progressPercentage;
                }
            }

            // When Seek Time
            audioTimeRange.oninput = function (e) {
                const seekTime = audio.duration / 100 * e.target.value;
                audio.currentTime = seekTime;
            }

            // When Click On Next Btn
            nextBtn.onclick = function () {
                if (_this.isRandom) {
                    _this.playRandomSong();
                } else {
                    _this.nextSong();
                }
                audio.play();
                _this.render();
                _this.renderDuration();
            }

            // When Click On Pre Btn
            previousBtn.onclick = function () {
                if (_this.isRandom) {
                    _this.playRandomSong();
                } else {
                    _this.prevSong();
                }
                audio.play();
                _this.render();
                _this.renderDuration();
            }

            // When Click On Shuffle Btn
            shuffleBtn.onclick = function () {
                _this.isRandom = !_this.isRandom;
                _this.setConfig('isRandom', _this.isRandom);
                shuffleBtn.classList.toggle('active', _this.isRandom);
            }

            // When Click On Repeat Btn
            repeatBtn.onclick = function () {
                _this.isRepeat = !_this.isRepeat;
                _this.setConfig('isRepeat', _this.isRepeat);
                repeatBtn.classList.toggle('active', _this.isRepeat)
            }

            // Next Song When Audio Ended
            audio.onended = function () {
                if (_this.isRepeat) {
                    audio.play();
                } else {
                    nextBtn.click();
                }
            }

            // When Change Volume
            volumeBar.oninput = function (e) {
                _this.currentVolume = e.target.value;
                audio.volume = e.target.value;
                app.checkVolume();
            }

            // Volume Click Events
            volumeIconWrapper.onclick = function () {
                if (_this.isMute) {
                    volumeBar.value = _this.currentVolume;
                    audio.volume = _this.currentVolume;
                    app.checkVolume();
                    _this.isMute = false;
                } else {
                    volumeBar.value = 0;
                    audio.volume = 0;
                    volumeIconWrapper.classList.remove('middle', 'max');
                    volumeIconWrapper.classList.add('non');
                    _this.isMute = true;
                }
            }

            // When Click On Song
            songList.onclick = function (e) {
                const song = e.target.closest('.song');
                const songActive = e.target.closest('.song.active');
                const songNode = e.target.closest('.song:not(.active)');
                const songOptions = e.target.closest('.song-options');
                const songLikeBtn = e.target.closest('.js-liked-btn');
                const songPlayBtn = e.target.closest('.js-audio-song-play-btn');
                var songIsLike = false;
                if (songNode || songOptions || songLikeBtn || songPlayBtn) {
                    // When Click On Song
                    if (songNode && !songOptions && !songLikeBtn && !songPlayBtn) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        _this.render();
                        _this.renderDuration();
                        _this.loadCurrentSong();
                        audio.play();
                    }

                    // When Click On Song Options
                    if (songOptions) {
                        closeOpenSongOptions(song);
                    }

                    // When Click On Song Like Btn
                    if (songLikeBtn) {
                        if (songIsLike) {
                            songIsLike = false;
                            songLikeBtn.classList.remove('active');
                            likeNoti('Bạn đã bỏ thích bài hát này')
                        } else {
                            songIsLike = true;
                            songLikeBtn.classList.add('active');
                            likeNoti('Bạn đã thêm thích bài hát')
                        }
                    }

                    // When Click On Song Play Btn
                    if (songPlayBtn) {
                        songNode.click();
                    }
                }
            }
        },

        // Render Song Information To UI
        loadCurrentSong: function () {
            songThumb.src = this.currentSong.image;
            songName.innerText = this.currentSong.name;
            songAuthor.innerText = this.currentSong.singer;
            audio.src = this.currentSong.path;
        },
        loadConfig: function () {
            this.isRandom = this.config.isRandom
            this.isRepeat = this.config.isRepeat
        },
        nextSong: function () {
            this.currentIndex++
            if (this.currentIndex >= this.songs.length) {
                this.currentIndex = 0;
            }
            this.loadCurrentSong();
        },
        prevSong: function () {
            this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.songs.length - 1;
            }
            this.loadCurrentSong();
        },
        playRandomSong: function () {
            var playedSong = [];
            let newIndex;

            do {
                newIndex = Math.floor(Math.random() * this.songs.length);
            } while (this.currentIndex === newIndex);

            this.currentIndex = newIndex;
            this.loadCurrentSong();
        },
        checkVolume: function () {
            if (volumeBar.value >= 0.7) {

                volumeIconWrapper.classList.remove('middle', 'non');
                volumeIconWrapper.classList.add('max');
            } else
                if (volumeBar.value >= 0.1) {

                    volumeIconWrapper.classList.remove('max', 'non');
                    volumeIconWrapper.classList.add('middle');
                } else
                    if (volumeBar.value == 0) {

                        volumeIconWrapper.classList.remove('middle', 'max');
                        volumeIconWrapper.classList.add('non');
                    }
        },
        keyboardEvents: function () {
            document.addEventListener("keydown", function (event) {
                var x = event.which || event.keyCode;
                // Play / Stop Audio
                if (x == 32) {
                    playBtn[0].click();
                }

                // Mute
                if (x == 77) {
                    volumeIconWrapper.click();
                }
            });
        },

        start: function () {
            this.render();
            this.renderDuration();
            this.renderCurrTime();
            this.loadConfig();
            this.defineProperties();
            this.loadCurrentSong();
            this.handleEvents();
            this.keyboardEvents();

            // Check Random & Repeat & Volume At The Beginning
            repeatBtn.classList.toggle('active', this.isRepeat);
            shuffleBtn.classList.toggle('active', this.isRandom);
        }
    }
    app.start();
}