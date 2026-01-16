function masukApp() {
    const role = localStorage.getItem('userRole');
    const name = localStorage.getItem('userName');
    
    document.getElementById('login-view').classList.add('hide');
    document.getElementById('app-view').classList.remove('hide');
    
    // Update Info di Sidebar & Header
    document.getElementById('user-display-name').innerText = name;
    document.getElementById('user-role-display').innerText = role;
    document.getElementById('user-initial').innerText = name.charAt(0);
    
    showSiswa();
}
