document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("#nav");
    const ham = document.querySelector("#ham");
    const cross = document.querySelector("#cross");
    ham.style.display = "block";
    nav.style.display = "none";
    ham.addEventListener("click", () => {
        ham.style.display = "none";
        nav.style.display = "flex";
    });
    cross.addEventListener("click", () => {
        ham.style.display = "block";
        nav.style.display = "none";
    });
});