let elemento = document.getElementById('borda');

function borda(event) {
    elemento.style.outline = '1px solid #428BFA';
    event.stopPropagation();
}

function lborda(event) {
    if (!elemento.contains(event.target)) {
        elemento.style.outline = '';
    }
}

elemento.addEventListener('click', borda);
document.addEventListener('click', lborda);
