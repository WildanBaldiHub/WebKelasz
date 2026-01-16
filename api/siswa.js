export default function handler(req, res) {
    const dataSiswa = [
        { id: 1, nama: "Andi Wijaya", status: "Hadir" },
        { id: 2, nama: "Budi Santoso", status: "Hadir" },
        { id: 3, nama: "Citra Lestari", status: "Izin" }
    ];
    res.status(200).json(dataSiswa);
}