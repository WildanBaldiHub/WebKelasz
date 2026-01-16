// api/absensi.js
// Ini adalah serverless function untuk mengelola data absensi
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { studentId, type, location, timestamp } = req.body;
        
        // Simpan ke database (di sini simulasi saja)
        console.log(`[ABSENSI] Siswa ${studentId} ${type} di ${location} pada ${timestamp}`);

        res.status(200).json({ 
            success: true, 
            message: `Absensi ${type} berhasil!`,
            details: { studentId, type, location, timestamp }
        });

    } else if (req.method === 'GET') {
        // Contoh data absensi hari ini
        const absensiHariIni = [
            { id: 1, nama: "Zidane Abdi", waktu: "07:30", status: "Hadir", metode: "NFC" },
            { id: 2, nama: "Siti Aisyah", waktu: "07:35", status: "Hadir", metode: "QR Code" },
            { id: 3, nama: "Budi Santoso", waktu: "08:10", status: "Terlambat", metode: "Manual" }
        ];
        res.status(200).json(absensiHariIni);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
