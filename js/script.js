const root = document.documentElement;
const background = localStorage.getItem('background');

function setTheme() {
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
    localStorage.setItem('background', root.className);
};

document.querySelector('.theme-toggle').addEventListener('click', setTheme);

document.addEventListener('DOMContentLoaded', () => {
    if (background === 'dark') {
        root.className = 'dark';
    } else if (background === 'light') {
        root.className = 'light';
    } else {
        root.className = 'dark';
    }
});