function authLogin() {
    const user = document.getElementById('log-user').value;
    const pass = document.getElementById('log-pass').value;

    if(user === "admin" && pass === "123") {
        document.getElementById('login-view').classList.add('hide');
        document.getElementById('app-view').classList.remove('hide');
        showSiswa(); // Tampilan awal setelah login
    } else {
        alert("Akses Ditolak! Cek Username/Password.");
    }
}
