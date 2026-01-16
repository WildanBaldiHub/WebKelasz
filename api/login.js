export default function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Harus POST' });

    const { email, password } = req.body;

    // Database dummy - di masa depan ganti dengan Supabase/MongoDB
    const users = [
        { email: 'admin@sekolah.id', pass: '123', role: 'admin', name: 'Zidane Admin' },
        { email: 'guru@sekolah.id', pass: '123', role: 'guru', name: 'Pak Budi Guru' },
        { email: 'siswa@sekolah.id', pass: '123', role: 'siswa', name: 'Siti Siswa' },
        { email: 'wildan@sekolah.id', pass: '334', role: 'siswa', name: 'Wildan Siswa' }
    ];

    const user = users.find(u => u.email === email && u.pass === password);

    if (user) {
        return res.status(200).json({
            success: true,
            role: user.role,
            name: user.name
        });
    } else {
        return res.status(401).json({ success: false });
    }
}