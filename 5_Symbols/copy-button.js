document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', event => {
        if (event.target.matches('.copy-btn')) {
            const targetSelector = event.target.dataset.copyTarget;
            const contentElement = document.querySelector(targetSelector);
            if (contentElement) {
                navigator.clipboard.writeText(contentElement.innerText).then(() => {
                    const originalText = event.target.textContent;
                    event.target.textContent = 'Copied!';
                    event.target.disabled = true;
                    setTimeout(() => {
                        event.target.textContent = originalText;
                        event.target.disabled = false;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                    event.target.textContent = 'Error';
                });
            }
        }
    });
});
