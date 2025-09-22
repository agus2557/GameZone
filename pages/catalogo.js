document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-juegos");
    const buscador = document.getElementById("buscador");

    // Cargar el JSON
    fetch("juegos.json")
        .then(res => res.json())
        .then(juegos => {
            mostrarJuegos(juegos);

            // Buscar juegos en tiempo real
            buscador.addEventListener("input", e => {
                const texto = e.target.value.toLowerCase();
                const filtrados = juegos.filter(juego => juego.nombre.toLowerCase().includes(texto));
                mostrarJuegos(filtrados);
            });
        });

    // Función para mostrar los juegos
    function mostrarJuegos(lista) {
        contenedor.innerHTML = "";
        lista.forEach(juego => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            tarjeta.innerHTML = `
                <img src="${juego.imagen}" alt="${juego.nombre}">
                <h2>${juego.nombre}</h2>
                <p>${juego.descripcion}</p>
                <a href="${juego.link}" class="boton">Ver más</a>
            `;
            contenedor.appendChild(tarjeta);
        });
    }
});
