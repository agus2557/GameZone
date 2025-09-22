document.addEventListener("DOMContentLoaded", () => {

    // Modal
    const modal = document.getElementById("modal");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDesc = document.getElementById("modal-desc");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    if(modal && modalTitulo && modalDesc && modalImg && closeBtn){
        document.querySelectorAll(".juego").forEach(juego => {
            juego.addEventListener("click", () => {
                modal.style.display = "flex";
                modalTitulo.innerText = juego.dataset.titulo || juego.querySelector("h2, h3").innerText;
                modalDesc.innerText = juego.dataset.descripcion || "Descripción no disponible";
                modalImg.src = juego.dataset.imagen || juego.querySelector("img").src;
            });
        });

        closeBtn.onclick = () => { modal.style.display = "none"; }
        window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }
    }

    // Noticias dinámicas
    const noticiasList = document.getElementById("noticias-list");
    if(noticiasList){
        const noticias = [
            { titulo: "Cyber Quest", texto: "Nueva actualización con 10 misiones adicionales." },
            { titulo: "Fantasy World", texto: "Evento especial de verano con recompensas exclusivas." },
            { titulo: "Speed Racer", texto: "Torneo mundial en línea abierto este mes." }
        ];
        noticias.forEach(n => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${n.titulo}:</strong> ${n.texto}`;
            noticiasList.appendChild(li);
        });
    }

    // Carrusel
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const grid = document.querySelector(".juegos-grid");

    if(prev && next && grid){
        next.addEventListener("click", () => { grid.scrollBy({ left: 220, behavior: "smooth" }); });
        prev.addEventListener("click", () => { grid.scrollBy({ left: -220, behavior: "smooth" }); });
    }

    // Menú hamburguesa
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");
    if(hamburger && navLinks){
        hamburger.addEventListener("click", () => { navLinks.classList.toggle("active"); });
    }

});
