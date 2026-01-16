function showAbsensi() {
    const role = localStorage.getItem('userRole');
    const isPengurus = ["Ketua Kelas", "Wakil Ketua", "Admin"].includes(role);
    const root = document.getElementById('main-content');
    
    root.innerHTML = `
        <h2 class="text-3xl font-black mb-2">Absensi Kelas</h2>
        <p class="mb-6 text-slate-400 font-bold italic">${isPengurus ? 'Mode Edit Aktif' : 'Mode View Only'}</p>
        <div class="space-y-3">
            ${DATA_SISWA.map(s => `
                <div class="bg-white p-4 rounded-2xl border flex justify-between items-center">
                    <span class="font-bold text-slate-700">${s.nama}</span>
                    ${isPengurus ? 
                        `<button onclick="this.innerText='✓'" class="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold">ABSEN</button>` 
                        : `<span class="text-xs text-slate-300">Hadir</span>`}
                </div>
            `).join('')}
        </div>`;
}
