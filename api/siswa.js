const DATA_SISWA = [
    { nama: "A Fabian Syah", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Achmad Wildan", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Ahmad Alfi", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Ahmad Azriel", size: "XL", role: "Sekretaris", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Andrea Hafshah Oktavia", size: "M", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Attaya Kayla", size: "M", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Cahyo Kartiko", size: "XL", role: "Ketua Kelas", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Karina Sakila", size: "M", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Kevin Oktavian Suryana", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Khaysila", size: "M", role: "Bendahara", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "M. Naufal Permana", size: "M", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "M. Refi Yanto", size: "M", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "M. Reza Febriansyah", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "M. Rizky FG", size: "XXL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "M. Rizky Mulya", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "M. Rizqi Mubarak", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "M. Sigit Maulana", size: "XXL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "M. Tegar Alyasin", size: "L", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Moch Farel Al Khairy", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Muhamad Daffa Alexandrio", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Muhamad Raffi Alfathir", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Muhammad Ridwan", size: "XXL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Raehan Syafa", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Raffa", size: "L", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Rafi Izatul", size: "M", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Rahil Aristya Aimar", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Rama", size: "XXL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Ranie Dwi Putri", size: "M", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Reno Yoga Pratama", size: "XXL", role: "Wakil Ketua", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Syakirah Azraa", size: "M", role: "Bendahara", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Three Argha Zulita", size: "L", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Vino Pratama", size: "XL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Vino Sigit H", size: "L", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" },
    { nama: "Zainal Arifin", size: "XXL", role: "Murid", kelas: "XII-RPL-1", pass: "siswa123" }
];

function showSiswa() {
    const role = localStorage.getItem('userRole');
    const root = document.getElementById('main-content');
    root.innerHTML = `
        <h2 class="text-3xl font-black mb-6">Data Siswa XII-RPL-1</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${DATA_SISWA.map(s => `
                <div class="bg-white p-5 rounded-3xl border shadow-sm">
                    <span class="text-[10px] font-black text-indigo-500 uppercase">${s.role}</span>
                    <h3 class="font-bold text-slate-800">${s.nama} (${s.size})</h3>
                </div>
            `).join('')}
        </div>`;
}
