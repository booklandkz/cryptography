// Бұл жерде JavaScript кодтарын қосуға болады, мысалы анимацияларды бақылау үшін
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    setTimeout(function () {
        overlay.style.display = "none"; // Баешова Мадина ұсынады жазуын жасыру
    }, 7000); // 7 секундтан кейін жасырылады
});
