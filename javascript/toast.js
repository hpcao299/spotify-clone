// Show non updated toast message
function toast({
    title = '',
    message = '',
    type = 'info',
}) {
    const main = document.getElementById('toast')
    if (main) {
        const toast = document.createElement('div');
        const icons = {
            jsNonUpdated: 'fas fa-bell',
            jsNonSupported: 'fas fa-info-circle'
        }
        const icon = icons[type];

        // Auto remove toast
        const toastAutoRemove = setTimeout(() => {
            main.removeChild(toast);
        }, 3500)

        // Remove toast when click to close
        toast.onclick = function (e) {
            if (e.target.closest('.toast-close')) {
                main.removeChild(toast);
                clearTimeout(toastAutoRemove);
            }
        }

        toast.classList.add('toast', `${type}`);

        toast.innerHTML = `
            <div class="toast-icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast-body">
                <h1 class="toast__title">${title}</h1>
                <h2 class="toast__msg">${message}
                </h2>
            </div>
            <div class="toast-close">
                <i class="fas fa-times"></i>
            </div>
        `
        main.appendChild(toast);
    }
}

export function showNonUpdatedMessage() {
    toast({
        title: 'Thông báo',
        message: 'Website chưa cập nhật playlist này. Bạn có thể trải nghiệm 6 playlist đầu.',
        type: 'jsNonUpdated'
    })
}

export function showNonUpdatedPlaylistMessage() {
    toast({
        title: 'Thông báo',
        message: 'Website chưa cập nhật playlist này.',
        type: 'jsNonUpdated'
    })
}

export function showNonSupportedMessage() {
    toast({
        title: 'Thông báo',
        message: 'Website chưa phát triển tính năng này.',
        type: 'jsNonSupported'
    })
}

export function showNonUpdatedInfo() {
    toast({
        title: 'Thông báo',
        message: 'Website chưa cập nhật thông tin này.',
        type: 'jsNonUpdated'
    })
}