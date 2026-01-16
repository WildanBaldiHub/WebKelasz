const daftarSiswa = [
    { nama: "A Fabian Syah", size: "XL", role: "Murid" },
    { nama: "Achmad Wildan", size: "XL", role: "Murid" },
    { nama: "Ahmad Alfi", size: "XL", role: "Murid" },
    { nama: "Ahmad Azriel", size: "XL", role: "Sekretaris" },
    { nama: "Andrea Hafshah Oktavia", size: "M", role: "Murid" },
    { nama: "Attaya Kayla", size: "M", role: "Murid" },
    { nama: "Cahyo Kartiko", size: "XL", role: "Ketua Kelas" },
    { nama: "Karina Sakila", size: "M", role: "Murid" },
    { nama: "Kevin Oktavian Suryana", size: "XL", role: "Murid" },
    { nama: "Khaysila", size: "M", role: "Bendahara 1" },
    { nama: "M. Naufal Permana", size: "M", role: "Murid" },
    { nama: "M. Refi Yanto", size: "M", role: "Murid" },
    { nama: "M. Reza Febriansyah", size: "XL", role: "Murid" },
    { nama: "M. Rizky FG", size: "XXL", role: "Murid" },
    { nama: "M. Rizky Mulya", size: "XL", role: "Murid" },
    { nama: "M. Rizqi Mubarak", size: "XL", role: "Murid" },
    { nama: "M. Sigit Maulana", size: "XXL", role: "Murid" },
    { nama: "M. Tegar Alyasin", size: "L", role: "Murid" },
    { nama: "Moch Farel Al Khairy", size: "XL", role: "Murid" },
    { nama: "Muhamad Daffa Alexandrio", size: "XL", role: "Murid" },
    { nama: "Muhamad Raffi Alfathir", size: "XL", role: "Murid" },
    { nama: "Muhammad Ridwan", size: "XXL", role: "Murid" },
    { nama: "Raehan Syafa", size: "XL", role: "Murid" },
    { nama: "Raffa", size: "L", role: "Murid" },
    { nama: "Rafi Izatul", size: "M", role: "Murid" },
    { nama: "Rahil Aristya Aimar", size: "XL", role: "Murid" },
    { nama: "Rama", size: "XXL", role: "Murid" },
    { nama: "Ranie Dwi Putri", size: "M", role: "Murid" },
    { nama: "Reno Yoga Pratama", size: "XXL", role: "Wakil Ketua" },
    { nama: "Syakirah Azraa", size: "M", role: "Bendahara 2" },
    { nama: "Three Argha Zulita", size: "L", role: "Murid" },
    { nama: "Vino Pratama", size: "XL", role: "Murid" },
    { nama: "Vino Sigit H", size: "L", role: "Murid" },
    { nama: "Zainal Arifin", size: "XXL", role: "Murid" }
];

function setActiveNav(id) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('nav-active'));
    document.getElementById(id).classList.add('nav-active');
}

function showSiswa() {
    setActiveNav('btn-siswa');
    const root = document.getElementById('root-content');
    root.innerHTML = `
        <h2 class="text-4xl font-black mb-10 text-slate-800">Daftar Murid XII RPL 1</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${daftarSiswa.map(s => `
                <div class="bg-white p-6 rounded-[2rem] border shadow-sm relative group hover:border-indigo-500 transition">
                    <div class="absolute top-0 right-0 p-3 bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white font-black text-[10px] rounded-bl-xl transition">${s.size}</div>
                    <p class="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">${s.role}</p>
                    <h3 class="text-lg font-bold text-slate-800">${s.nama}</h3>
                    <p class="text-[10px] text-slate-400 font-bold uppercase mt-2">Status: Active Student</p>
                </div>
            `).join('')}
        </div>
    `;
}
