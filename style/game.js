function cekJawaban() {
    let jawaban = document.getElementById("jawaban").value.toLowerCase();
    let hasil = document.getElementById("hasil");

    if (jawaban === "lucky") {  // Ganti dengan jawaban yang diinginkan
        hasil.innerHTML = "Benar! Selamat 🎉";
        mulaiAnimasiDaun(); // Mulai animasi daun
        setTimeout(function () {
            window.location.href = "secret.html"; // Ganti dengan halaman tujuan
        }, 3000); // Pindah halaman setelah 3 detik
    } else {
        hasil.innerHTML = "Salah! Coba lagi.";
    }
}

// Fungsi untuk membuat animasi daun jatuh
function mulaiAnimasiDaun() {
    let daunContainer = document.getElementById("daun-container");

    for (let i = 0; i < 10; i++) { // Buat 10 daun jatuh
        let daun = document.createElement("div");
        daun.classList.add("daun");
        daun.style.left = Math.random() * window.innerWidth + "px";
        daun.style.animationDuration = (Math.random() * 2 + 3) + "s"; // Kecepatan jatuh random
        daunContainer.appendChild(daun);

        // Hapus daun setelah animasi selesai
        setTimeout(() => {
            daun.remove();
        }, 4000);
    }
}