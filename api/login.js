function authLogin() {
    const userInput = document.getElementById('log-user').value.trim();
    const passInput = document.getElementById('log-pass').value.trim();

    // 1. Cek Admin
    if(userInput === "admin" && passInput === "123") {
        localStorage.setItem('userRole', 'Admin');
        localStorage.setItem('userName', 'Super Admin');
        return suksesLogin();
    }

    // 2. Cek di Database Siswa (DATA_SISWA dari api/siswa.js)
    const found = DATA_SISWA.find(s => 
        s.nama.toLowerCase() === userInput.toLowerCase() && s.pass === passInput
    );

    if(found) {
        localStorage.setItem('userRole', found.role);
        localStorage.setItem('userName', found.nama);
        suksesLogin();
    } else {
        alert("Gagal Masuk! Periksa Nama Lengkap & Password (siswa123)");
    }
}

function suksesLogin() {
    // Sembunyikan Login, Tampilkan App
    document.getElementById('login-view').classList.add('hide');
    document.getElementById('app-view').classList.remove('hide');
    
    // Update Profile Header
    const name = localStorage.getItem('userName');
    document.getElementById('user-display-name').innerText = name;
    document.getElementById('user-role-display').innerText = localStorage.getItem('userRole');
    document.getElementById('user-initial').innerText = name.charAt(0).toUpperCase();

    // Jalankan Dashboard Utama
    renderDashboardByRole();
}

function renderDashboardByRole() {
    const role = localStorage.getItem('userRole');
    const root = document.getElementById('main-content');
    
    // BERSIHKAN TAMPILAN SEBELUM ISI BARU
    root.innerHTML = ""; 

    if (role === "Ketua Kelas" || role === "Wakil Ketua" || role === "Admin") {
        root.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div class="bg-indigo-600 p-8 rounded-[2.5rem] text-white shadow-xl">
                    <p class="text-[10px] font-black opacity-60 uppercase">Total Siswa</p>
                    <h3 class="text-4xl font-black">${DATA_SISWA.length}</h3>
                </div>
                <button onclick="showAbsensi()" class="bg-white border-2 border-dashed border-indigo-200 p-8 rounded-[2.5rem] flex items-center justify-center gap-4 hover:bg-indigo-50 transition group">
                    <i class="fas fa-calendar-check text-indigo-600 text-2xl"></i>
                    <span class="font-black text-indigo-600">BUKA ABSENSI KELAS</span>
                </button>
            </div>
            <div id="sub-content"></div>`;
    } else {
        root.innerHTML = `
            <div class="bg-white p-10 rounded-[3rem] border shadow-sm mb-10">
                <h3 class="text-2xl font-black text-slate-800">Selamat Datang, ${localStorage.getItem('userName')}!</h3>
                <p class="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Akses Murid Terverifikasi ✅</p>
            </div>
            <div id="sub-content"></div>`;
    }
    
    // Tampilkan List Siswa secara otomatis di area sub-content
    showSiswa();
}
