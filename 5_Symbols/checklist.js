document.addEventListener('DOMContentLoaded', () => {
    // Use event delegation on the body to catch clicks on checklist items
    document.body.addEventListener('click', event => {
        const listItem = event.target.closest('.checklist > li');
        if (listItem) {
            listItem.classList.toggle('checked');
        }
    });
});
