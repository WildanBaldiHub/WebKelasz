function authLogin() {
    const userEmail = document.getElementById('log-user').value; // Masukkan Nama/Email
    const pass = document.getElementById('log-pass').value;

    // Cari di Database Siswa (DATA_SISWA ada di api/siswa.js)
    const foundSiswa = DATA_SISWA.find(s => 
        (s.nama.toLowerCase() === userEmail.toLowerCase() || s.email === userEmail) && s.pass === pass
    );

    // Cek jika dia Admin/Guru (Master Access)
    if(userEmail === "admin" && pass === "123") {
        sessionStorage.setItem('userRole', 'Admin');
        sessionStorage.setItem('userKelas', 'ALL');
        masukDashboard();
        return;
    }

    if(foundSiswa) {
        sessionStorage.setItem('userName', foundSiswa.nama);
        sessionStorage.setItem('userRole', foundSiswa.role); // Ketua Kelas, Murid, dll
        sessionStorage.setItem('userKelas', foundSiswa.kelas);
        masukDashboard();
    } else {
        alert("🚨 Akun tidak ditemukan di kelas manapun!");
    }
}

function masukDashboard() {
    document.getElementById('login-view').classList.add('hide');
    document.getElementById('app-view').classList.remove('hide');
    
    // Tampilkan Menu Berdasarkan ROLE
    filterMenuByRole();
    showSiswa(); // Default page
}
