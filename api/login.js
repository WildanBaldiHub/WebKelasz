function authLogin() {
    const user = document.getElementById('log-user').value;
    const pass = document.getElementById('log-pass').value;

    // Login Admin
    if(user === "admin" && pass === "123") {
        localStorage.setItem('userRole', 'Admin');
        localStorage.setItem('userName', 'Super Admin');
        return renderDashboardByRole();
    }

    // Login Murid Berdasarkan Database di siswa.js
    const found = DATA_SISWA.find(s => s.nama.toLowerCase() === user.toLowerCase() && s.pass === pass);
    
    if(found) {
        localStorage.setItem('userRole', found.role);
        localStorage.setItem('userName', found.nama);
        renderDashboardByRole();
    } else {
        alert("Login Gagal! Pastikan Nama Sesuai List & Password 'siswa123'");
    }
}

function renderDashboardByRole() {
    const role = localStorage.getItem('userRole');
    const name = localStorage.getItem('userName');
    
    // Munculkan Dashboard, Sembunyikan Login
    document.getElementById('login-view').classList.add('hide');
    document.getElementById('app-view').classList.remove('hide');
    
    // Update Profile Header
    document.getElementById('user-display-name').innerText = name;
    document.getElementById('user-role-display').innerText = role;
    document.getElementById('user-initial').innerText = name.charAt(0);

    // KONTEN BERBEDA TIAP ROLE
    const root = document.getElementById('main-content');
    
    if (role === "Ketua Kelas" || role === "Wakil Ketua" || role === "Admin") {
        // Dashboard Pengurus: Ada Statistik & Shortcut Absen
        root.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div class="bg-indigo-600 p-6 rounded-[2rem] text-white shadow-xl shadow-indigo-100">
                    <p class="text-[10px] font-black opacity-60 uppercase">Total Siswa</p>
                    <h3 class="text-3xl font-black">${DATA_SISWA.length}</h3>
                </div>
                <div class="bg-white p-6 rounded-[2rem] border shadow-sm">
                    <p class="text-[10px] font-black text-slate-400 uppercase">Status Kelas</p>
                    <h3 class="text-xl font-black text-emerald-500 italic">KONDUSIF ✅</h3>
                </div>
                <button onclick="showAbsensi()" class="bg-white p-6 rounded-[2rem] border border-dashed border-indigo-300 flex items-center justify-center gap-3 hover:bg-indigo-50 transition group">
                    <i class="fas fa-calendar-check text-indigo-600"></i>
                    <span class="font-black text-indigo-600 text-sm">INPUT ABSEN</span>
                </button>
            </div>
            <div id="sub-content"></div>
        `;
        showSiswa(); // Tampilkan list siswa di bawah statistik
    } else if (role === "Bendahara") {
        // Dashboard Bendahara: Fokus ke Keuangan (Preview)
        root.innerHTML = `
            <div class="bg-white p-10 rounded-[3rem] border shadow-sm mb-10">
                <h3 class="text-2xl font-black text-slate-800 mb-4">Laporan Kas Kelas</h3>
                <div class="h-32 bg-slate-50 rounded-2xl border-2 border-dashed flex items-center justify-center">
                    <p class="text-slate-400 font-bold italic text-sm">Fitur Pembukuan Kas sedang maintenance...</p>
                </div>
            </div>
            <div id="sub-content"></div>
        `;
        showSiswa();
    } else {
        // Dashboard Murid Biasa
        root.innerHTML = `
            <div class="bg-white p-8 rounded-[3rem] border shadow-sm mb-10 flex items-center gap-6">
                <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-3xl">🎓</div>
                <div>
                    <h3 class="text-2xl font-black text-slate-800">Halo, ${name}!</h3>
                    <p class="text-slate-400 font-medium text-sm text-sm">Semangat belajar hari ini di kelas XII RPL 1!</p>
                </div>
            </div>
            <div id="sub-content"></div>
        `;
        showSiswa();
    }
}
