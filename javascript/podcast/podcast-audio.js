import {
    audio,
    playBtn,
    previousBtn,
    previous15sBtn,
    nextBtn,
    next15sBtn,
    audioCurrentTime,
    audioDuration,
    audioTimeRange,
    volumeBar,
    volumeIconWrapper
} from '../constants.js';

export default function audioEvents() {
    // Play / Stop Audio
    playStopAudio();

    // Repeat Audio When Click Next / Previous Button
    repeatForNextPreviousBtn(previousBtn, nextBtn);

    // Get Audio Current Time and Duration & Render
    renderDuration();

    // Next / Previous 15s Click Btn Events
    nextPrevious15sEvents();

    // Get Audio Current Time & Render
    renderCurrTime();

    // Keyboard Events
    keyboardEvents();

    // Audio Time Range
    audioProgess();

    // Audio Volume Events
    audioVolume();
}

// Play / Stop Audio
function playStopAudio() {
    var isPlaying = false;
    const playBtnArray = playBtn;

    playBtn.forEach(function (btn, index) {
        btn.onclick = function () {
            if (isPlaying) {
                audio.pause();
                isPlaying = false;
                playBtnArray.forEach(function (element) {
                    element.classList.remove('playing');
                })
            } else {
                audio.play();
                isPlaying = true;
                playBtnArray.forEach(function (element) {
                    element.classList.add('playing');
                })
            }
        }
    })
}

// Repeat Audio When Click Next / Previous Button
function repeatForNextPreviousBtn(previousBtn, nextBtn) {
    previousBtn.onclick = function () {
        audio.load();
        audio.play();
    }
    nextBtn.onclick = function () {
        audio.load();
        audio.play();
    }
}

// Get Audio  Duration & Render
function renderDuration() {
    var audioDurationMinutes = (audio.duration / 60);
    audioDuration.querySelector('.audio-duration-minutes').innerText = Math.floor(audioDurationMinutes);

    var audioDurationSeconds = (audioDurationMinutes + "").split(".")[1];
    audioDuration.querySelector('.audio-duration-seconds').innerText = audioDurationSeconds.slice(0, 2);
}

// Get Audio Current Time & Render
function renderCurrTime() {
    audio.addEventListener('timeupdate', (event) => {
        var audioDuration = Math.floor(audio.currentTime);
        var sec = new Number();
        var min = new Number();
        sec = Math.floor(audioDuration);
        min = Math.floor(sec / 60);
        min = min >= 10 ? min : '0' + min;
        sec = Math.floor(sec % 60);
        sec = sec >= 10 ? sec : '0' + sec;

        console.log(`${min}:${sec}`);
        audioCurrentTime.innerText = `${min}:${sec}`;
    })
}

// Next / Previous 15s Click Btn Events
function nextPrevious15sEvents() {
    next15sBtn.onclick = function () {
        audio.currentTime = audio.currentTime + 15;
    }
    previous15sBtn.onclick = function () {
        audio.currentTime = audio.currentTime - 15;
    }
}

// Keyboard Typing Events
function keyboardEvents() {
    document.addEventListener("keydown", function (event) {
        var x = event.which || event.keyCode;
        // Play / Stop Audio
        if (x == 32) {
            playBtn[0].click();
        }

        // Next 15s
        if (x == 39) {
            next15sBtn.click();
        }

        // Previous 15s
        if (x == 37) {
            previous15sBtn.click();
        }

        // Mute
        if (x == 77) {
            volumeIconWrapper.click();
        }
    });
}

// Audio Time Range
function audioProgess() {
    audio.ontimeupdate = function () {
        if (audio.duration) {
            const progressPercentage = Math.floor(audio.currentTime / audio.duration * 100);
            audioTimeRange.value = progressPercentage;
        }
    }

    audioTimeRange.oninput = function (e) {
        const seekTime = audio.duration / 100 * e.target.value;
        audio.currentTime = seekTime;
    }
}

// Volume Audio Events
function audioVolume() {
    var currVolume = audio.volume;
    var isMute = false;

    // Volume Bar Range
    volumeBar.oninput = function (e) {
        currVolume = e.target.value;
        audio.volume = e.target.value;
        checkVolume();
    }

    // Volume Click Events
    volumeIconWrapper.onclick = function () {
        if (isMute) {
            volumeBar.value = currVolume;
            audio.volume = currVolume;
            checkVolume();
            isMute = false;
        } else {
            volumeBar.value = 0;
            audio.volume = 0;
            volumeIconWrapper.classList.remove('middle', 'max');
            volumeIconWrapper.classList.add('non');
            isMute = true;
        }
    }
}

function checkVolume() {
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
}