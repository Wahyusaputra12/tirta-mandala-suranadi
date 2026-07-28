// ===============================
// DETAIL WISATA
// ===============================

// Ambil parameter id dari URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Cari data wisata berdasarkan id
const item = wisata.find((w) => w.id === id);

const gallery = document.getElementById("galleryContainer");

gallery.innerHTML = "";

if (item.galeri) {
  item.galeri.forEach((foto) => {
    gallery.innerHTML += `

            <img src="${foto}"
                 alt="${item.nama}"
                 class="gallery-img">

        `;
  });
}

// Jika data ditemukan
if (item) {
  // Judul halaman
  document.title = `${item.nama} | Tirta Mandala Suranadi`;

  // Hero
  document.getElementById("detailImage").src = item.gambar;
  document.getElementById("detailImage").alt = item.nama;

  document.getElementById("detailNama").textContent = item.nama;
  document.getElementById("detailKategori").textContent = item.kategori;

  // Deskripsi
  document.getElementById("detailDeskripsi").textContent = item.deskripsi;
  // ================= GALERI =================
  const gallery = document.getElementById("galleryContainer");

  const hero = document.getElementById("detailImage");

  gallery.innerHTML = "";

  item.galeri.forEach((foto) => {
    gallery.innerHTML += `

<img src="${foto}"

onclick="document.getElementById('detailImage').src='${foto}'">

`;
  });

  // Informasi
  document.getElementById("detailAlamat").textContent = item.alamat || "-";

  document.getElementById("detailJam").textContent = item.jam || "-";

  document.getElementById("detailTiket").textContent = item.tiket || "-";

  // Tombol Google Maps
  const maps = document.getElementById("detailMaps");

  if (item.maps && item.maps !== "#") {
    maps.href = item.maps;
  } else {
    maps.href = "#";
    maps.textContent = "Lokasi Belum Tersedia";
    maps.style.pointerEvents = "none";
    maps.style.opacity = "0.6";
  }
}

// Jika data tidak ditemukan
else {
  document.body.innerHTML = `

        <section style="
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            font-family:Poppins,sans-serif;
            flex-direction:column;
        ">

            <h1 style="color:#2E7D32;">
                Data Wisata Tidak Ditemukan
            </h1>

            <p>
                Destinasi yang Anda cari tidak tersedia.
            </p>

            <br>

            <a href="index.html#wisata"
               style="
                background:#2E7D32;
                color:white;
                padding:14px 28px;
                border-radius:40px;
                text-decoration:none;
               ">

                Kembali ke Beranda

            </a>

        </section>

    `;
}
