// ===============================
// DETAIL UMKM
// ===============================

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const item = umkm.find((data) => data.id === id);

if (item) {
  document.getElementById("umkmImage").src = item.gambar;

  document.getElementById("umkmNama").textContent = item.nama;

  document.getElementById("umkmKategori").textContent = item.kategori;

  document.getElementById("umkmDeskripsi").textContent = item.deskripsi;

  document.getElementById("umkmAlamat").textContent = item.alamat;

  document.getElementById("umkmWA").textContent = item.whatsapp;

  const galleryContainer = document.getElementById("galleryContainer");

  galleryContainer.innerHTML = "";

  item.galeri.forEach((foto, index) => {
    galleryContainer.innerHTML += `
        <img
            src="${foto}"
            class="gallery-img ${index === 0 ? "active" : ""}"
            onclick="gantiFoto('${foto}', this)"
            alt="${item.nama}">
    `;
  });
}

function gantiFoto(foto, element) {
  document.getElementById("detailImage").src = foto;

  document.querySelectorAll(".gallery-img").forEach((img) => {
    img.classList.remove("active");
  });

  element.classList.add("active");
}
