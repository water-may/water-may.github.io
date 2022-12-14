import React from "react";
import { createRoot } from 'react-dom/client';
import Nav from './components/header.js'

const top = document.getElementById("top");

createRoot(top).render(<Nav />);

// this code is the original one
// document.addEventListener("DOMContentLoaded", () => {
//     const nav = document.querySelector("#nav");
//     const ham = document.querySelector("#ham");
//     const cross = document.querySelector("#cross");
//     ham.style.display = "block";
//     nav.style.display = "none";
//     ham.addEventListener("click", () => {
//         ham.style.display = "none";
//         nav.style.display = "flex";
//     });
//     cross.addEventListener("click", () => {
//         ham.style.display = "block";
//         nav.style.display = "none";
//     });
//     typeWriter();
// });