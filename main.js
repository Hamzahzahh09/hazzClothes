var xstatus = true;
var nb = false;
var mode = false;


const tombol = document.getElementById('tombol');
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

tombol.addEventListener('click', function() {
    if (xstatus) {
        navbar.classList.add("bg-gray-800");
        menu.classList.remove("hidden");
        menu.classList.add("flex");
        xstatus = false;
    } else {
        if (nb == false || window.scrollY < 51) {
            navbar.classList.remove("bg-gray-800");
        }
        menu.classList.remove("flex");
        menu.classList.add("hidden");
        xstatus = true;
    }
    
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-lg", "bg-gray-800");
        nb = true;
    } else {
        if (xstatus != false) {
            navbar.classList.remove("shadow-lg", "bg-gray-800");
            nb = false;
        }
    }

})

function darkMode() {
    if (mode) {
        document.documentElement.classList.remove('dark');
        mode = false;
        localStorage.setItem('theme', 'light')
    } else {
        document.documentElement.classList.add('dark');
        mode = true;
        localStorage.setItem('theme', 'dark')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
        document.documentElement.classList.add('dark');
        mode = true;
    }
})