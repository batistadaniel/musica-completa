let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let backBoston = document.getElementById("maior-campeao");
let btnPause = document.getElementById('btn-pause');
let btnPlay = document.getElementById('btn-play');

backBoston.style.backgroundColor = '#1d7446';

// corHistLiga.style.color = '#1d7446';

// Mostra o menu ao clicar no botao
btnMenu.addEventListener('click', function() {
    menu.classList.add('abrir-menu');
});

// Fecha o menu ao clicar no botao
menu.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
});

// Fecha o menu ao clicar fora
overlay.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
});

// Quando a pagina carregar iniciar musica
window.onload = function() {
    let audio = document.getElementById("audio");
    audio.play();
}
// Botao de pause
btnPause.addEventListener('click', function() {
    let audio = document.getElementById("audio");
    audio.pause();
    btnPause.style.display = "none";
    btnPlay.style.display = "block";
});
// Botao de play
btnPlay.addEventListener('click', function() {
    let audio = document.getElementById("audio");
    audio.play();
    btnPlay.style.display = "none";
    btnPause.style.display = "block";
});