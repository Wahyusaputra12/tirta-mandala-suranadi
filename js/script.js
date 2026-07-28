// ==========================================
// TIRTA MANDALA SURANADI
// script.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  tampilkanWisata();
  aktifkanScrollTop();
});

// ==========================================
// MENAMPILKAN DATA WISATA
// ==========================================

function tampilkanWisata() {
  const container = document.getElementById("wisataContainer");

  if (!container) return;

  if (typeof wisata === "undefined") {
    console.error("Data wisata tidak ditemukan.");

    return;
  }

  container.innerHTML = "";

  wisata.forEach((item) => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `

            <img
                src="${item.gambar}"
                alt="${item.nama}"
                loading="lazy"
                onerror="this.src='images/no-image.jpg'">

            <div class="card-body">

                <span class="kategori">
                    ${item.kategori}
                </span>

                <h3>${item.nama}</h3>

                <p>${item.deskripsi}</p>

                <div class="card-info">

                    <p>
                        <i class="fa-solid fa-location-dot"></i>
                        ${item.alamat}
                    </p>

                    <p>
                        <i class="fa-solid fa-clock"></i>
                        ${item.jam}
                    </p>

                    <p>
                        <i class="fa-solid fa-ticket"></i>
                        ${item.tiket}
                    </p>

                </div>

                <div class="card-button">

                    <a
                        href="wisata-detail.html?id=${item.id}"
                        class="btn-detail">

                        Detail

                    </a>

                    <a
                        href="${item.maps}"
                        target="_blank"
                        class="btn-maps">

                        Google Maps

                    </a>

                </div>

            </div>

        `;

    container.appendChild(card);
  });
}

// ==========================================
// TOMBOL SCROLL KE ATAS
// ==========================================

function aktifkanScrollTop() {
  const toTop = document.getElementById("toTop");

  if (!toTop) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      toTop.style.display = "flex";
    } else {
      toTop.style.display = "none";
    }
  });

  toTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
}
