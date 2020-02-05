const $ = document.querySelector.bind(document);

$('.menu-open').onclick = function() {
    document.documentElement.classList.add('active-menu');
}

$('.menu-close').onclick = function() {
    document.documentElement.classList.remove('active-menu');
}

document.documentElement.onclick = event => {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('active-menu')
    }
}