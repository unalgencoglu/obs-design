const temaBtn = document.querySelector(".tema-btn");
const menuBtn = document.getElementById("menu-btn");

function temaDegistir() {
    const koyu = document.body.classList.toggle("dark-theme");
    temaBtn.querySelector("i").className = koyu ? "ph ph-sun" : "ph ph-moon";
    temaBtn.querySelector(".tema-yazi").textContent = koyu ? "Açık Tema" : "Koyu Tema";
    localStorage.setItem("tema", koyu ? "koyu" : "acik");
}

temaBtn.addEventListener("click", temaDegistir);
if (localStorage.getItem("tema") === "koyu") temaDegistir();

menuBtn.addEventListener("click", () => {
    const kapali = document.body.classList.toggle("sidebar-kapali");
    localStorage.setItem("sidebar", kapali ? "kapali" : "acik");
});

if (localStorage.getItem("sidebar") === "kapali") {
    document.body.classList.add("sidebar-kapali");
}