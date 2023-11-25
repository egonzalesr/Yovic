document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.btn-toggle');
    const icon = button.querySelector('.fa-chevron-right');

    button.addEventListener('click', function () {
        if (icon.classList.contains('rotate-icon')) {
            icon.style.transform = 'rotate(90deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
        icon.classList.toggle('rotate-icon');
    });
});
