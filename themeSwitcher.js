const themeSwitcher = document.getElementById('switcher');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    themeSwitcher.checked = currentTheme === 'dark';
}

themeSwitcher.addEventListener('change', function () {
    if (themeSwitcher.checked) {    
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    }
});