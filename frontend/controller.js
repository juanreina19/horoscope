// controller.js
import { fetchHoroscope } from "./model.js";
import {
    disableButton,
    enableButton,
    clearView,
    renderHoroscope,
    renderError,
    fadeOut,
} from "./view.js";

let hideTimeout;
const birthdateInput = document.getElementById("birthdate-input");
const getButton = document.getElementById("get-horoscope");

async function showHoroscope() {
    disableButton();
    clearTimeout(hideTimeout);
    clearView();

    const birthdateInput = document.getElementById("birthdate-input");
    const birthdate = birthdateInput.value;

    if (!birthdate) {
        renderError("Por favor, selecciona una fecha de nacimiento.");
        enableButton();
        return;
    }

    const data = await fetchHoroscope(birthdate);
    if (!data) {
        renderError();
        hideTimeout = setTimeout(() => {
            clearView();
            enableButton();
        }, 15000);
        return;
    }

    renderHoroscope(data);

    hideTimeout = setTimeout(fadeOut, 15000);
    setTimeout(() => {
        clearView();
        enableButton();
    }, 16000);
}

getButton.disabled = true;

birthdateInput.addEventListener("input", () => {
    getButton.disabled = !birthdateInput.value;
});

document.getElementById("get-horoscope").addEventListener("click", (event) => {
    event.preventDefault(); // ❗ evita recarga del formulario
    showHoroscope();
});
