// model.js
const API_URL = "/api/horoscopo/";

// fechaNacimiento debe tener formato: "YYYY-MM-DD"
export async function fetchHoroscope(fechaNacimiento) {
    try {
        const url = `${API_URL}?fecha=${fechaNacimiento}`;
        const response = await fetch(url, {
            mode: "cors",
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const { signo, horoscopo, emoji, fecha } = await response.json();

        return {
            signo,
            horoscopo,
            emoji,
            fecha
        };
    } catch (error) {
        console.error("Error al obtener el horóscopo:", error);
        return null;
    }
}
