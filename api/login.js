function authLogin() {
    const user = document.getElementById('log-user').value;
    const pass = document.getElementById('log-pass').value;

    if(user === "admin" && pass === "123") {
        localStorage.setItem('userRole', 'Admin');
        localStorage.setItem('userName', 'Super Admin');
        return masukApp();
    }

    const found = DATA_SISWA.find(s => s.nama.toLowerCase() === user.toLowerCase() && s.pass === pass);
    if(found) {
        localStorage.setItem('userRole', found.role);
        localStorage.setItem('userName', found.nama);
        masukApp();
    } else {
        alert("Login Gagal! Gunakan Nama Lengkap & pass 'siswa123'");
    }
}

function masukApp() {
    document.getElementById('login-view').classList.add('hide');
    document.getElementById('app-view').classList.remove('hide');
    showSiswa();
}
