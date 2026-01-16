<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMART ERP - XII RPL 2</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: #f1f5f9; color: #1e293b; }
        .hide { display: none !important; }
        .sidebar-link.active { @apply bg-indigo-600 text-white shadow-xl shadow-indigo-200 scale-105; }
        .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.4); }
        .card-custom { @apply bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm transition-all duration-300; }
        .card-custom:hover { @apply shadow-xl shadow-slate-200 -translate-y-1; }
        .chat-box { height: 400px; overflow-y: auto; display: flex; flex-direction: column-reverse; }
        .status-btn { @apply w-8 h-8 rounded-xl text-[10px] font-black transition-all flex items-center justify-center border; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    </style>
</head>
<body>

    <div id="view-landing" class="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white overflow-hidden">
        <div class="absolute w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[150px] -top-40 -left-40 opacity-20 animate-pulse"></div>
        <h1 class="animate__animated animate__backInDown text-7xl md:text-9xl font-extrabold italic tracking-tighter mb-4">RPL<span class="text-indigo-500">TWO.</span></h1>
        <p class="animate__animated animate__fadeInUp animate__delay-1s text-slate-400 font-bold mb-10 uppercase tracking-[0.4em] text-[10px]">Cloud Based Class Management</p>
        <button onclick="goToLogin()" class="animate__animated animate__zoomIn animate__delay-1s bg-indigo-600 text-white px-12 py-4 rounded-full font-black hover:bg-indigo-500 hover:scale-110 transition-all shadow-2xl shadow-indigo-500/40 uppercase tracking-widest text-xs">Enter System</button>
    </div>

    <div id="view-login" class="hide fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-xl p-4">
        <div class="animate__animated animate__zoomIn bg-white p-10 rounded-[3rem] w-full max-w-md">
            <h2 class="text-2xl font-black text-slate-900 mb-8 text-center uppercase italic">Identify Yourself</h2>
            <div class="space-y-4">
                <select id="select-role" onchange="updateNameList()" class="w-full p-5 bg-slate-100 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-indigo-500 appearance-none cursor-pointer">
                    <option value="" disabled selected>Pilih Jabatan...</option>
                    <option value="Guru">Guru Mata Pelajaran</option>
                    <option value="Ketua Kelas">Ketua Kelas</option>
                    <option value="Sekretaris">Sekretaris</option>
                    <option value="Bendahara">Bendahara</option>
                    <option value="Murid">Siswa</option>
                </select>
                <select id="select-nama" class="w-full p-5 bg-slate-100 rounded-2xl outline-none font-bold border-2 border-transparent focus:border-indigo-500 appearance-none cursor-pointer">
                    <option value="" disabled selected>Pilih Nama...</option>
                </select>
                <button onclick="handleLogin()" class="w-full bg-slate-900 text-white py-5 rounded-2xl font-black hover:bg-indigo-600 transition-all active:scale-95 text-xs uppercase tracking-widest">Open Dashboard</button>
            </div>
        </div>
    </div>

    <div id="view-app" class="hide min-h-screen flex">
        <aside class="w-72 bg-white border-r border-slate-100 p-8 fixed h-full flex flex-col z-50">
            <div class="mb-12">
                <h2 class="text-2xl font-black text-slate-900 italic tracking-tighter">RPL<span class="text-indigo-600">TWO.</span></h2>
                <div class="w-8 h-1 bg-indigo-600 mt-1 rounded-full"></div>
            </div>
            
            <nav id="sidebar-nav" class="space-y-2 flex-1 overflow-y-auto pr-2">
                <button onclick="showContent('dash')" id="btn-dash" class="sidebar-link w-full text-left p-4 rounded-2xl font-bold text-slate-400 flex items-center transition-all text-sm gap-4"><i class="fas fa-grid-2"></i> Dashboard</button>
                <button onclick="showContent('chat')" id="btn-chat" class="sidebar-link w-full text-left p-4 rounded-2xl font-bold text-slate-400 flex items-center transition-all text-sm gap-4"><i class="fas fa-comment-dots"></i> Forum Chat</button>
                <button onclick="showContent('tugas')" id="btn-tugas" class="sidebar-link w-full text-left p-4 rounded-2xl font-bold text-slate-400 flex items-center transition-all text-sm gap-4"><i class="fas fa-book-open"></i> Tugas</button>
                <p class="pt-6 pb-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">Presensi</p>
                <button onclick="showContent('absen-siswa')" id="btn-absen-siswa" class="sidebar-link w-full text-left p-4 rounded-2xl font-bold text-slate-400 flex items-center transition-all text-sm gap-4"><i class="fas fa-users"></i> Siswa</button>
                <button onclick="showContent('absen-guru')" id="btn-absen-guru" class="sidebar-link w-full text-left p-4 rounded-2xl font-bold text-slate-400 flex items-center transition-all text-sm gap-4"><i class="fas fa-user-tie"></i> Guru</button>
                <p class="pt-6 pb-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">Finance</p>
                <button onclick="showContent('kas')" id="btn-kas" class="sidebar-link w-full text-left p-4 rounded-2xl font-bold text-slate-400 flex items-center transition-all text-sm gap-4"><i class="fas fa-wallet"></i> Uang Kas</button>
            </nav>

            <button onclick="logout()" class="p-4 mt-4 bg-slate-50 text-slate-400 rounded-2xl font-black text-[10px] flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all uppercase tracking-widest"><i class="fas fa-power-off"></i> Logout</button>
        </aside>

        <main class="ml-72 p-12 w-full">
            <header class="flex justify-between items-center mb-12 animate__animated animate__fadeIn">
                <div>
                    <h2 id="page-title" class="text-4xl font-black tracking-tighter text-slate-900 uppercase italic">Dashboard</h2>
                    <p class="text-xs font-bold text-indigo-500 mt-1 uppercase tracking-widest" id="current-date"></p>
                </div>
                <div class="flex items-center gap-4 glass py-2 px-6 rounded-full">
                    <div id="u-initial" class="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-black text-lg">?</div>
                    <div>
                        <p id="u-name" class="text-[11px] font-black text-slate-900 leading-none">User Name</p>
                        <p id="u-role" class="text-[8px] font-bold text-indigo-500 uppercase tracking-[0.2em] mt-1">Role</p>
                    </div>
                </div>
            </header>

            <div id="content-area">
                <section id="section-dash" class="page-content hide grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="card-custom p-10 bg-indigo-600 text-white col-span-2 relative overflow-hidden border-0">
                        <i class="fas fa-shield-check absolute -right-10 -bottom-10 text-[15rem] opacity-10"></i>
                        <h3 class="text-4xl font-black mb-2 tracking-tighter italic">Live Sync Active.</h3>
                        <p class="text-indigo-100 font-bold opacity-70 text-sm max-w-md">Sistem Cloud XII RPL 2 terhubung. Data absensi dan tugas diperbarui secara otomatis tanpa refresh.</p>
                    </div>
                    <div class="card-custom p-10 flex flex-col justify-center">
                        <p class="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Total Kas Kelas</p>
                        <h3 id="total-kas-display" class="text-4xl font-black text-slate-900 tracking-tighter">Rp 0</h3>
                    </div>
                </section>

                <section id="section-chat" class="page-content hide card-custom p-8 flex flex-col h-[75vh]">
                    <div id="chat-box" class="chat-box flex-1 mb-6 p-6 bg-slate-50 rounded-[2rem] space-y-4"></div>
                    <div class="flex gap-3">
                        <input type="text" id="chat-input" placeholder="Ketik pesan..." class="flex-1 p-5 bg-slate-100 rounded-2xl font-bold outline-none focus:ring-2 ring-indigo-500">
                        <button onclick="window.db_ops.sendChat()" class="p-5 bg-indigo-600 text-white rounded-2xl w-20 hover:scale-105 transition shadow-lg shadow-indigo-200"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </section>

                <section id="section-absen-siswa" class="page-content hide card-custom p-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="list-absen-siswa"></div>
                </section>

                <section id="section-absen-guru" class="page-content hide card-custom p-10">
                    <div class="grid grid-cols-1 gap-3" id="list-absen-guru"></div>
                </section>

                <section id="section-tugas" class="page-content hide space-y-4">
                    <div id="guru-tugas-input" class="hide p-10 card-custom border-dashed border-2 bg-slate-50/50">
                        <input type="text" id="t-judul" placeholder="Tulis tugas baru..." class="w-full p-5 bg-white rounded-2xl font-bold outline-none border mb-4">
                        <button onclick="window.db_ops.sendTugas()" class="bg-indigo-600 text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest">Publish</button>
                    </div>
                    <div id="list-tugas" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                </section>

                <section id="section-kas" class="page-content hide space-y-6">
                    <div id="bendahara-kas-input" class="hide p-10 card-custom bg-emerald-50/50 border-emerald-100">
                        <div class="flex gap-4">
                            <select id="k-nama" class="flex-1 p-5 bg-white rounded-2xl font-bold outline-none border"></select>
                            <input type="number" id="k-jumlah" placeholder="Rp" class="w-40 p-5 bg-white rounded-2xl font-bold outline-none border">
                            <button onclick="window.db_ops.sendKas()" class="bg-emerald-600 text-white px-10 rounded-2xl font-black text-[10px] uppercase">Simpan</button>
                        </div>
                    </div>
                    <div class="card-custom p-10">
                        <div id="list-kas" class="space-y-3"></div>
                    </div>
                </section>
            </div>
        </main>
    </div>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
        import { getDatabase, ref, set, push, onValue, query, limitToLast } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

        // CONFIG FIREBASE
        const firebaseConfig = {
            apiKey: "AIzaSyCKoeMMj0-iAVb_xp998S1W3U4KU3fuFVs",
            authDomain: "web-kelaz.firebaseapp.com",
            databaseURL: "https://web-kelaz-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "web-kelaz",
            storageBucket: "web-kelaz.firebasestorage.app",
            messagingSenderId: "393212253974",
            appId: "1:393212253974:web:722ee1237a62d949536237"
        };

        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        // DATA SISWA (A-Z) - CLEANED & SORTED
        const SISWA_NAMES = [
            "A Fabian Syah", "Abdul Wafi", "Achmad Wildan", "Ahmad Alfi", "Ahmad Azriel", 
            "Andrea Hafshah Oktavia", "Attaya Kayla", "Cahyo Kartiko", "Farrel Alkhayri", 
            "Karina Sakila", "Kevin Oktavian Suryana", "Khaysila", "Kinddy Putra", 
            "M Naufal Permana", "M Reza Febriansyah", "M Rizki Fadilah Guntor", 
            "M Rizki Mulya", "M Rizqi Mubarak", "M Sigit Maulana", "M Tegar Alyasin", 
            "M. Refi Yanto", "Muhamad Daffa Alexandrio", "Muhamad Raffi Alfathir", 
            "Muhammad Ridwan", "Raehan Syafa", "Raffa Maydiansyah", "Rafi Izatul", 
            "Rahil Aristya Aimar", "Rama Putra", "Ranie Dwi Putri", "Revan", 
            "Syakirah Azraa", "Three Argha Zulita", "Vino Pratama", "Vino Sigit H", 
            "Zainal Arifin"
        ];

        const GURU_NAMES = [
            "Wali Kelas XII RPL 2", "Guru Produktif RPL", "Guru Sejarah", "Guru B. Indonesia", 
            "Guru B. Jepang", "Guru B. Inggris", "Guru Matematika", "Guru PKK", 
            "Guru PKN", "Guru PJOK", "Guru PAI"
        ];

        // UI HELPERS
        window.goToLogin = () => {
            document.getElementById('view-landing').classList.add('hide');
            document.getElementById('view-login').classList.remove('hide', 'animate__animated', 'animate__zoomIn');
            void document.getElementById('view-login').offsetWidth; 
            document.getElementById('view-login').classList.add('animate__animated', 'animate__zoomIn');
        };

        window.updateNameList = () => {
            const role = document.getElementById('select-role').value;
            const sel = document.getElementById('select-nama');
            sel.innerHTML = '<option disabled selected>Pilih Nama...</option>';
            
            let list = [];
            if(role === 'Guru') list = GURU_NAMES;
            else if(role === 'Murid') list = SISWA_NAMES;
            else if(role === 'Ketua Kelas') list = ["Cahyo Kartiko"];
            else if(role === 'Sekretaris') list = ["Ahmad Azriel"];
            else if(role === 'Bendahara') list = ["Khaysila"];

            list.forEach(n => sel.innerHTML += `<option value="${n}">${n}</option>`);
        };

        window.handleLogin = () => {
            const r = document.getElementById('select-role').value;
            const n = document.getElementById('select-nama').value;
            if(!r || !n) return;
            localStorage.setItem('uRole', r);
            localStorage.setItem('uName', n);
            initAppUI();
        };

        window.logout = () => {
            localStorage.clear();
            location.reload();
        };

        window.showContent = (page) => {
            document.querySelectorAll('.page-content').forEach(p => p.classList.add('hide'));
            document.querySelectorAll('.sidebar-link').forEach(b => b.classList.remove('active'));
            const target = document.getElementById('section-' + page);
            target.classList.remove('hide');
            target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__faster');
            document.getElementById('btn-' + page).classList.add('active');
            document.getElementById('page-title').innerText = page.replace('-', ' ').toUpperCase();
        };

        // DATABASE OPERATIONS
        window.db_ops = {
            sendChat: () => {
                const text = document.getElementById('chat-input').value;
                if(!text) return;
                push(ref(db, 'chats'), {
                    n: localStorage.getItem('uName'),
                    r: localStorage.getItem('uRole'),
                    t: text,
                    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                });
                document.getElementById('chat-input').value = '';
            },
            sendTugas: () => {
                const j = document.getElementById('t-judul').value;
                if(!j) return;
                push(ref(db, 'tugas'), { j, sender: localStorage.getItem('uName'), date: new Date().toLocaleDateString() });
                document.getElementById('t-judul').value = '';
            },
            markSiswa: (n, s) => {
                set(ref(db, 'absen_siswa/' + n.replace(/\s/g, '_')), { s, by: localStorage.getItem('uName') });
            },
            markGuru: (n, s) => {
                set(ref(db, 'absen_guru/' + n.replace(/\s/g, '_')), { s, time: new Date().toLocaleTimeString() });
            },
            sendKas: () => {
                const n = document.getElementById('k-nama').value;
                const j = document.getElementById('k-jumlah').value;
                if(!n || !j) return;
                push(ref(db, 'kas'), { n, j });
            }
        };

        // REALTIME SYNC
        function startSync() {
            // Sync Chat
            onValue(query(ref(db, 'chats'), limitToLast(20)), (snap) => {
                const box = document.getElementById('chat-box');
                box.innerHTML = '';
                const data = snap.val();
                if(data) {
                    Object.values(data).forEach(m => {
                        const isMe = m.n === localStorage.getItem('uName');
                        box.innerHTML += `
                            <div class="flex ${isMe ? 'justify-end' : 'justify-start'} animate__animated animate__fadeInUp animate__faster">
                                <div class="${isMe ? 'bg-indigo-600 text-white' : 'bg-white border text-slate-700'} p-4 rounded-3xl max-w-[80%] shadow-sm">
                                    <p class="text-[7px] font-black uppercase opacity-60 mb-1">${m.n} (${m.r})</p>
                                    <p class="text-xs font-bold">${m.t}</p>
                                </div>
                            </div>`;
                    });
                }
            });

            // Sync Absen Siswa
            onValue(ref(db, 'absen_siswa'), (snap) => {
                const data = snap.val() || {};
                const list = document.getElementById('list-absen-siswa');
                const canEdit = ["Sekretaris", "Ketua Kelas", "Guru"].includes(localStorage.getItem('uRole'));
                
                list.innerHTML = SISWA_NAMES.map(n => {
                    const k = n.replace(/\s/g, '_');
                    const st = data[k]?.s || 'B';
                    const colorMap = { 'H': 'bg-emerald-500', 'S': 'bg-amber-500', 'I': 'bg-blue-500', 'A': 'bg-red-500', 'B': 'bg-white text-slate-300' };
                    
                    return `
                        <div class="flex justify-between items-center p-4 bg-slate-50/50 rounded-3xl border border-slate-100">
                            <span class="text-[10px] font-black text-slate-700">${n}</span>
                            <div class="flex gap-1">
                                ${['H','S','I','A'].map(opt => `
                                    <button onclick="${canEdit ? `window.db_ops.markSiswa('${n}','${opt}')` : ''}" 
                                    class="status-btn ${st === opt ? colorMap[opt] + ' text-white border-transparent' : colorMap['B']}">
                                        ${opt}
                                    </button>
                                `).join('')}
                            </div>
                        </div>`;
                }).join('');
            });

            // Sync Absen Guru
            onValue(ref(db, 'absen_guru'), (snap) => {
                const data = snap.val() || {};
                const list = document.getElementById('list-absen-guru');
                const isGuru = localStorage.getItem('uRole') === 'Guru';
                
                list.innerHTML = GURU_NAMES.map(n => {
                    const k = n.replace(/\s/g, '_');
                    const st = data[k]?.s || 'B';
                    return `
                        <div class="flex justify-between items-center p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
                            <span class="text-xs font-black text-slate-800">${n}</span>
                            ${isGuru && n === localStorage.getItem('uName') ? 
                                `<button onclick="window.db_ops.markGuru('${n}','H')" class="bg-indigo-600 text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase">Masuk Kelas</button>` : 
                                `<span class="text-[10px] font-black ${st==='H'?'text-emerald-500':'text-slate-300'} uppercase italic">${st==='H'?'Hadir':'Belum Absen'}</span>`}
                        </div>`;
                }).join('');
            });

            // Sync Kas
            onValue(ref(db, 'kas'), (snap) => {
                const data = snap.val();
                const list = document.getElementById('list-kas');
                let total = 0;
                list.innerHTML = '';
                if(data) {
                    Object.values(data).reverse().forEach(k => {
                        total += parseInt(k.j);
                        list.innerHTML += `<div class="flex justify-between p-4 bg-slate-50 rounded-2xl text-[10px] font-black uppercase"><span>${k.n}</span><span class="text-emerald-600">Rp ${parseInt(k.j).toLocaleString()}</span></div>`;
                    });
                }
                document.getElementById('total-kas-display').innerText = 'Rp ' + total.toLocaleString();
            });

            // Sync Tugas
            onValue(ref(db, 'tugas'), (snap) => {
                const data = snap.val();
                const list = document.getElementById('list-tugas');
                list.innerHTML = '';
                if(data) {
                    Object.values(data).reverse().forEach(t => {
                        list.innerHTML += `<div class="p-8 card-custom"><p class="text-[8px] font-black text-indigo-500 uppercase mb-2">${t.sender} • ${t.date}</p><h4 class="font-bold text-slate-800 text-sm">${t.j}</h4></div>`;
                    });
                }
            });
        }

        // APP INITIALIZER
        function initAppUI() {
            const r = localStorage.getItem('uRole');
            const n = localStorage.getItem('uName');
            if(r && n) {
                document.getElementById('view-landing').classList.add('hide');
                document.getElementById('view-login').classList.add('hide');
                document.getElementById('view-app').classList.remove('hide');
                document.getElementById('u-name').innerText = n;
                document.getElementById('u-role').innerText = r;
                document.getElementById('u-initial').innerText = n.charAt(0);
                document.getElementById('current-date').innerText = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

                if(r === 'Bendahara') {
                    document.getElementById('bendahara-kas-input').classList.remove('hide');
                    const kn = document.getElementById('k-nama');
                    SISWA_NAMES.forEach(s => kn.innerHTML += `<option value="${s}">${s}</option>`);
                }
                if(r === 'Guru') document.getElementById('guru-tugas-input').classList.remove('hide');

                startSync();
                showContent('dash');
            }
        }

        initAppUI();
    </script>
</body>
</html>
