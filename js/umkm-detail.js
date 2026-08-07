const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const item = umkm.find((u) => u.id === id);

if (item) {
  document.getElementById("umkmImage").src = item.gambar;

  document.getElementById("umkmTitle").textContent = item.nama;

  document.getElementById("umkmDeskripsi").textContent = item.deskripsi;

  document.getElementById("umkmAlamat").textContent = item.alamat;

  document.getElementById("umkmWA").textContent = item.whatsapp;

  const gallery = document.getElementById("galleryContainer");

  gallery.innerHTML = "";

  item.galeri.forEach((foto, index) => {
    const img = document.createElement("img");

    img.src = foto;

    img.className = "gallery-img";

    if (index === 0) {
      img.classList.add("active");
    }

    img.onclick = function () {
      document.getElementById("umkmImage").src = foto;

      document
        .querySelectorAll(".gallery-img")
        .forEach((i) => i.classList.remove("active"));

      img.classList.add("active");
    };

    gallery.appendChild(img);
  });
}
