function ampliarImagen(imagen) {
  const modal = document.getElementById("modal");
  const imagenGrande = document.getElementById("imagenGrande");
  imagenGrande.src = imagen.src;
  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
