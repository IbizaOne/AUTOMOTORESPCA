// Escuchar el envío del formulario y guardar en Firestore
const form = document.getElementById("formulario-contacto");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  db.collection("mensajes")
    .add({
      nombre,
      email,
      mensaje,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      alert("Mensaje enviado correctamente. ¡Gracias!");
      form.reset();
    })
    .catch((error) => {
      alert("Error al enviar el mensaje: " + error.message);
    });
});

// Navegación con pestañas para que solo muestre una sección a la vez

const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Quitar clase active a links y secciones
    links.forEach(l => l.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // Activar link clickeado y su sección
    link.classList.add("active");
    const id = link.getAttribute("href").substring(1);
    document.getElementById(id).classList.add("active");

    // Para scroll en móviles
    window.scrollTo(0, 0);
    window.addEventListener('keydown', function(event) {
  if(document.getElementById('imageModal').style.display === "flex") {
    if(event.key === "ArrowLeft") prevImage(event);
    else if(event.key === "ArrowRight") nextImage(event);
    else if(event.key === "Escape") closeModal();
  }
});
  });
});
img.addEventListener('click', () => {
  const group = img.getAttribute('data-group');
  const groupImages = Array.from(document.querySelectorAll(`.zoomable[data-group="${group}"]`));
  images = groupImages.map(gImg => ({
    src: gImg.src,
    alt: gImg.alt
  }));
  currentIndex = groupImages.indexOf(img);
  openModal();
  
});
