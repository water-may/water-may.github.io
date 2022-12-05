var i = 0;
var txt = 'Under Construction 👷.';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
    document.querySelector("#note").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}

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
    typeWriter();
});



