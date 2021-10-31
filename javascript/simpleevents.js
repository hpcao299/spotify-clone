// Get time to greetings
export function getTime(element) {
    var date = new Date();
    var time = date.getHours();

    if (time >= 3) {
        element.innerText = 'Good morning'
    }

    if (time >= 12) {
        element.innerText = 'Good afternoon'
    }

    if (time >= 18) {
        element.innerText = 'Good evening';
    }
}

// Header Opacity Scroll Event
export function headerScrollEvents(header) {
    document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        header.style.opacity = scrollTop / 150;
    }
};

// User Options Click Events
export function openUserOptions(element) {
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

