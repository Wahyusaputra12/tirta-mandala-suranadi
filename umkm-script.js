// ==============================
// MENAMPILKAN DATA UMKM
// ==============================

const umkmContainer = document.getElementById("umkmContainer");

if (umkmContainer && Array.isArray(umkm)) {
  umkmContainer.innerHTML = "";

  umkm.forEach((item) => {
    const card = `

        <div class="umkm-card">

            <div class="umkm-image">

                <img src="${item.gambar}"
                     alt="${item.nama}"
                     onerror="this.src='images/no-image.jpg'">

            </div>

            <div class="umkm-content">

                <span class="kategori">

                    ${item.kategori}

                </span>

                <h3>${item.nama}</h3>

                <p>

                    ${item.deskripsi.substring(0, 120)}...

                </p>

                <div class="umkm-info">

                    <p>📍 ${item.alamat}</p>

                </div>

                <div class="umkm-button">

                    <a href="umkm-detail.html?id=${item.id}"
                       class="btn-detail">

                        Detail

                    </a>

                    <a href="${item.maps}"
                       target="_blank"
                       class="btn-maps">

                        Google Maps

                    </a>

                </div>

            </div>

        </div>

        `;

    umkmContainer.insertAdjacentHTML("beforeend", card);
  });
}
